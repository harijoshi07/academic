import { content } from '@/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Research — ${content.personal.name}`,
  description: content.hero.thesis,
}

const recordIds = ['autonomous-uav-investigation', 'public-transport-investigation']

export default function ResearchPage() {
  const { hero, currentResearch, investigations, publications } = content
  const records = recordIds.flatMap((id) => {
    const investigation = investigations.find((item) => item.id === id)
    return investigation ? [investigation] : []
  })

  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Research</p>
          <h1 className="page-title">Research record</h1>
          <p className="page-deck">{hero.thesis}</p>
        </div>
      </header>

      <section className="section" id="current-work">
        <div className="site-shell section-grid">
          <h2 className="section-label">Two systems</h2>
          <div>
            <p className="record-copy research-home-status">{currentResearch?.status}</p>
            <div className="record-list" style={{ marginTop: '28px' }}>
              {records.map((inv) => (
                <article key={inv.id} className="record">
                  <div className="record-meta">
                    <div>{inv.context}</div>
                  </div>
                  <div>
                    <h3 className="record-title">{inv.title}</h3>

                    <p className="research-subhead">Question</p>
                    <p className="record-copy" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                      {inv.question}
                    </p>

                    <p className="research-subhead">What was built</p>
                    <p className="record-copy">{inv.methodology}</p>

                    <p className="research-subhead">What was found</p>
                    <p className="record-copy">{inv.findings}</p>

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

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">What these leave open</h2>
          <div className="content-flow">
            <p className="record-copy">
              The UAV replans around obstacles from onboard depth, on a Raspberry Pi. It does not yet hold a position estimate when GPS is weak. The open question is state estimation that stays on that same computer.
            </p>
            <p className="record-copy">
              The transit estimate needs both the road graph and a model, and the cellular link drops packets. The open question is an arrival time that stays usable when the next fix is late.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
