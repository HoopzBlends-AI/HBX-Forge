import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HBX-Forge — Mission Control',
  description: 'The autonomous build engine for open-source digital public infrastructure. Built from Lagos. Designed for the world.',
  icons: {
    icon: 'https://hoopzblends.store/assets/images/hoopz-logo-main.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-hb-bg text-hb-surface">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
