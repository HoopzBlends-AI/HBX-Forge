# HBX-Forge Architecture

## High-Level View

```
┌─────────────────────────────────────────────────────────────┐
│                    🎯 MISSION CONTROL                       │
│                  (Next.js Dashboard at /forge)              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  🧠 ORCHESTRATOR API                         │
│              (Fastify + BullMQ task queue)                  │
│                                                              │
│  • Plan engine     • Agent spawner                          │
│  • Approval gates  • Webhook dispatcher                     │
│  • SITREP generator • Telegram notifier                     │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────┬───────┴────────┬──────────────────┐
        ▼             ▼                ▼                  ▼
   ┌────────┐   ┌──────────┐    ┌──────────────┐   ┌──────────┐
   │ Sub-   │   │ Sub-     │    │ Sub-         │   │ Sub-     │
   │ agent  │   │ agent    │    │ agent        │   │ agent    │
   │ ID     │   │ Portal   │    │ Audit        │   │ Security │
   └────────┘   └──────────┘    └──────────────┘   └──────────┘
        │             │                │                  │
        └─────────────┴────────────────┴──────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    🔒 HBX PLATFORM CORE                      │
│  HBX-Identity | HBX-Portal | HBX-Audit | HBX-Crypto | ...   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  🌍 COUNTRY PROFILES (YAML)                  │
│      nigeria.yaml | kenya.yaml | ghana.yaml | ...           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│               🇳🇬 DEPLOYED INSTANCE (Nigeria)                │
│   Identity (NIN/BVN) · BizReg (CAC) · Tax (FIRS) · ...     │
└─────────────────────────────────────────────────────────────┘
```

## Component Breakdown

### 1. Dashboard (apps/dashboard)
- **Stack:** Next.js 14 (App Router) + Tailwind + shadcn/ui + Recharts
- **Purpose:** Visual mission control — every screen, every metric
- **Routes:** `/`, `/tasks`, `/sitrep`, `/countries`, `/security`, `/pipeline`, `/agents`, `/settings`
- **Auth:** OAuth login (GitHub), session via httpOnly cookies

### 2. API / Orchestrator (apps/api)
- **Stack:** Fastify + TypeScript + BullMQ + Redis + Postgres
- **Purpose:** Brain that plans, dispatches, monitors
- **Endpoints:**
  - `GET /api/missions` — list all HBX systems with status
  - `POST /api/tasks` — create new task
  - `GET /api/tasks/:id` — task detail
  - `POST /api/agents/spawn` — spawn new subagent
  - `GET /api/sitrep` — latest situation report
  - `POST /api/approve/:taskId` — human approval gate
  - `GET /api/countries` — list country profiles
  - `GET /api/security/status` — latest scan results

### 3. HBX-Identity (packages/hbx-identity)
- OAuth 2.0 / OIDC server
- Multi-factor authentication (TOTP, SMS, biometric hooks)
- National ID format adapters (NIN, BVN for Nigeria; pluggable for other countries)
- Public/private key management
- Session management with refresh tokens
- Audit trail for every auth event

### 4. HBX-Portal (packages/hbx-portal)
- White-label service portal framework
- Drag-drop service builder (gov can self-configure)
- Form engine with validation
- Payment hooks (Paystack, Flutterwave for Nigeria; Stripe for global)
- Notification engine (SMS, email, push)

### 5. HBX-Audit (packages/hbx-audit)
- Append-only log store
- Cryptographic chaining (each entry hashes previous)
- Signed by service identity keys
- Replicated to multiple storage backends
- Compliance-friendly export (PDF reports)

### 6. HBX-Crypto (packages/hbx-crypto)
- Envelope encryption (AES-256-GCM)
- Key management service (KMS) abstraction
- HSM support for production
- mTLS certificates auto-rotation
- Field-level encryption helpers

### 7. HBX-Security (packages/hbx-security)
- Automated threat modeling
- Container scanning (Trivy)
- Dependency scanning (Snyk)
- DAST scans (OWASP ZAP)
- Compliance checks (NDPR, ISO 27001, SOC 2)

### 8. HBX-i18n (packages/hbx-i18n)
- Country profile loader (YAML)
- Locale-aware formatting (dates, numbers, currencies)
- RTL support for MENA markets
- Translation management

## Data Flow: From Task to Deploy

```
User adds task in dashboard
        ↓
API receives, validates, persists
        ↓
Orchestrator decomposes into subtasks
        ↓
For each subtask: spawn appropriate agent
        ↓
Agent writes code, commits to GitHub
        ↓
CI runs: lint, test, security scan
        ↓
If critical/high CVE → automatic gate blocks
        ↓
If life-safety system → human approval required
        ↓
Deploy to staging → smoke tests
        ↓
If staging green → request production approval
        ↓
Deploy to production → monitor
        ↓
SITREP auto-generated, sent to Telegram
```

## Storage Layout

```
Postgres (Supabase free tier initially):
  • users, sessions, audit_log
  • missions, tasks, agents
  • countries, deployments
  • approvals, sitreps

Redis (free tier):
  • BullMQ task queue
  • Agent state cache
  • Rate limit counters

Object storage (Supabase / S3):
  • Build artifacts
  • Audit log archive (cold)
  • Backups (encrypted)

GitHub:
  • Source of truth (every commit signed)
  • CI/CD runner
```

## Deployment Topology

**Phase 1 (now):** Everything on free tiers
- Dashboard: Netlify (free)
- API: Railway/Fly.io free tier
- DB: Supabase free
- Redis: Upstash free
- Domain: hoopzblends.store

**Phase 2 (first customer):**
- Dedicated VPS (Hetzner ~$50/mo)
- Managed Postgres
- Proper monitoring (Grafana Cloud free tier)
- Backups + DR

**Phase 3 (production gov):**
- Multi-region deployment
- HSMs for key storage
- Air-gapped option for sensitive deployments
- SLA-backed uptime

## Why This Architecture Wins

1. **Open-core** — base platform is free, builds community
2. **Pluggable** — every country is a config
3. **Zero-trust** — security is foundation, not bolt-on
4. **Auditable** — every action logged, signed, replayable
5. **Hack-proof by default** — secure defaults, no footguns
6. **Hackable by design** — extension points for country-specific needs
7. **World-ready** — i18n, RTL, multi-currency from day 1
