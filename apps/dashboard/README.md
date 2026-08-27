# HBX-Forge — Mission Control Dashboard v0.1

> First dashboard screen: Mission Control.
> Part of the HBX-Forge monorepo. Next.js 14 + Tailwind CSS.

---

## What This Is

**Mission Control** is the first screen of the HBX-Forge dashboard — the central view that shows the state of the entire HBX platform at a glance:

- System status (online / offline / deploying)
- Active agents and their status
- Active missions and progress
- Security status (scan results, approval gates)
- Quick actions (launch mission, view SITREP, access security center)

This is screen v0.1 of 8 (Mission Control, Task Force, SITREP, Country Profiles, Security Center, Build Pipeline, Agent Roster, Settings).

---

## File Structure

```
HBX-Forge/apps/dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Dashboard layout (shell, nav, theme)
│   │   ├── page.tsx             # Dashboard home — routes to screens
│   │   └── mission-control/
│   │       └── page.tsx         # MISSION CONTROL SCREEN (this file)
│   ├── components/
│   │   ├── shell.tsx            # Dashboard shell (sidebar + header)
│   │   ├── status-pill.tsx      # Status indicator (online/offline/deploying)
│   │   └── ...
│   └── lib/
│       └── utils.ts             # Shared utilities
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## Running It

```bash
cd HBX-Forge/apps/dashboard
npm install
npm run dev
```

Opens on `http://localhost:3000`. Navigate to `/mission-control` to see the Mission Control screen.

---

## The Mission Control Screen

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│ HBX-FORGE        [status: ONLINE]    [Profile] [Settings]   │
├──────────┬───────────────────────────────────────────────────┤
│          │  MISSION CONTROL                                  │
│ Dashboard│  ─────────────────────────────────────────────────  │
│ Task Force│  System Status: ● ONLINE                         │
│ SITREP   │  Last Update: 2026-08-27 14:30 UTC              │
│ Country  │                                                   │
│ Profiles │  ┌─────────────────────────────────────────────┐  │
│ Security │  │ ACTIVE AGENTS  │  ACTIVE MISSIONS          │  │
│ Center   │  ├───────────────┴────────────────────────────┤  │
│ Build    │  │ 21 agents online │ 3 missions active       │  │
│ Pipeline │  │ 0 standby        │ 1 deploying             │  │
│ Agent    │  └─────────────────────────────────────────────┘  │
│ Roster   │                                                   │
│ Settings │  ┌─────────────────────────────────────────────┐  │
│          │  │ SECURITY STATUS                             │  │
│          │  │ ● All scans passed (last: 2026-08-27)      │  │
│          │  │ ● 0 critical CVEs                           │  │
│          │  │ ● Approval gates: 5 active                  │  │
│          │  └─────────────────────────────────────────────┘  │
│          │                                                   │
│          │  ┌─────────────────────────────────────────────┐  │
│          │  │ QUICK ACTIONS                               │  │
│          │  │ [Launch Mission] [View SITREP] [Security]   │  │
│          │  │ [Country Profiles] [Build Pipeline]         │  │
│          │  └─────────────────────────────────────────────┘  │
│          │                                                   │
│          │  HBX Ecosystem — Built from Lagos. Designed for  │
│          │  the world.                                     │
└──────────┴───────────────────────────────────────────────────┘
```

### Components

**Shell** (`components/shell.tsx`):
- Dark HBX-themed sidebar with navigation links to all 8 screens
- Header with system status pill, profile icon, settings link
- Responsive: collapses to mobile nav on small screens

**Status Pill** (`components/status-pill.tsx`):
- Shows system status: ONLINE (green), OFFLINE (red), DEPLOYING (amber), SCANNING (blue)
- Optional pulse animation when status is changing

**Mission Control Page** (`app/mission-control/page.tsx`):
- System status header
- Active agents + active missions cards (side by side)
- Security status card
- Quick actions grid (6 buttons linking to other screens)
- Footer with HBX branding

---

## The Code

### `apps/dashboard/src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HBX-Forge — Mission Control',
  description: 'HBX-Forge dashboard — autonomous mission engine for national digital infrastructure.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-gray-100 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
```

### `apps/dashboard/src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --hb-color-bg: #0a0a0f;
  --hb-color-surface: #14141f;
  --hb-color-border: #2a2a3a;
  --hb-color-accent: #f59e0b;
  --hb-color-accent-dim: #b3740a;
  --hb-color-green: #10b981;
  --hb-color-red: #ef4444;
  --hb-color-amber: #f59e0b;
  --hb-color-blue: #3b82f6;
}

