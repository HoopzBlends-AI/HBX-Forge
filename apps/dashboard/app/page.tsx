import Link from 'next/link';

const NAV = [
  { href: '/', label: 'Mission', icon: '◉' },
  { href: '/tasks', label: 'Task Force', icon: '☰' },
  { href: '/sitrep', label: 'SITREP', icon: '⚡' },
  { href: '/countries', label: 'Countries', icon: '◯' },
  { href: '/security', label: 'Security', icon: '⚿' },
  { href: '/pipeline', label: 'Pipeline', icon: '⌥' },
  { href: '/agents', label: 'Agents', icon: '◈' },
  { href: '/settings', label: 'Settings', icon: '✦' },
];

const MISSIONS = [
  { name: 'HBX-Identity', phase: 'A', status: 'building', progress: 12, country: '🇳🇬', risk: 'low' },
  { name: 'HBX-Portal', phase: 'A', status: 'planned', progress: 0, country: '🇳🇬', risk: 'low' },
  { name: 'HBX-Audit', phase: 'A', status: 'planned', progress: 0, country: '🌍', risk: 'low' },
  { name: 'HBX-Crypto', phase: 'A', status: 'planned', progress: 0, country: '🌍', risk: 'low' },
  { name: 'HBX-Security', phase: 'A', status: 'planned', progress: 0, country: '🌍', risk: 'low' },
  { name: 'HBX-BizReg', phase: 'B', status: 'queued', progress: 0, country: '🇳🇬', risk: 'med' },
  { name: 'HBX-Tax', phase: 'B', status: 'queued', progress: 0, country: '🇳🇬', risk: 'high' },
  { name: 'HBX-Land', phase: 'B', status: 'queued', progress: 0, country: '🇳🇬', risk: 'high' },
  { name: 'HBX-Projects', phase: 'B', status: 'queued', progress: 0, country: '🇳🇬', risk: 'med' },
  { name: 'HBX-Data', phase: 'B', status: 'queued', progress: 0, country: '🌍', risk: 'low' },
  { name: 'HBX-Edu', phase: 'C', status: 'future', progress: 0, country: '🇳🇬', risk: 'med' },
  { name: 'HBX-Health', phase: 'C', status: 'future', progress: 0, country: '🇳🇬', risk: 'critical' },
  { name: 'HBX-Alert', phase: 'C', status: 'future', progress: 0, country: '🌍', risk: 'critical' },
];

const STATUS_COLOR: Record<string, string> = {
  building: 'bg-forge-accent text-black',
  planned: 'bg-forge-border text-forge-accent',
  queued: 'bg-forge-panel text-yellow-400',
  future: 'bg-forge-panel text-gray-500',
  deployed: 'bg-forge-ok text-black',
};
const RISK_COLOR: Record<string, string> = {
  low: 'text-forge-ok',
  med: 'text-yellow-400',
  high: 'text-orange-400',
  critical: 'text-forge-err',
};

