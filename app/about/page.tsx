import { content } from '@/content'
import { pageMetadata } from '@/seo'

export const metadata = pageMetadata(
  `About — ${content.personal.name}`,
  `About ${content.personal.name} — background, interests, and education.`,
  '/about',
)

export default function AboutPage() {
  const { about, personal } = content

  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">{personal.location}</p>
          <h1 className="page-title">About</h1>
        </div>
      </header>

      {/* Bio */}
      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Background</h2>
          <div className="content-flow">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="record-copy" style={{ fontSize: '1.02rem', lineHeight: 1.72 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Interests</h2>
          <div>
            <p className="record-copy">{about.interests.join('. ')}.</p>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Record</h2>
          <div>
            <div className="record-list">
              {about.education.map((item, i) => (
                <article key={i} className="record">
                  <div className="record-meta">
                    <div>{item.year}</div>
                    <div style={{ marginTop: '4px' }}>{item.type}</div>
                  </div>
                  <div>
                    <h3 className="record-title" style={{ fontSize: '1.25rem' }}>{item.label}</h3>
                    <p className="record-copy">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Contact</h2>
          <div>
            <p className="record-copy">
              Email is enough. A short note about what you are working on is plenty.
            </p>
            <div className="link-row section-action">
              <a className="text-link" href={`mailto:${personal.email}`}>Email</a>
              <a className="text-link" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-link" href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {personal.twitter && (
                <a className="text-link" href={personal.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
