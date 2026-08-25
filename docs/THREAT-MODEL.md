# HBX-Forge Threat Model

> *"Real human lives depend on this. Treat every line of code like someone's life is on the other side."*

## STRIDE Framework

### S — Spoofing
**Threats:**
- Fake user identities in identity system
- Forged citizen credentials
- Impersonation of government officials
- Fake service workers

**Mitigations:**
- Multi-factor authentication mandatory for all staff
- Cryptographic signing of all identity claims (PKI)
- Biometric verification hooks
- Hardware security modules (HSMs) for root keys in production
- Mutual TLS (mTLS) between all services

### T — Tampering
**Threats:**
- Modified land records (titles transferred fraudulently)
- Altered health records
- Falsified tax filings
- Modified audit logs
- Changed project budgets

**Mitigations:**
- Cryptographic chain on audit logs (each entry hashes previous)
- Signed commits (GPG)
- Signed deploys (cosign)
- Append-only database tables (no UPDATE/DELETE permissions)
- Field-level encryption for sensitive data
- Versioned records (never overwrite, always version)

### R — Repudiation
**Threats:**
- Officials denying they approved a decision
- Citizens denying they filed a request
- Service providers denying they received payment

**Mitigations:**
- Every action logged with actor ID, timestamp, IP, device
- Actions require cryptographic signatures from authenticated principals
- Logs replicated across multiple jurisdictions
- Public-facing audit trail (for transparency use cases)

### I — Information Disclosure
**Threats:**
- Health records leaked
- Tax data exposed
- Land ownership revealed to attackers
- Citizen PII sold
- State secrets leaked

**Mitigations:**
- Encryption at rest (AES-256-GCM) for all sensitive fields
- Encryption in transit (TLS 1.3, mTLS internally)
- Zero-trust networking (no implicit trust)
- Role-based access control with least privilege
- Data minimization (collect only what's needed)
- Right-to-deletion (NDPR/GDPR compliance)
- Penetration testing quarterly

### D — Denial of Service
**Threats:**
- Identity service down → citizens can't access anything
- Tax system down → revenue collection halts
- Emergency alert down → lives at risk
- Audit log down → can't prove compliance

**Mitigations:**
- Multi-region deployment for life-safety systems
- Rate limiting at every entry point
- CDN + DDoS protection (Cloudflare)
- Circuit breakers between services
- Graceful degradation (citizens see queue, not error)
- 99.99% uptime SLA for emergency + identity systems

### E — Elevation of Privilege
**Threats:**
- Junior admin gains root access
- Compromised service account escalates
- Container escape
- SQL injection leading to data exfiltration

**Mitigations:**
- Principle of least privilege everywhere
- Just-in-time access (no standing admin)
- Multi-party approval for sensitive actions (M-of-N signing)
- Container hardening (read-only fs, no privileged mode)
- Parameterized queries (no string concatenation in SQL)
- Static analysis in CI (CodeQL, Semgrep)
- Regular privilege audits

---

## Threat-Specific Scenarios

### Scenario 1: Identity System Breach
**Impact:** Fake IDs issued, fraud, citizen harm
**Likelihood (without mitigation):** High
**Likelihood (with mitigation):** Low
**Mitigations:**
- HSM-backed key storage
- Biometric verification for high-risk operations
- Anomaly detection on issuance patterns
- Real-time alerts to NIMC on suspicious activity

### Scenario 2: Land Record Tampering
**Impact:** Property stolen via forged title transfers
**Likelihood (without mitigation):** Critical
**Likelihood (with mitigation):** Very Low
**Mitigations:**
- Cryptographic signatures on every record change
- Multi-party approval for transfers (owner + registrar)
- Public-facing registry with change notifications
- Immutable backup chain

### Scenario 3: Tax System Manipulation
**Impact:** Revenue loss, public trust collapse
**Likelihood (without mitigation):** High
**Likelihood (with mitigation):** Low
**Mitigations:**
- All filings cryptographically signed by filer
- All payments on public ledger
- Anomaly detection (AI-powered flagging)
- Independent audit trail

### Scenario 4: Health Record Privacy Breach
**Impact:** HIPAA-equivalent violation, patient harm
**Likelihood (without mitigation):** Critical
**Likelihood (with mitigation):** Low
**Mitigations:**
- Field-level encryption (not just DB encryption)
- Access logging with patient notification
- Break-glass procedures documented and audited
- Annual third-party security audit

### Scenario 5: Emergency Alert Failure
**Impact:** Citizens not warned, lives lost
**Likelihood (without mitigation):** Medium
**Likelihood (with mitigation):** Very Low
**Mitigations:**
- Multi-channel delivery (SMS + push + radio + sirens)
- Failover to secondary systems
- Quarterly drills
- Independent monitoring (alert watchdog)

---

## Security Layers

```
Layer 0: Legal & Compliance
  • NDPR, GDPR, ISO 27001, SOC 2
  • Government contracts, SLAs
  • Insurance

Layer 1: Physical / Infrastructure
  • Cloud provider security (AWS/GCP/Azure)
  • HSMs for key storage
  • Geographic redundancy

Layer 2: Network
  • mTLS everywhere
  • Zero-trust segmentation
  • WAF + DDoS protection

Layer 3: Application
  • Authn/authz on every request
  • Input validation
  • Output encoding
  • Parameterized queries
  • Secure session management

Layer 4: Data
  • Encryption at rest
  • Encryption in transit
  • Field-level encryption for PII
  • Tokenization where possible

Layer 5: Operational
  • Continuous scanning
  • Patch management
  • Incident response plan
  • Bug bounty

Layer 6: Human
  • Background checks for staff
  • Security training
  • Phishing simulations
  • Code review culture
```

---

## Approval Gates (Enforced by Forge)

No code reaches production without:

1. **All critical/high CVEs resolved**
2. **Security scan passed (Trivy + Snyk + CodeQL)**
3. **At least 2 reviewer approvals on PR**
4. **For life-safety systems: explicit human approval via dashboard**
5. **Backup verified before deploy**
6. **Rollback plan documented**
7. **Smoke tests passed in staging**

---

## Incident Response Plan

When something goes wrong (and something always does):

1. **Detect** — monitoring + user reports
2. **Contain** — auto-isolation if breach detected
3. **Eradicate** — patch + remove attacker access
4. **Recover** — restore from clean backup
5. **Learn** — post-mortem + update runbooks

**For life-safety incidents:** Notify relevant authorities within 1 hour.

---

## Bug Bounty (Phase 2+)

When funded:
- Critical: $5,000–$50,000
- High: $1,000–$5,000
- Medium: $200–$1,000
- Low: $50–$200

Run via HackerOne or Bugcrowd.

---

## Compliance Targets

| Standard | Target | Why |
|---|---|---|
| **NDPR** | Day 1 | Legal requirement in Nigeria |
| **ISO 27001** | Phase A end | International credibility |
| **SOC 2 Type II** | Phase B start | Enterprise/government sales |
| **GDPR** | Phase B start | EU expansion |
| **HIPAA-equivalent** | Phase C (Health) | Health records system |

---

*"The best time to add security was day one. The second best time is now. We're doing both."*
