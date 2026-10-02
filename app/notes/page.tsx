import { content } from '@/content'
import { pageMetadata } from '@/seo'
import Link from 'next/link'

export const metadata = pageMetadata(
  `Notes — ${content.personal.name}`,
  'Research notes, experiment logs, and reading notes.',
  '/notes',
)

export default function NotesPage() {
  const { notes } = content

  return (
    <>
      <div className="page-header">
        <div className="site-shell">
          <h1>Notes</h1>
          <p>Experiment logs, methodology notes, and reading notes from ongoing work.</p>
        </div>
      </div>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">All notes</h2>
          <div>
            {notes.length === 0 ? (
              <p className="record-copy">No notes published yet. Technical writeups and research logs will appear here.</p>
            ) : (
              <div className="record-list">
                {notes.map((note) => (
                  <article key={note.slug} className="record">
                    <div className="record-meta">
                      <div>{note.date}</div>
                      <div>{note.type}</div>
                    </div>
                    <div>
                      <h3 className="record-title">
                        <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                      </h3>
                      <p className="record-copy">{note.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
