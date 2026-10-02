import { content } from '@/content'
import { pageMetadata } from '@/seo'
import Link from 'next/link'

export const metadata = pageMetadata(
  `${content.personal.name} — ${content.personal.title}`,
  content.hero.support,
  '/',
)

const homeProjects = [
  { id: 'autonomous-uav', meta: 'Major project · 2025' },
  { id: 'public-transport-assistant', meta: 'Minor project · 2024' },
  { id: 'production-mobile-systems', meta: 'Production Systems · 2025–Present' },
]

export default function Home() {
  const { hero, projects, personal } = content
  const featured = homeProjects.flatMap(({ id, meta }) => {
    const project = projects.find((item) => item.id === id)
    return project ? [{ project, meta }] : []
  })

  return (
    <>
      <section className="hero">
        <div className="site-shell">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{personal.name}</h1>
          <p className="hero-support">{hero.identity}</p>
          <p className="hero-thesis">{hero.thesis}</p>
          <div className="hero-meta">
            <a className="text-link" href={`mailto:${personal.email}`}>Email</a>
            <Link className="text-link" href="/research">Research record</Link>
            <Link className="text-link" href="/cv">Curriculum vitae</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Evidence</h2>
          <div>
            <div className="record-list">
              {featured.map(({ project, meta }) => (
                <article key={project.id} className="record">
                  <div className="record-meta">{meta}</div>
                  <div>
                    <h3 className="record-title">{project.title}</h3>
                    <p className="record-copy">{project.summary}</p>
                    <div className="link-row">
                      {project.links
                        .map((link) => (
                          <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                        ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="record-copy" style={{ marginTop: '28px' }}>
              Production work: Baato Maps at Kathmandu Living Labs, and mobile systems at Swift Technology. See the Software page.
            </p>
            <div className="link-row">
              <Link className="text-link" href="/software">
                Systems & Software Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
