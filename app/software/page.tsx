import { content } from '@/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Software & Systems — ${content.personal.name}`,
  description: 'Selected projects spanning aerial robotics, embedded hardware telemetry, and spatial systems.',
}

export default function SoftwarePage() {
  const { projects } = content

  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Engineering Builds & Systems</p>
          <h1 className="page-title">Systems & Software</h1>
          <p className="page-deck">
            Selected projects across autonomous aerial robotics, embedded hardware telemetry, and production mobile systems.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">All builds</h2>
          <div>
            <div className="record-list">
              {projects.map((proj) => (
                <article key={proj.id} className="record">
                  <div className="record-meta">
                    <div>{proj.category}</div>
                    <div>{proj.status}</div>
                  </div>
                  <div>
                    <h3 className="record-title">{proj.title}</h3>
                    <p className="record-copy">{proj.description}</p>
                    <p className="record-copy" style={{ marginTop: '12px' }}>
                      <strong>Systems focus:</strong> {proj.systemsFocus}
                    </p>
                    <div className="tag-row" aria-label="Technologies">
                      {proj.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    {proj.links.length > 0 && (
                      <div className="link-row">
                        {proj.links.map((link) => (
                          <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
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
