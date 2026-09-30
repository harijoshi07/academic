import { content } from '@/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Research — ${content.personal.name}`,
  description: 'Research record, technical investigations, and systems studies.',
}

export default function ResearchPage() {
  const { currentResearch, investigations, publications } = content

  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Academic & Applied Investigations</p>
          <h1 className="page-title">Research Record</h1>
          <p className="page-deck">
            Problem formulations, systems architectures, and empirical investigations across autonomous aerial robotics, embedded sensor telemetry, and spatial computing.
          </p>
        </div>
      </header>

      {/* Broader Research Question */}
      {currentResearch && (
        <section className="section" id="current-work">
          <div className="site-shell section-grid">
            <h2 className="section-label">Central focus</h2>
            <div>
              <p className="research-subhead">Broader research goal</p>
              <p className="section-intro research-home-question">{currentResearch.question}</p>
              <p className="research-subhead">Current empirical evidence</p>
              <p className="record-copy research-home-milestone">{currentResearch.evidence}</p>
              <p className="research-subhead">Status</p>
              <p className="record-copy research-home-status">{currentResearch.status}</p>
            </div>
          </div>
        </section>
      )}

      {/* Technical Investigations */}
      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Investigations</h2>
          <div>
            <p className="section-intro">
              Applied systems studies and engineering investigations conducted during undergraduate capstone work and production engineering.
            </p>
            <div className="record-list">
              {investigations.map((inv) => (
                <article key={inv.id} className="record">
                  <div className="record-meta">
                    <div>{inv.context}</div>
                  </div>
                  <div>
                    <h3 className="record-title">{inv.title}</h3>
                    
                    <p className="research-subhead">Research question</p>
                    <p className="record-copy" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                      {inv.question}
                    </p>

                    <p className="research-subhead">Methodology & System Architecture</p>
                    <p className="record-copy">{inv.methodology}</p>

                    <p className="research-subhead">Findings & Failure Modes</p>
                    <p className="record-copy">{inv.findings}</p>

                    <p className="research-subhead">Systems focus</p>
                    <p className="record-copy">
                      {inv.systemsFocus}
                    </p>

                    <div className="tag-row" aria-label="Technologies">
                      {inv.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {inv.links.length > 0 && (
                      <div className="link-row">
                        {inv.links.map((link) => (
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

      {/* Publications (if any) */}
      {publications.length > 0 && (
        <section className="section">
          <div className="site-shell section-grid">
            <h2 className="section-label">Publications</h2>
            <div>
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
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Graduate Research Directions */}
      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Future directions</h2>
          <div>
            <p className="section-intro">
              Areas of focused inquiry proposed for Master&apos;s / graduate research:
            </p>
            <div className="record-copy" style={{ lineHeight: 1.75 }}>
              <p style={{ marginBottom: '1.25rem' }}>
                <strong>1. Embedded Sensor Fusion for GPS-Denied Localization:</strong> Combining monocular/RGB-D depth with inertial measurement units (IMU) on compute-constrained aerial platforms to maintain state estimation in indoor and canopy-occluded environments.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                <strong>2. Real-Time Dynamic Obstacle Trajectory Generation:</strong> Designing low-latency local path planning algorithms capable of executing on resource-constrained embedded companion computers without relying on high-power offboard GPU clusters.
              </p>
              <p>
                <strong>3. Edge Telemetry and Spatial Concurrency:</strong> Developing robust, memory-bounded communication architectures that synchronize live multi-agent spatial data under high packet loss and variable network topology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
