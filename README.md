# 🔥 HBX-Forge

> Autonomous mission engine for building HBX national digital infrastructure.
> Open-core. Nigeria-first. World-customizable. Hack-proof by design.

---

## 🚀 What This Is

**HBX-Forge** is the build engine and mission control for the **HBX Platform** — a complete open-source stack for national digital infrastructure:

- 🆔 Identity & authentication
- 🏛️ Public-service portals
- 📚 Education systems
- 🏥 Health records
- 🏢 Business registration
- 🗺️ Land records
- 💰 Tax systems
- 📊 Project dashboards
- 📋 Open-data systems
- 🚨 Emergency communication

The Forge knows the entire roadmap, plans the work, spawns coding agents, tests, secures, deploys, and reports — autonomously with human approval gates at life-safety boundaries.

---

## ⭐ Star the Repo

Built from Lagos. Designed for the world. If this vision resonates, **give it a star** — it helps the right people find this work.

[![Stargazers](https://img.shields.io/github/stars/HoopzBlends-AI/HBX-Forge?style=social)](https://github.com/HoopzBlends-AI/HBX-Forge/stargazers)
[![Forks](https://img.shields.io/github/forks/HoopzBlends-AI/HBX-Forge?style=social)](https://github.com/HoopzBlends-AI/HBX-Forge/network)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)

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

## 🎯 The Six Labs

HBX-Forge powers the **Hoopz Blends universe** — six living labs, all built in Lagos:

| Lab | Status | What It Is |
|-----|--------|------------|
| **Cipher Sage OS** | 🟢 ONLINE | Live AI operating system — 21 agents, voice, camera vision, built-in browser, social connect, offline mode, SOVEREIGN self-update |
| **Zero AI** | 🟡 DEV | Core lab — autonomous intelligence without limits |
| **Griot AI** | 🟡 BUILDING | Cultural intelligence — Ubuntu, Sankofa, Ma'at built into a living AI layer |
| **NYRA AI** | 🟡 BUILDING | Human-centered AI — adaptive learning, ethical reasoning |
| **HB Technologies** | 🟡 BUILDING | Tech infrastructure — AI systems, cloud, global connectivity |
| **HBX Ecosystem** | 🟡 ECOSYSTEM | The unified hub — all portals under one roof |

**Live demo:** [hoopzblends.store](https://hoopzblends.store/) — enter the OS from the site.

---

## 📐 Architecture at a Glance

```
┌─────────────────────────────────────────────────────────┐
│                    HBX-Forge Dashboard                   │
│  Mission Control · Task Force · SITREP · Security Center│
├─────────────────────────────────────────────────────────┤
│                    Orchestrator Backend                   │
│         Plans → Spawns Agents → Tests → Deploys          │
├───────────────┬───────────────┬───────────────┬──────────┤
│  hbx-identity  │  hbx-portal   │  hbx-audit    │ hbx-crypto│
│  Auth · MFA    │  Portals      │  Audit Logs   │ Encryption│
│  OAuth/OIDC    │  Form Builder │  Crypto Chain │ KMS       │
├───────────────┼───────────────┼───────────────┼──────────┤
│  hbx-security  │  hbx-i18n     │               │           │
│  Threat Models │  Country      │               │           │
│  Scanners      │  Profiles     │               │           │
└───────────────┴───────────────┴───────────────┴──────────┘
```

Full architecture: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## 🚦 Quick Start

### View the live mission control
👉 **https://hoopzblends.store/forge**

### Run locally

```bash
git clone https://github.com/HoopzBlends-AI/HBX-Forge.git
cd HBX-Forge
npm install
npm run dev
```

The dashboard starts on `http://localhost:3000`.

### Deploy to Netlify (dashboard)

```bash
# From the repo root
cd apps/dashboard
npm run build
# Deploy the `out/` or `.next/` output to Netlify
# netlify.toml is included in deploy/
```

### Self-host the full stack

```bash
docker compose -f deploy/docker-compose.yml up -d
```

---

## 🔐 Security Model

Because **real human lives depend on this**:

**Approval gates (human sign-off required):**
- Identity system production deploy
- Health records production deploy
- Tax system production deploy
- Emergency alert system production deploy
- Any deploy touching a real government instance

**Automatic gates (system refuses to proceed):**
- Any code with critical/high CVE
- Any deploy without passing security scan
- Any production change without audit log entry

**Scanning pipeline (CI/CD):**
- Trivy container scanning
- Snyk dependency scanning (free tier)
- OWASP ZAP DAST scans
- Secrets detection (Vault / Infisical)

Full threat model: [docs/THREAT-MODEL.md](docs/THREAT-MODEL.md)

---

## 🗺️ Roadmap

### Phase A — Foundation (Months 1–6) ← CURRENT

- [x] Repo scaffold + README + architecture docs + Nigeria profile
- [ ] Dashboard v0.1–v0.8 (Mission Control, Task Force, SITREP, Country Profiles, Security Center, Build Pipeline, Agent Roster, Settings)
- [ ] Deploy to Netlify at hoopzblends.store/forge
- [ ] HBX-Identity v0.1–v0.5 (auth → MFA → OAuth → biometric → NIN/BVN adapter)
- [ ] HBX-Portal v0.1–v0.2 (template engine + form builder)
- [ ] HBX-Audit v0.1–v0.2 (append-only log → cryptographic chain)
- [ ] HBX-Crypto v0.1–v0.3 (envelope encryption → KMS → mTLS rotation)
- [ ] Security foundation: threat models, Trivy, Snyk, OWASP ZAP, secrets mgmt, pen test plan, bug bounty
- [ ] **First Pilot (Months 4–6):** One Lagos LGA, free pilot, case study + testimonial

### Phase B — Core Public Services (Months 6–18)

- HBX-BizReg: CAC integration, application flow, Paystack/Flutterwave, certificate generation
- HBX-Tax: FIRS adapter, TIN verification, filing, payment, taxpayer + government dashboards
- HBX-Land: state registry adapters, title search, encrypted storage, dispute tracking
- HBX-Projects: registration, milestones, budget transparency, public dashboard, procurement
- HBX-Data: dataset publishing, API gateway, visualization, CKAN export
- **Milestone:** First paid state contract ($200K–$500K)

### Phase C — Critical Public Goods (Months 18–36)

- HBX-Edu: school registration, student records, teacher management, exams, parent portal
- HBX-Health: patient ID, hospital portal, HIPAA-grade privacy, inter-facility sharing, public health dashboards
- HBX-Alert: multi-channel alerts (SMS, push, radio), citizen opt-in, government command, NEMA/police/fire integration
- **Milestone:** Multi-state presence (3–5 states)

### Phase D — Platform + World (Year 2+)

- Country expansion engine (wizard, auto-provision, localization, RTL support)
- Second country (Ghana or Kenya)
- Forge-as-a-Service: license the build engine itself
- Compliance: ISO 27001, SOC 2 Type II, NDPR, GDPR mode
- **Milestone:** Multi-country, $5M+ ARR

### Phase E — Global (Year 5+)

- 10+ countries
- $50M+ ARR
- HBX-Forge itself a product
- Strategic acquisition target

---

## 🌍 Nigeria-First, World-Customizable

The Nigeria country profile (`countries/nigeria.yaml`) encodes:

- **NIN** (National Identity Number) — NIMC integration
- **BVN** (Bank Verification Number) — banking ID
- **TIN** (Tax Identification Number) — FIRS
- **NDPR** — Nigeria Data Protection Regulation compliance
- Local languages and localization strings

Add a new country by writing its profile. The Forge provisions the instance.

---

## 👤 About the Founder

**Emeka Uzokah (Hoopz Blends)** — Lagos-based creative technologist and founder of Hoopz Blends studio.

- 12+ years in IT and creative industries
- Full-stack development, 3D modeling (Blender, Maya, ZBrush), VFX, branding
- Previous: Technical Manager at Grey Box Systems (software dev, network engineering, cloud, VR)
- Background in public administration + computer systems networking + telecommunications

The vision: *from Oshodi to Ikeja to Abesan — from basketball courts to computer labs — from Zero AI experiments to national digital infrastructure for the world.*

- 🌐 [hoopzblends.store](https://hoopzblends.store/)
- 🐙 [github.com/HoopzBlends-AI](https://github.com/HoopzBlends-AI)
- 📧 hoopzblends@gmail.com
- 🐦 [@HoopzBlends](https://x.com/HoopzBlends)
- 📱 [t.me/hoopzblends](https://t.me/hoopzblends)

---

## 🤝 Contributing

This is open-source infrastructure for nations. Contributions are welcome at every level:

- **Documentation** — fix a typo, fill a gap, translate
- **Country profiles** — add your country's integrations
- **Package code** — pick a good-first-issue from the roadmap
- **Security review** — challenge the threat model
- **Testing** — write tests for any package
- **Pilot partners** — LGA, state, or ministry interested in a free pilot

See the roadmap for what's next. Pick a checkbox, submit a PR.

---

## 📄 License

AGPL-3.0 — open source, with the copyleft that keeps it open. Governments and enterprises that need a commercial license can contact the founder directly.

---

## 📬 Contact

- **General:** hoopzblends@gmail.com
- **Press / Grants / Partnerships:** same inbox — mark subject line clearly
- **Telegram:** [t.me/hoopzblends](https://t.me/hoopzblends)
- **GitHub Discussions:** open an issue on this repo
# test
