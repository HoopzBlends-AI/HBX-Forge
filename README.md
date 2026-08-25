# 🔥 HBX-Forge

> Autonomous mission engine for building HBX national digital infrastructure.
> Open-core. Nigeria-first. World-customizable. Hack-proof by design.

---

## 🎯 What This Is

HBX-Forge is the build engine and mission control for the **HBX Platform** — a complete open-source stack for national digital infrastructure:

- 🪪 Identity & authentication
- 🌐 Public-service portals
- 📚 Education systems
- 🏥 Health records
- 🏢 Business registration
- 🌍 Land records
- 💰 Tax systems
- 📊 Project dashboards
- 📂 Open-data systems
- 🚨 Emergency communication

The Forge knows the entire roadmap, plans the work, spawns coding agents, tests, secures, deploys, and reports — autonomously with human approval gates at life-safety boundaries.

---

## 🏗️ Repository Structure

```
HBX-Forge/
├── apps/
│   ├── dashboard/          # Next.js mission control UI (deploys at /forge)
│   └── api/                # Orchestrator backend (the "brain")
├── packages/
│   ├── hbx-identity/       # HBX-ID: auth, MFA, OAuth/OIDC, biometric
│   ├── hbx-portal/         # Public-service portal framework
│   ├── hbx-audit/          # Tamper-proof audit logging
│   ├── hbx-crypto/         # Encryption stack (at-rest, in-transit, KMS)
│   ├── hbx-security/       # Threat models, scanners, compliance
│   └── hbx-i18n/           # Country profiles + localization
├── countries/
│   └── nigeria.yaml        # Nigeria config: NIN, BVN, TIN, NDPR, languages
├── docs/
│   ├── ARCHITECTURE.md     # Full system architecture
│   ├── THREAT-MODEL.md     # Security threat model
│   ├── ROADMAP.md          # Build sequence and milestones
│   └── GTM.md              # Go-to-market and government sales playbook
├── deploy/
│   ├── netlify.toml        # Dashboard deploy config
│   └── docker-compose.yml  # Full stack for self-hosting
└── .github/
    └── workflows/          # CI/CD pipelines
```

---

## 🚀 Quick Start

### View the live mission control
👉 **https://hoopzblends.store/forge** (coming online within 24h of first deploy)

### Run locally
```bash
git clone https://github.com/HoopzBlends-AI/HBX-Forge.git
cd HBX-Forge
npm install
npm run dev
```

The dashboard starts on `http://localhost:3000`.

---

## 🔐 Security Model

Because real human lives depend on this:

**Approval gates (human sign-off required):**
- Identity system production deploy
- Health records production deploy
- Tax system production deploy
- Emergency alert system production deploy
- Any deploy touching a real government instance

**Automatic gates (system refuses to proceed):**
- Any code with critical/high CVE
- Any deploy without passing security scan
- Any production change without backup
- Any system going live without disaster recovery plan

**Security defaults:**
- Zero-trust between all services
- mTLS everywhere
- All secrets in vault (never in code)
- Append-only audit logs (tamper-evident)
- Encryption at rest + in transit by default
- No default credentials anywhere

---

## 🌍 World-Ready From Day One

Every country is a config file. Add a new country by creating a YAML profile:

```yaml
# countries/kenya.yaml
code: KE
name: Kenya
currency: KES
languages: [en, sw]
id_format: { national_id: 7-8 digits, ... }
tax_id_format: KRA PIN
regulatory_bodies: { ... }
compliance: [Kenya DPA 2019]
```

The platform adapts automatically. No code changes needed.

---

## 📊 Project Status

**Phase A — Foundation (Months 1–6)** ← *current*
- [ ] HBX-Identity (auth, MFA, OAuth/OIDC)
- [ ] HBX-Portal framework
- [ ] HBX-Audit (tamper-proof logs)
- [ ] HBX-Crypto (encryption stack)
- [ ] HBX-Security (threat models, scanners)

**Phase B — Core Public Services (Months 6–18)**
- [ ] HBX-BizReg (business registration)
- [ ] HBX-Tax (tax systems)
- [ ] HBX-Land (land records)
- [ ] HBX-Projects (project dashboards)
- [ ] HBX-Data (open-data systems)

**Phase C — Critical Public Goods (Months 18–36)**
- [ ] HBX-Edu (education systems)
- [ ] HBX-Health (health records)
- [ ] HBX-Alert (emergency communication)

---

## 🧠 The Vision

> *"Ground zero kobo → national infrastructure → world."*

This isn't another SaaS. This is the open-source standard for digital public infrastructure, designed to be adopted by every emerging nation that wants digital sovereignty without colonial tech dependencies.

The Forge builds the platform. The platform serves the people. The people live better.

---

## 📜 License

Open-core model:
- **Core platform** — AGPL-3.0 (free, open source, copyleft)
- **Government edition** — Commercial license (customization, support, compliance)
- **SaaS tier** — Subscription for smaller cities/states

---

## 👤 Owner

**Emeka Uzoka** — Hoopz Blends, Lagos, Nigeria
🌐 hoopzblends.store · 🐙 github.com/HoopzBlends-AI

---

**Built by Hermes Agent + subagent army. For the people. By the people.**
