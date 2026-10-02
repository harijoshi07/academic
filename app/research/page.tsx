import { content } from '@/content'
import { pageMetadata } from '@/seo'
import Link from 'next/link'

export const metadata = pageMetadata(
  `Research — ${content.personal.name}`,
  content.hero.thesis,
  '/research',
)

const writeups: Record<string, string> = {
  'autonomous-uav-investigation': '/software/uav',
  'public-transport-investigation': '/software/transit',
}

const recordIds = [
  'autonomous-uav-investigation',
  'public-transport-investigation',
  'production-mobile-investigation',
]

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
          <h2 className="section-label">Three systems</h2>
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

                    <p className="research-subhead">
                      {inv.id === 'production-mobile-investigation' ? 'Outcomes' : 'What was found'}
                    </p>
                    <p className="record-copy">{inv.findings}</p>

                    <div className="link-row">
                      {writeups[inv.id] && (
                        <Link className="text-link" href={writeups[inv.id]}>Write-up</Link>
                      )}
                      {inv.links.map((link) => (
                        <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
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
          <h2 className="section-label">Research directions</h2>
          <div className="content-flow">
            <p className="record-copy">
              <strong>State estimation on a small computer.</strong> The UAV replans around obstacles from onboard depth, but it relies on GPS for its position. I want to study how far a lightweight visual-inertial approach can replace GPS on a Raspberry Pi-class computer, and what it costs in latency. First step: record camera and flight-controller IMU data on the existing aircraft and compare a lightweight visual-inertial pipeline against the Pixhawk&apos;s GPS-based estimate.
            </p>
            <p className="record-copy">
              <strong>Arrival estimates when fixes are late.</strong> The transit model assumes the next fix arrives. I want to measure how arrival-time error grows as fixes are delayed or dropped, and whether a model that carries its uncertainty stays usable. First step: replay the corridor data with simulated dropouts and plot error against gap length.
            </p>
            <p className="record-copy">
              <strong>Reliable location tracking on mobile clients.</strong> In production Android work I handled GPS polling, offline tile caching and map-view lifecycle problems. I want to measure how these choices affect battery, latency and map smoothness on low-end phones, using an open-source app and public benchmark data rather than employer code.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
