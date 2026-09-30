import { content } from '@/content'
import Link from 'next/link'

export default function Home() {
  const { hero, currentResearch, publications, projects, personal } = content

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="site-shell">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{personal.name}</h1>
          <p className="hero-thesis">{hero.thesis}</p>
          <p className="hero-support">{hero.support}</p>
          <div className="hero-meta">
            <Link className="text-link" href="/research">Research record</Link>
            <Link className="text-link" href="/cv">Curriculum vitae</Link>
            <a className="text-link" href={`mailto:${personal.email}`}>Email</a>
          </div>
        </div>
      </section>

      {/* Current Research */}
      {currentResearch && (
        <section className="section">
          <div className="site-shell section-grid">
            <h2 className="section-label">Current systems research</h2>
            <div>
              <p className="research-subhead">Broader goal</p>
              <p className="section-intro research-home-question">{currentResearch.question}</p>
              <p className="research-subhead">Evidence to date</p>
              <p className="record-copy research-home-milestone">{currentResearch.evidence}</p>
              <p className="record-copy research-home-status">{currentResearch.status}</p>
              <div className="link-row section-action">
                <Link className="text-link" href="/research#current-work">Read the research record</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Publications (if any) */}
      {publications.length > 0 && (
        <section className="section">
          <div className="site-shell section-grid">
            <h2 className="section-label">Published research</h2>
            <div>
              <p className="section-intro">Selected publications and preprints.</p>
              <div className="record-list">
                {publications.map((pub) => (
                  <article key={pub.id} className="record">
                    <div className="record-meta">
                      <div>{pub.year}</div>
                      <div>{pub.type}</div>
                      <div>{pub.venue}</div>
                    </div>
                    <div>
                      <span className="status">{pub.status}</span>
                      <h3 className="record-title">{pub.title}</h3>
                      <p className="record-authors">{pub.authors}</p>
                      <p className="record-copy">{pub.abstract}</p>
                      <p className="record-copy record-contribution">
                        <strong>Study contribution:</strong> {pub.contribution}
                      </p>
                      {pub.links.length > 0 && (
                        <div className="link-row">
                          {pub.links.map((link) => (
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
      )}

      {/* Systems Building */}
      {projects.length > 0 && (
        <section className="section">
          <div className="site-shell section-grid">
            <h2 className="section-label">Systems building</h2>
            <div>
              <p className="section-intro">
                Selected projects involving aerial robotics, embedded hardware telemetry, and spatial systems.
              </p>
              <div className="record-list">
                {projects.slice(0, 3).map((proj) => (
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
              <div className="link-row section-action">
                <Link className="text-link" href="/software">All selected software</Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