body {
  background-color: var(--hb-color-bg);
  color: var(--hb-color-surface);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--hb-color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--hb-color-border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--hb-color-accent-dim);
}
```

### `apps/dashboard/src/app/page.tsx`

```tsx
import Link from 'next/link';

export default function DashboardHome() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-400 mb-2">HBX-Forge</h1>
        <p className="text-gray-400 mb-8">Mission Control Dashboard</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/mission-control" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">🎯</div>
            <h2 className="text-lg font-semibold text-white">Mission Control</h2>
            <p className="text-sm text-gray-400 mt-1">System status, active agents, missions, security</p>
          </Link>

          <Link href="/task-force" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">👥</div>
            <h2 className="text-lg font-semibold text-white">Task Force</h2>
            <p className="text-sm text-gray-400 mt-1">Team assignments, active tasks, workloads</p>
          </Link>

          <Link href="/sitrep" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">📋</div>
            <h2 className="text-lg font-semibold text-white">SITREP</h2>
            <p className="text-sm text-gray-400 mt-1">Situation report — latest updates, milestones</p>
          </Link>

          <Link href="/country-profiles" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">🌍</div>
            <h2 className="text-lg font-semibold text-white">Country Profiles</h2>
            <p className="text-sm text-gray-400 mt-1">Nigeria and all configured countries</p>
          </Link>

          <Link href="/security-center" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">🔐</div>
            <h2 className="text-lg font-semibold text-white">Security Center</h2>
            <p className="text-sm text-gray-400 mt-1">Scan results, CVEs, approval gates, audit logs</p>
          </Link>

          <Link href="/build-pipeline" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">🔧</div>
            <h2 className="text-lg font-semibold text-white">Build Pipeline</h2>
            <p className="text-sm text-gray-400 mt-1">Active builds, CI status, deploy history</p>
          </Link>

          <Link href="/agent-roster" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">🤖</div>
            <h2 className="text-lg font-semibold text-white">Agent Roster</h2>
            <p className="text-sm text-gray-400 mt-1">All agents, versions, status, capabilities</p>
          </Link>

          <Link href="/settings" className="block p-6 rounded-lg border border-gray-800 bg-gray-900 hover:border-amber-600/50 transition-colors">
            <div className="text-2xl mb-2">⚙️</div>
            <h2 className="text-lg font-semibold text-white">Settings</h2>
            <p className="text-sm text-gray-400 mt-1">Configuration, secrets, integrations</p>
          </Link>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>HBX Ecosystem — Built from Lagos. Designed for the world.</p>
          <p className="mt-1"><Link href="/mission-control" className="text-amber-400 hover:text-amber-300">Enter Mission Control →</Link></p>
        </div>
      </div>
    </div>
  );
}
```

### `apps/dashboard/src/app/mission-control/page.tsx`

```tsx
import Link from 'next/link';

const AGENTS = [
  { name: 'Core', status: 'online', task: 'Platform orchestration' },
  { name: 'Overmind', status: 'online', task: 'Mission planning' },
  { name: 'NATALIE', status: 'online', task: 'Natural language interface' },
  { name: 'HBX Command', status: 'online', task: 'Command execution' },
  { name: 'Social Connect', status: 'online', task: '10-platform social bridge' },
  { name: 'HBX Browser', status: 'online', task: 'Built-in web engine' },
  { name: 'Camera & Vision', status: 'online', task: 'Vision + scanning' },
  { name: 'SOVEREIGN', status: 'online', task: 'Self-update engine' },
  { name: 'Cipher Sage', status: 'online', task: 'Mission & intelligence' },
  { name: 'Griot AI', status: 'standby', task: 'Wisdom & legacy (building)' },
  { name: 'NYRA AI', status: 'standby', task: 'Human intelligence (building)' },
  { name: 'Zero AI', status: 'standby', task: 'Autonomous core (dev)' },
  { name: 'HB Tech', status: 'standby', task: 'Infrastructure (building)' },
  { name: 'HBX Ecosystem', status: 'online', task: 'Unified hub' },
  // 6 more agents that expand as the platform grows
];

const MISSIONS = [
  { id: 'M-001', name: 'Dashboard v0.1–v0.3', status: 'active', progress: 75, due: '2026-09-07' },
  { id: 'M-002', name: 'HBX-Identity v0.1', status: 'active', progress: 30, due: '2026-09-14' },
  { id: 'M-003', name: 'LGA Pilot Proposal', status: 'deploying', progress: 90, due: '2026-08-30' },
];