export default function Home() {
  const building = MISSIONS.filter(m => m.status === 'building').length;
  const total = MISSIONS.length;

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8 pb-4 border-b border-forge-border">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-display font-black glow-text tracking-widest">HBX // FORGE</div>
          <div className="pulse-dot" />
          <div className="font-mono text-xs text-forge-accent tracking-wider">MISSION CONTROL · v0.1</div>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-gray-500">OPERATOR:</span>
          <span className="text-forge-accent">@hoopzblends</span>
        </div>
      </header>

      <nav className="flex flex-wrap gap-2 mb-8">
        {NAV.map(n => (
          <Link
            key={n.href}
            href={n.href}
            className="px-4 py-2 rounded border border-forge-border hover:border-forge-accent hover:bg-forge-panel transition-all font-display text-xs tracking-widest"
          >
            <span className="mr-2">{n.icon}</span>{n.label}
          </Link>
        ))}
      </nav>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Stat label="ACTIVE BUILD" value={building} suffix={`/ ${total}`} accent="forge-accent" />
        <Stat label="COUNTRIES" value={1} suffix="/ ∞" accent="forge-ok" />
        <Stat label="OPEN APPROVALS" value={3} accent="forge-warn" />
        <Stat label="SECURITY INCIDENTS" value={0} accent="forge-ok" />
      </section>

      <section className="glow-border rounded-lg p-6 mb-8 scanline relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl tracking-widest glow-text">MISSION MAP</h2>
          <div className="font-mono text-xs text-gray-500">PHASE A → B → C → WORLD</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {MISSIONS.map(m => (
            <div key={m.name} className="bg-forge-panel/60 border border-forge-border rounded p-4 hover:border-forge-accent transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="font-display text-sm">{m.name}</div>
                <div className="text-xl">{m.country}</div>
              </div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className={`px-2 py-0.5 rounded font-mono ${STATUS_COLOR[m.status]}`}>
                  {m.status.toUpperCase()}
                </span>
                <span className="text-gray-500 font-mono">PHASE {m.phase}</span>
              </div>
              <div className="w-full bg-forge-bg rounded-full h-1.5 mb-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-forge-accent to-forge-accent2 transition-all"
                  style={{ width: `${m.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">{m.progress}%</span>
                <span className={RISK_COLOR[m.risk]}>RISK: {m.risk.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="glow-border rounded-lg p-6">
          <h3 className="font-display text-sm tracking-widest mb-4 glow-text">⚡ APPROVAL QUEUE</h3>
          <div className="space-y-3">
            <ApprovalRow title="HBX-Identity v0.1 → staging" severity="low" />
            <ApprovalRow title="Add biometric hook (Nigeria pilot)" severity="med" />
            <ApprovalRow title="Production deploy gate definition" severity="high" />
          </div>
        </div>
        <div className="glow-border rounded-lg p-6">
          <h3 className="font-display text-sm tracking-widest mb-4 glow-text">◈ AGENT ROSTER</h3>
          <div className="space-y-3">
            <AgentRow name="identity-builder" status="active" task="HBX-Identity v0.1" />
            <AgentRow name="security-auditor" status="idle" task="awaiting next scan" />
            <AgentRow name="deploy-engineer" status="idle" task="awaiting first deploy" />
            <AgentRow name="compliance-checker" status="idle" task="awaiting first build" />
          </div>
        </div>
      </section>

      <footer className="mt-12 pt-4 border-t border-forge-border flex items-center justify-between font-mono text-xs text-gray-500">
        <div>HBX-FORGE · Hoopz Blends · Lagos 🇳🇬</div>
        <div>OPEN-CORE · WORLD-CUSTOMIZABLE · HACK-PROOF BY DESIGN</div>
      </footer>
    </div>
  );
}

function Stat({ label, value, suffix = '', accent }: { label: string; value: number; suffix?: string; accent: string }) {
  return (
    <div className="glow-border rounded p-4">
      <div className="font-mono text-xs text-gray-500 mb-1 tracking-widest">{label}</div>
      <div className={`font-display text-3xl text-${accent} glow-text`}>{value}<span className="text-base text-gray-500 ml-1">{suffix}</span></div>
    </div>
  );
}

function ApprovalRow({ title, severity }: { title: string; severity: string }) {
  const colors: Record<string, string> = { low: 'text-forge-ok', med: 'text-yellow-400', high: 'text-orange-400', critical: 'text-forge-err' };
  return (
    <div className="flex items-center justify-between bg-forge-panel/60 rounded p-3 border border-forge-border">
      <span className="text-sm">{title}</span>
      <span className={`font-mono text-xs ${colors[severity]}`}>{severity.toUpperCase()}</span>
    </div>
  );
}

function AgentRow({ name, status, task }: { name: string; status: string; task: string }) {
  const statusColor = status === 'active' ? 'text-forge-accent' : status === 'idle' ? 'text-gray-500' : 'text-forge-err';
  return (
    <div className="flex items-center justify-between bg-forge-panel/60 rounded p-3 border border-forge-border">
      <div>
        <div className="font-mono text-sm text-forge-accent">{name}</div>
        <div className="text-xs text-gray-500">{task}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className={status === 'active' ? 'pulse-dot' : 'w-2 h-2 rounded-full bg-gray-600'} />
        <span className={`font-mono text-xs ${statusColor}`}>{status.toUpperCase()}</span>
      </div>
    </div>
  );
}
