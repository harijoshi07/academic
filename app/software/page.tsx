import { content } from '@/content'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Software — ${content.personal.name}`,
  description: 'Academic systems, production mapping work, and shipped Android apps.',
}

const academicIds: { id: string; meta: string; writeup?: string }[] = [
  { id: 'autonomous-uav', meta: 'Major project · 2025', writeup: '/software/uav' },
  { id: 'public-transport-assistant', meta: 'Minor project · 2024', writeup: '/software/transit' },
]

const appLines = [
  {
    id: 'driving-license-app',
    href: 'https://play.google.com/store/apps/details?id=com.hari.drivinglicenseexamnepal_',
    label: 'Google Play',
  },
  {
    id: 'quizzle',
    href: 'https://github.com/harijoshi07/Quizzle',
    label: 'Repository',
  },
  {
    id: 'ipo-share',
    href: 'https://harijoshi07.github.io/portfolio/',
    label: 'Portfolio',
  },
]

export default function SoftwarePage() {
  const { projects } = content
  const academic = academicIds.flatMap(({ id, meta, writeup }) => {
    const project = projects.find((item) => item.id === id)
    return project ? [{ project, meta, writeup }] : []
  })
  const baato = projects.find((item) => item.id === 'baato-maps')
  const apps = appLines.flatMap((line) => {
    const project = projects.find((item) => item.id === line.id)
    return project ? [{ ...line, title: project.title }] : []
  })

  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Software</p>
          <h1 className="page-title">Systems and software</h1>
          <p className="page-deck">
            The two academic systems are written up on the research record. This page is the code, the production map work, and the apps.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Academic systems</h2>
          <div>
            <div className="record-list">
              {academic.map(({ project, meta, writeup }) => (
                <article key={project.id} className="record">
                  <div className="record-meta">{meta}</div>
                  <div>
                    <h3 className="record-title">{project.title}</h3>
                    <p className="record-copy">{project.summary}</p>
                    <div className="link-row">
                      {writeup && (
                        <Link className="text-link" href={writeup}>Write-up</Link>
                      )}
                      {project.links.map((link) => (
                        <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="link-row section-action">
              <Link className="text-link" href="/research">Research record</Link>
            </div>
          </div>
        </div>
      </section>

      {baato && (
        <section className="section">
          <div className="site-shell section-grid">
            <h2 className="section-label">Production</h2>
            <div>
              <article className="record">
                <div className="record-meta">Kathmandu Living Labs · 2025–2026</div>
                <div>
                  <h3 className="record-title">{baato.title}</h3>
                  <p className="record-copy">{baato.description}</p>
                  <p className="record-copy">{baato.systemsFocus}</p>
                  {baato.links.length > 0 && (
                    <div className="link-row">
                      {baato.links.map((link) => (
                        <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Apps</h2>
          <div>
            <div className="record-list">
              {apps.map((app) => (
                <article key={app.id} className="record">
                  <div className="record-meta">Shipped</div>
                  <div>
                    <h3 className="record-title">{app.title}</h3>
                    <div className="link-row">
                      <a className="text-link" href={app.href} target="_blank" rel="noopener noreferrer">
                        {app.label}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