const SECURITY_STATUS = {
  scansPassed: true,
  lastScan: '2026-08-27',
  criticalCVEs: 0,
  highCVEs: 0,
  approvalGates: 5,
  auditLogEntries: 128,
};

const QUICK_ACTIONS = [
  { label: 'Launch Mission', href: '/task-force', icon: '🚀' },
  { label: 'View SITREP', href: '/sitrep', icon: '📋' },
  { label: 'Security Center', href: '/security-center', icon: '🔐' },
  { label: 'Country Profiles', href: '/country-profiles', icon: '🌍' },
  { label: 'Build Pipeline', href: '/build-pipeline', icon: '🔧' },
  { label: 'Agent Roster', href: '/agent-roster', icon: '🤖' },
];

function StatusPill({ status }: { status: string }) {
  const config = {
    online: { label: 'ONLINE', color: 'bg-green-500', glow: 'shadow-green-500/20' },
    standby: { label: 'STANDBY', color: 'bg-gray-500', glow: 'shadow-gray-500/20' },
    deploying: { label: 'DEPLOYING', color: 'bg-amber-500', glow: 'shadow-amber-500/20' },
    offline: { label: 'OFFLINE', color: 'bg-red-500', glow: 'shadow-red-500/20' },
  };
  const c = config[status as keyof typeof config] || config.offline;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${c.color} shadow-lg ${c.glow}`}>
      {c.label}
    </span>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default function MissionControl() {
  const onlineAgents = AGENTS.filter(a => a.status === 'online').length;
  const standbyAgents = AGENTS.filter(a => a.status === 'standby').length;
  const activeMissions = MISSIONS.filter(m => m.status === 'active' || m.status === 'deploying').length;
  const deployingMissions = MISSIONS.filter(m => m.status === 'deploying').length;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <span className="text-xl font-bold text-amber-400">HBX-FORGE</span>
              <span className="text-sm text-gray-500 ml-2">Mission Control</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                <span className="text-sm text-gray-400">System</span>
                <StatusPill status="online" />
              </div>
              <div className="text-sm text-gray-500">
                Last Update: 2026-08-27 14:30 UTC
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-600/20 border border-amber-600/50 flex items-center justify-center text-amber-400 text-sm font-bold">
                HB
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Mission Control</h1>
          <p className="text-gray-400 mt-1">Central overview of the HBX platform state</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-lg border border-gray-800 bg-gray-900/50">
            <div className="text-3xl font-bold text-amber-400">{onlineAgents + standbyAgents}</div>
            <div className="text-sm text-gray-400 mt-1">Total Agents</div>
            <div className="mt-2 flex gap-2">
              <span className="text-xs text-green-400">{onlineAgents} online</span>
              <span className="text-xs text-gray-500">{standbyAgents} standby</span>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-gray-800 bg-gray-900/50">
            <div className="text-3xl font-bold text-green-400">{activeMissions}</div>
            <div className="text-sm text-gray-400 mt-1">Active Missions</div>
            <div className="mt-2 text-xs text-amber-400">{deployingMissions} deploying</div>
          </div>

          <div className="p-5 rounded-lg border border-gray-800 bg-gray-900/50">
            <div className="text-3xl font-bold text-green-400">✓</div>
            <div className="text-sm text-gray-400 mt-1">Security Status</div>
            <div className="mt-2 text-xs text-green-400">All scans passed</div>
          </div>

          <div className="p-5 rounded-lg border border-gray-800 bg-gray-900/50">
            <div className="text-3xl font-bold text-amber-400">{SECURITY_STATUS.approvalGates}</div>
            <div className="text-sm text-gray-400 mt-1">Approval Gates</div>
            <div className="mt-2 text-xs text-gray-500">Life-safety active</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Active Agents */}
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Active Agents</h2>
              <span className="text-sm text-gray-500">{AGENTS.length} total</span>
            </div>
            <div className="space-y-2">
              {AGENTS.map((agent) => (
                <div key={agent.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${agent.status === 'online' ? 'bg-green-500 shadow-green-500/30' : 'bg-gray-500'}`} />
                    <span className="text-sm font-medium text-white">{agent.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 max-w-32 truncate">{agent.task}</span>
                    <StatusPill status={agent.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Missions */}
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Active Missions</h2>
              <span className="text-sm text-gray-500">{MISSIONS.length} active</span>
            </div>
            <div className="space-y-4">
              {MISSIONS.map((mission) => (
                <div key={mission.id} className="p-4 rounded-lg bg-gray-800/50 border border-gray-800/50">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-mono text-amber-400">{mission.id}</span>
                      <span className="ml-2 text-sm font-medium text-white">{mission.name}</span>
                    </div>
                    <StatusPill status={mission.status === 'deploying' ? 'deploying' : 'active'} />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Due: {mission.due}</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <ProgressBar progress={mission.progress} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Status */}
        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Security Status</h2>
            <StatusPill status="online" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 rounded-lg bg-gray-800/50 text-center">
              <div className="text-xl font-bold text-green-400">✓</div>
              <div className="text-xs text-gray-400 mt-1">Scans Passed</div>
              <div className="text-xs text-gray-600">{SECURITY_STATUS.lastScan}</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 text-center">
              <div className="text-xl font-bold text-green-400">{SECURITY_STATUS.criticalCVEs}</div>
              <div className="text-xs text-gray-400 mt-1">Critical CVEs</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 text-center">
              <div className="text-xl font-bold text-amber-400">{SECURITY_STATUS.highCVEs}</div>
              <div className="text-xs text-gray-400 mt-1">High CVEs</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 text-center">
              <div className="text-xl font-bold text-amber-400">{SECURITY_STATUS.auditLogEntries}</div>
              <div className="text-xs text-gray-400 mt-1">Audit Entries</div>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-amber-600/10 border border-amber-600/20">
            <div className="flex items-center gap-2 text-sm text-amber-400">
              <span>⚠️</span>
              <span>Life-safety approval gates active: Identity, Health, Tax, Emergency, Government deploys require human sign-off.</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {QUICK_ACTIONS.map((action) => (
              <Link key={action.href} href={action.href} className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/50 border border-gray-800 hover:border-amber-600/50 hover:bg-gray-800 transition-colors group">
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</span>
                <span className="text-sm text-gray-300 font-medium">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-xs pb-8">
          <p>HBX Ecosystem — Built from Lagos. Designed for the world.</p>
          <p className="mt-1">Open-source under AGPL-3.0 · <Link href="/" className="text-amber-400 hover:text-amber-300">Dashboard Home ←</Link></p>
        </div>
      </main>
    </div>
  );
}
```

---

## Package.json (for apps/dashboard/)

```json
{
  "name": "hbx-forge-dashboard",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.5.0"
  }
}
```

---

## Tailwind Config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hb: {
          bg: '#0a0a0f',
          surface: '#14141f',
          border: '#2a2a3a',
          accent: '#f59e0b',
          'accent-dim': '#b3740a',
          green: '#10b981',
          red: '#ef4444',
          amber: '#f59e0b',
          blue: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
};
```

---

## PostCSS Config

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## TypeScript Config

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## What This Gives You

1. **Dashboard home** (`/`) — 8-card grid linking to all screens, HBX branding
2. **Mission Control** (`/mission-control`) — full screen with:
   - System status header (ONLINE pill, last update timestamp)
   - 4 stat cards (total agents, active missions, security status, approval gates)
   - Active Agents panel (15 agents, online/standby status pills, tasks)
   - Active Missions panel (3 missions with progress bars, due dates, status)
   - Security Status panel (scans passed, CVEs, audit entries, life-safety notice)
   - Quick Actions grid (6 buttons linking to other screens)
   - HBX branding footer

3. **Skeleton for 7 more screens** — Task Force, SITREP, Country Profiles, Security Center, Build Pipeline, Agent Roster, Settings (linked from home, ready to build)

4. **HBX dark theme** — amber accent, dark backgrounds, custom scrollbars, status pills

---

## What's Next (the other 7 screens)

| Screen | What It Shows | Priority |
|--------|--------------|----------|
| **Task Force** (v0.2) | Team assignments, active tasks, workloads, assign/drop | Week 2 |
| **SITREP** (v0.3) | Situation report — latest updates, milestone tracker, news feed | Week 2 |
| **Country Profiles** (v0.4) | Nigeria + all configured countries, NIN/BVN/TIN/NDPR status | Week 3 |
| **Security Center** (v0.5) | Scan results, CVE list, approval gates status, audit log viewer | Week 3 |
| **Build Pipeline** (v0.6) | Active builds, CI status, deploy history, artifact list | Week 4 |
| **Agent Roster** (v0.7) | Full agent list, versions, capabilities, health status | Week 4 |
| **Settings** (v0.8) | Configuration, secrets (masked), integrations, API keys | Week 4 |

Each screen is a self-contained Next.js page under `apps/dashboard/src/app/<screen-name>/page.tsx`. Copy the Mission Control pattern, swap the content.
