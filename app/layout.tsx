import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import ThemeToggle from './theme-toggle'
import { content } from '@/content'
import Link from 'next/link'

const fontDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${content.personal.name} — ${content.personal.title}`,
  description: content.hero.support,
  openGraph: {
    title: `${content.personal.name} — ${content.personal.title}`,
    description: content.hero.support,
    url: `https://${content.personal.name.toLowerCase().replace(/\s+/g, '')}.github.io`,
    siteName: content.personal.name,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${content.personal.name} — ${content.personal.title}`,
    description: content.hero.support,
  },
}

const NAV_LINKS = [
  { label: 'Research', href: '/research' },
  { label: 'Software', href: '/software' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const p = content.personal

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    url: `https://${p.name.toLowerCase().replace(/\s+/g, '')}.github.io`,
    email: `mailto:${p.email}`,
    jobTitle: p.title,
    address: { '@type': 'PostalAddress', addressCountry: 'NP' },
    sameAs: [p.github, p.linkedin, ...(p.orcid ? [p.orcid] : []), ...(p.twitter ? [p.twitter] : [])],
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
      <body>
        <Providers>
          {/* Header — abhiyan.me exact style */}
          <header className="site-header">
            <div className="site-shell nav-row">
              <Link className="wordmark" href="/">
                <span className="wordmark-mark">{p.initials}</span>
                <span className="wordmark-name">{p.name}</span>
              </Link>

              {/* Desktop nav */}
              <nav className="desktop-nav" aria-label="Primary navigation">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link key={label} className="nav-link" href={href}>{label}</Link>
                ))}
                <ThemeToggle />
              </nav>

              {/* Mobile nav */}
              <details className="mobile-nav">
                <summary>Menu</summary>
                <nav className="mobile-nav-panel" aria-label="Mobile navigation">
                  {NAV_LINKS.map(({ label, href }) => (
                    <Link key={label} className="nav-link" href={href}>{label}</Link>
                  ))}
                  <ThemeToggle />
                </nav>
              </details>
            </div>
          </header>

          {/* Main */}
          <main className="site-main">
            {children}
          </main>

          {/* Footer — abhiyan.me exact style */}
          <footer className="site-footer">
            <div className="site-shell footer-row">
              <p className="footer-copy">{p.name} · {p.location}</p>
              <div className="footer-links">
                <a className="text-link" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {p.orcid && <a className="text-link" href={p.orcid} target="_blank" rel="noopener noreferrer">ORCID</a>}
                <a className="text-link" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {p.twitter && <a className="text-link" href={p.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                <a className="text-link" href={`mailto:${p.email}`}>Email</a>
                <Link className="text-link" href="/cv">CV (PDF)</Link>
              </div>
            </div>
          </footer>

          {/* Structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Providers>
      </body>
    </html>
  )
}
