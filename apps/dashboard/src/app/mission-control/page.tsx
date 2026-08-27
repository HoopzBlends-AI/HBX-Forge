import Link from 'next/link'

const SECURITY_ITEMS = [
  {
    title: 'Human Approval Gates',
    detail: 'No deployment to production for identity, health, tax, or emergency systems goes through without explicit human approval. The Forge plans, codes, tests, and prepares — humans flip the switch.',
    icon: '👤',
    color: 'text-hb-accent',
  },
  {
    title: 'Automatic CVE Refusal',
    detail: 'Any code that ships with critical or high CVEs, or fails security scans, is automatically refused. The CI pipeline blocks the merge. No exceptions.',
    icon: '🚫',
    color: 'text-hb-red',
  },
  {
    title: 'Mandatory Audit Logging',
    detail: 'Every production change is logged, timestamped, and attributable. Who changed what, when, and why — immutable. Required for government trust.',
    icon: '📜',
    color: 'text-hb-amber',
  },
  {
    title: 'CI/CD Scanning Pipeline',
    detail: 'Trivy (container + filesystem vulnerability scan), Snyk (dependency scan), OWASP ZAP (web app scan). All run on every push and PR. Failing any one blocks the build.',
    icon: '🔍',
    color: 'text-hb-blue',
  },
  {
    title: 'Secrets Management',
    detail: 'No hardcoded credentials. All secrets live in Vault or Infisical. CI secrets are GitHub-scoped. Environment variables are encrypted at rest.',
    icon: '🔐',
    color: 'text-hb-green',
  },
  {
    title: 'AGPL-3.0 License',
    detail: 'Open source, with the copyleft that keeps it open. Governments and enterprises can deploy for free. Commercial license available for those who need it — write to hoopzblends@gmail.com.',
    icon: '📋',
    color: 'text-hb-surface',
  },
]

