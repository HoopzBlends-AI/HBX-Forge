# Contributing to HBX-Forge

Thank you for your interest in HBX-Forge — the open-source build engine for national digital infrastructure.

This document explains how to contribute, what to work on, and how to get help.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Good First Issues](#good-first-issues)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Reporting Security Issues](#reporting-security-issues)
- [Community](#community)

---

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all.

- **Be respectful.** Treat everyone with respect, regardless of experience level, background, or perspective.
- **Be constructive.** Critique the work, not the person. Offer suggestions, not attacks.
- **Be patient.** This is a complex project built by one founder with limited resources. Responses may take time.
- **Be inclusive.** Contributions in any form — code, documentation, translation, testing, design, feedback — are welcome.
- **No harassment.** Harassment, discrimination, or hostile behavior will not be tolerated. Report it to hoopzblends@gmail.com.

This code of conduct applies in all HBX-Forge spaces: GitHub issues, pull requests, discussions, and any other communication channel.

---

## How to Contribute

### 1. Pick Something to Work On

Start with the [ROADMAP.md](docs/ROADMAP.md) — every unchecked item is a potential contribution. Look for items marked as approachable for new contributors, or pick something that matches your skills.

**Contribution types:**

| Type | What It Looks Like |
|------|-------------------|
| **Documentation** | Fix typos, fill gaps, translate, add examples, improve README |
| **Country profiles** | Add a new country's integrations to `countries/` |
| **Package code** | Implement a roadmap item in one of the packages |
| **Dashboard UI** | Build a dashboard screen from the v0.1–v0.8 list |
| **Security review** | Challenge the threat model, find gaps, suggest improvements |
| **Testing** | Write tests for any package |
| **CI/CD** | Improve the GitHub Actions pipeline, add scanning tools |
| **Pilot partnership** | An LGA, state, or ministry interested in a free pilot |

### 2. Set Up Your Development Environment

```bash
git clone https://github.com/HoopzBlends-AI/HBX-Forge.git
cd HBX-Forge
npm install
npm run dev
```

The dashboard starts on `http://localhost:3000`.

For package-level work, each package may have its own setup — check the package's README when it exists.

### 3. Make Your Changes

- Create a branch from `main`: `git checkout -b feat/my-feature`
- Make your changes
- Test locally where possible
- Write or update documentation for your changes

### 4. Submit a Pull Request

- Push your branch: `git push origin feat/my-feature`
- Open a pull request on GitHub
- Describe what your change does and why
- Reference the relevant roadmap item if applicable
- Wait for review — the founder reviews contributions as time allows

### 5. Iterate

- Address review feedback
- Keep the PR focused — one feature or fix per PR
- Once approved, it gets merged

---

## Good First Issues

Good first issues are contribution opportunities that are approachable without deep knowledge of the full codebase. Look for issues labeled `good first issue` on the GitHub Issues page.

Current good-first-issue categories (from the roadmap):

- **Dashboard screens (v0.1–v0.8):** Each screen is a self-contained UI task. Start with Mission Control (v0.1).
- **Documentation improvements:** Any README, doc, or comment that needs clarity.
- **Country profile additions:** Add a country's basic config to `countries/`.
- **Form builder UI:** Part of HBX-Portal v0.2 — a self-contained frontend task.
- **CI/CD improvements:** Add steps, improve existing ones, add more scanning tools.

When you find an issue you want to work on, comment on it to let others know you're picking it up.

---

## Development Setup

### Prerequisites

- Node.js 20+
- npm
- Git

### Getting Started

```bash
git clone https://github.com/HoopzBlends-AI/HBX-Forge.git
cd HBX-Forge
npm install
npm run dev
```

### Project Structure

```
HBX-Forge/
├── apps/
│   ├── dashboard/          # Next.js mission control UI
│   └── api/                # Orchestrator backend
├── packages/
│   ├── hbx-identity/       # Auth, MFA, OAuth/OIDC, biometric
│   ├── hbx-portal/         # Public-service portal framework
│   ├── hbx-audit/          # Tamper-proof audit logging
│   ├── hbx-crypto/         # Encryption stack
│   ├── hbx-security/       # Threat models, scanners, compliance
│   └── hbx-i18n/           # Country profiles + localization
├── countries/
│   └── nigeria.yaml        # Nigeria config
├── docs/
│   ├── ARCHITECTURE.md
│   ├── THREAT-MODEL.md
│   ├── ROADMAP.md
│   └── GTM.md
├── deploy/
│   ├── netlify.toml
│   └── docker-compose.yml
└── .github/
    └── workflows/
```

### Testing

Each package should have its own tests. Run them per-package:

```bash
cd packages/hbx-identity
npm test   # or pytest, or the relevant test runner
```

### Linting

The CI pipeline runs linting on the dashboard. Add linting to packages as they're created.

---

## Pull Request Process

1. **Fork or branch.** You can fork the repo or create a branch directly if you have write access.
2. **Write a clear PR description.** What does this change? Why? What roadmap item does it address?
3. **Keep it focused.** One feature or fix per PR. Large PRs are harder to review.
4. **Add tests if applicable.** If your change is in a package that should have tests, add them.
5. **Update documentation.** If your change affects how something works, update the docs.
6. **Submit.** The founder reviews PRs as time allows. Be patient — this is a one-person project with a lot of roadmap.

---

## Reporting Security Issues

**Do not open a public GitHub issue for security vulnerabilities.**

Security issues in a digital public infrastructure project are sensitive. Report them privately:

**Email:** hoopzblends@gmail.com
**Subject:** HBX-Forge Security Report — [brief description]

Include:
- Description of the vulnerability
- Steps to reproduce
- Impact assessment
- Suggested fix (if you have one)

The founder will respond within a reasonable timeframe. For critical issues, expect a faster response.

**What happens after reporting:**
- The issue is verified
- A fix is developed and tested
- The vulnerability and fix are disclosed (with credit to the reporter, if desired)
- The security pipeline is updated to catch this class of issue automatically

This project has a bug bounty program in the roadmap. Until it's live, security researchers are acknowledged in the release notes.

---

## Community

### Where to Find Help

- **GitHub Issues:** Report bugs, request features, ask questions
- **GitHub Discussions:** Open longer conversations, design discussions, ideas
- **Email:** hoopzblends@gmail.com for private or sensitive topics

### Staying Updated

- Watch the repo on GitHub to get notified of releases and changes
- Follow [@HoopzBlends](https://x.com/HoopzBlends) on X for updates
- Check the [ROADMAP.md](docs/ROADMAP.md) for the latest priorities

### Contributing Beyond Code

This project needs more than code. Contributions that make a difference:

- **Documentation** — make it easier for the next person to understand and contribute
- **Translation** — translate docs and UI into local languages
- **Country profiles** — add your country's integrations
- **Testing** — test the stack in your environment and report what you find
- **Security review** — challenge the threat model
- **Pilot partnerships** — if you have access to an LGA, state, or ministry, introduce them
- **Press and advocacy** — write about HBX, share it, help it reach the right people

---

## Acknowledgment

All contributors are acknowledged in the release notes and the project's contributor list. Significant contributions may be recognized more prominently — ask in your PR.

Thank you for helping build the infrastructure that lets emerging nations build their own digital future.

---

*Built from Lagos. Designed for the world.*
