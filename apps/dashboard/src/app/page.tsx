import Link from 'next/link'

const LABS = [
  { name: 'Cipher Sage OS', status: 'online', desc: 'Live AI OS — 21 agents, voice, camera, browser, social, offline, self-update. v6.0 Ultra. Free on Groq.' },
  { name: 'Zero AI', status: 'dev', desc: 'Autonomous intelligence core. JARVIS-inspired.' },
  { name: 'Griot AI', status: 'building', desc: 'Cultural intelligence — Ubuntu, Sankofa, Ma\'at.' },
  { name: 'NYRA AI', status: 'building', desc: 'Human-centered AI — adaptive learning, ethical reasoning.' },
  { name: 'HB Technologies', status: 'building', desc: 'Infrastructure and cloud systems.' },
  { name: 'HBX Ecosystem', status: 'ecosystem', desc: 'The unified hub — all portals under one roof.' },
]

const NAV_SCREENS = [
  { name: 'Mission Control', href: '/mission-control', icon: '🎯' },
  { name: 'Task Force', href: '/task-force', icon: '⚡' },
  { name: 'SITREP', href: '/sitrep', icon: '📋' },
  { name: 'Country Profiles', href: '/countries', icon: '🌍' },
  { name: 'Security Center', href: '/security', icon: '🔒' },
  { name: 'Build Pipeline', href: '/pipeline', icon: '🔧' },
  { name: 'Agent Roster', href: '/agents', icon: '🤖' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function DashboardHome() {
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
            {NAV_SCREENS.map((screen) => (
              <Link
                key={screen.href}
                href={screen.href}
                className="px-3 py-1.5 rounded-md text-sm text-hb-surface hover:text-hb-accent hover:border-hb-border border border-transparent transition-all duration-150 flex items-center gap-1.5"
              >
                <span className="text-base">{screen.icon}</span>
                <span className="hidden sm:inline">{screen.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero section */}
        <section className="mb-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-1">
              <h1 className="font-display text-3xl md:text-4xl text-hb-accent mb-2">
                Mission Control
              </h1>
              <p className="text-hb-border text-base md:text-lg max-w-2xl">
                The autonomous build engine for open-source digital public infrastructure.
                <br />
                <span className="text-hb-accent-dim">Built from Lagos. Designed for the world.</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-hb-surface border border-hb-accent glow-accent flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex flex-wrap gap-3 mb-8">
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
          </div>
        </section>

        {/* Six Labs grid */}
        <section className="mb-10">
          <h2 className="font-display text-xl text-hb-accent mb-4 flex items-center gap-2">
            <span>🔬</span> The Six Labs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LABS.map((lab) => (
              <div key={lab.name} className="bg-hb-surface border border-hb-border rounded-xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg text-hb-surface">{lab.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${lab.status === 'online' ? 'status-online' : lab.status === 'dev' ? 'status-dev' : lab.status === 'ecosystem' ? 'status-ecosystem' : 'status-building'}`}>
                    {lab.status === 'online' ? '🟢 ONLINE' : lab.status === 'dev' ? '🟡 DEV' : lab.status === 'ecosystem' ? '🟡 ECOSYSTEM' : '🟡 BUILDING'}
                  </span>
                </div>
                <p className="text-hb-border text-sm leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick start */}
        <section className="mb-10">
          <h2 className="font-display text-xl text-hb-accent mb-4 flex items-center gap-2">
            <span>🚀</span> Quick Start
          </h2>
          <div className="bg-hb-surface border border-hb-border rounded-xl overflow-hidden">
            <div className="p-5">
              <p className="text-hb-border text-sm mb-4">Clone, install, and run the dashboard locally:</p>
              <div className="bg-hb-bg rounded-lg p-4 font-mono text-sm">
                <p className="text-hb-accent mb-2">$ git clone https://github.com/HoopzBlends-AI/HBX-Forge.git</p>
                <p className="text-hb-accent mb-2">$ cd HBX-Forge</p>
                <p className="text-hb-accent mb-2">$ npm install</p>
                <p className="text-hb-green mb-2">$ npm run dev</p>
                <p className="text-hb-border">Dashboard starts on <span className="text-hb-green">http://localhost:3000</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-10">
          <h2 className="font-display text-xl text-hb-accent mb-4 flex items-center gap-2">
            <span>🗺️</span> Roadmap
          </h2>
          <div className="space-y-3">
            {[
              { phase: 'Phase A — Foundation', timeframe: 'Months 1–6', items: 'Dashboard v0.1–v0.8 · Identity · Portal · Audit · Crypto · First LGA pilot', done: false },
              { phase: 'Phase B — Core Services', timeframe: 'Months 6–18', items: 'BizReg · Tax · Land · Projects · Data · First state contract', done: false },
              { phase: 'Phase C — Public Goods', timeframe: 'Months 18–36', items: 'Education · Health · Emergency Comms · Multi-state (3–5)', done: false },
              { phase: 'Phase D — Platform', timeframe: 'Year 2+', items: 'Country expansion · Forge-as-a-Service · ISO 27001/SOC 2 · $5M+ ARR', done: false },
              { phase: 'Phase E — Global', timeframe: 'Year 5+', items: '10+ countries · $50M+ ARR · Forge itself a product', done: false },
            ].map((row) => (
              <div key={row.phase} className="bg-hb-surface border border-hb-border rounded-lg p-4 flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs font-bold ${row.done ? 'bg-hb-green text-white' : 'bg-hb-border text-hb-border'}`}>
                  {row.done ? '✓' : '○'}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-sm text-hb-surface">{row.phase}</h3>
                    <span className="text-xs text-hb-accent-dim font-mono">{row.timeframe}</span>
                  </div>
                  <p className="text-hb-border text-xs">{row.items}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security model */}
        <section className="mb-10">
          <h2 className="font-display text-xl text-hb-accent mb-4 flex items-center gap-2">
            <span>🔒</span> Security Model
          </h2>
          <div className="bg-hb-surface border border-hb-border rounded-xl p-5">
            <ul className="space-y-2">
              {[
                'Human approval gates before deploying identity, health, tax, or emergency systems to production.',
                'Automatic refusal of any code with critical/high CVEs, or without passing security scans.',
                'Mandatory audit logging for every production change.',
                'CI/CD scanning: Trivy (container + filesystem), Snyk (dependencies), OWASP ZAP (web).',
                'AGPL-3.0 license — open source, with the copyleft that keeps it open.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-hb-border text-sm">
                  <span className="text-hb-accent mt-0.5">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