const THREAT_TABLE = [
  { threat: 'Unauthorized access to citizen data', surface: 'Identity module, database', mitigation: 'MFA, OAuth/OIDC, biometric hooks, NIN/BVN verification, audit logging, encryption at rest + in transit' },
  { threat: 'Supply chain attack via dependencies', surface: 'npm packages, Docker base images', mitigation: 'Snyk dependency scan, Trivy image scan, lockfile integrity, automated CVE blocking' },
  { threat: 'Web application compromise', surface: 'Dashboard, portals, public APIs', mitigation: 'OWASP ZAP scan, input validation, CSRF/XSS protections, rate limiting, WAF' },
  { threat: 'Denial of service', surface: 'Public-facing endpoints', mitigation: 'Rate limiting, request throttling, health checks, auto-scaling' },
  { threat: 'Misconfiguration exposure', surface: 'Cloud infrastructure, CI secrets', mitigation: 'Pre-merge config scan (Trivy config), secrets detection, least-privilege IAM' },
  { threat: 'Data exfiltration', surface: 'Audit logs, citizen records', mitigation: 'Encrypted storage, access controls, audit trail, anomaly detection' },
]

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-hb-bg bg-grid">
      {/* Top navigation bar */}
      <header className="border-b border-hb-border bg-hb-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://hoopzblends.store/assets/images/hoopz-logo-main.png"
              alt="Hoopz Blends logo"
              className="h-8 w-auto"
            />
            <span className="font-display text-hb-accent text-lg">HBX-Forge</span>
            <span className="text-hb-border text-sm ml-2 font-mono">v0.1</span>
          </div>
          <nav className="flex items-center gap-1">
            {[
              { name: 'Mission Control', href: '/mission-control', icon: '🎯' },
              { name: 'Task Force', href: '/task-force', icon: '⚡' },
              { name: 'SITREP', href: '/sitrep', icon: '📋' },
              { name: 'Country Profiles', href: '/countries', icon: '🌍' },
              { name: 'Security Center', href: '/security', icon: '🔒' },
              { name: 'Build Pipeline', href: '/pipeline', icon: '🔧' },
              { name: 'Agent Roster', href: '/agents', icon: '🤖' },
              { name: 'Settings', href: '/settings', icon: '⚙️' },
            ].map((screen) => (
              <Link
                key={screen.href}
                href={screen.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-all duration-150 flex items-center gap-1.5 border border-transparent ${
                  screen.href === '/mission-control'
                    ? 'text-hb-accent border-hb-accent bg-hb-accent/10'
                    : 'text-hb-surface hover:text-hb-accent hover:border-hb-border'
                }`}
              >
                <span className="text-base">{screen.icon}</span>
                <span className="hidden sm:inline">{screen.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-1">
              <h1 className="font-display text-3xl md:text-4xl text-hb-accent mb-2">
                Mission Control
              </h1>
              <p className="text-hb-border text-base md:text-lg max-w-2xl">
                The dashboard for the HBX-Forge autonomous build engine.
                <br />
                <span className="text-hb-accent-dim">View the status of every module, every pipeline, every security gate.</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-hb-surface border border-hb-accent glow-accent flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
          </div>

          {/* Quick status bar */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hb-surface/50 border border-hb-border">
              <span className="w-2 h-2 rounded-full bg-hb-green pulse-live"></span>
              <span className="text-sm text-hb-green font-mono">Core Online</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hb-surface/50 border border-hb-border">
              <span className="text-sm text-hb-surface font-mono">CI:</span>
              <span className="text-sm text-hb-green font-mono"> Passing</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hb-surface/50 border border-hb-border">
              <span className="text-sm text-hb-surface font-mono">Stars:</span>
              <span className="text-sm text-hb-surface font-mono"> 0</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hb-surface/50 border border-hb-border">
              <span className="text-sm text-hb-surface font-mono">Forks:</span>
              <span className="text-sm text-hb-surface font-mono"> 0</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hb-surface/50 border border-hb-border">
              <span className="text-sm text-hb-surface font-mono">Issues:</span>
              <span className="text-sm text-hb-surface font-mono"> 0</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hb-surface/50 border border-hb-border">
              <span className="text-sm text-hb-surface font-mono">Last build:</span>
              <span className="text-sm text-hb-surface font-mono"> Today</span>
            </div>
          </div>
        </div>

        {/* Security Center - main content */}
        <section className="mb-8">
          <h2 className="font-display text-xl text-hb-accent mb-4 flex items-center gap-2">
            <span>🔒</span> Security Center
          </h2>

          {/* Security principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {SECURITY_ITEMS.map((item) => (
              <div key={item.title} className="bg-hb-surface border border-hb-border rounded-xl p-5 card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className={`font-display text-base ${item.color} mb-1`}>{item.title}</h3>
                    <p className="text-hb-border text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Threat model table */}
          <div>
            <h3 className="font-display text-lg text-hb-accent mb-3">Threat Model — Key Surfaces</h3>
            <div className="overflow-x-auto bg-hb-surface border border-hb-border rounded-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-hb-border">
                    <th className="text-left px-4 py-3 text-hb-accent font-mono text-xs uppercase tracking-wider">Threat</th>
                    <th className="text-left px-4 py-3 text-hb-accent font-mono text-xs uppercase tracking-wider">Surface</th>
                    <th className="text-left px-4 py-3 text-hb-accent font-mono text-xs uppercase tracking-wider">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {THREAT_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-hb-border/50 last:border-0">
                      <td className="px-4 py-3 text-hb-surface font-medium">{row.threat}</td>
                      <td className="px-4 py-3 text-hb-border font-mono text-xs">{row.surface}</td>
                      <td className="px-4 py-3 text-hb-border text-xs">{row.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-hb-border pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://hoopzblends.store/assets/images/hoopz-logo-main.png"
                alt="Hoopz Blends logo"
                className="h-6 w-auto"
              />
              <span className="text-hb-border text-xs font-mono">Built from Lagos. Designed for the world.</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/HoopzBlends-AI/HBX-Forge" target="_blank" rel="noopener noreferrer" className="text-hb-border hover:text-hb-accent text-xs font-mono transition-colors">GitHub</a>
              <a href="https://hoopzblends.store" target="_blank" rel="noopener noreferrer" className="text-hb-border hover:text-hb-accent text-xs font-mono transition-colors">hoopzblends.store</a>
              <a href="https://t.me/hoopzblends" target="_blank" rel="noopener noreferrer" className="text-hb-border hover:text-hb-accent text-xs font-mono transition-colors">t.me/hoopzblends</a>
              <a href="mailto:hoopzblends@gmail.com" className="text-hb-border hover:text-hb-accent text-xs font-mono transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
