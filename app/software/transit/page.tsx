import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Public Transportation Assistance — Hari Krishna Joshi',
  description:
    'A Kathmandu bus tracker and arrival estimate: GPS and GSM hardware, a stored corridor map, and a small neural net.',
}

const report = 'https://drive.google.com/file/d/1OQ9E2Be1z1Rs9MlQo7qIhcqWz8Cyc8Of/view?usp=sharing'
const demo = 'https://drive.google.com/file/d/1QK_E9o4nTWwKg8LO8D3vSZ7M-Gffb--v/view?usp=sharing'
const repo = 'https://github.com/harijoshi07/public-transport-assistant-ann'

export default function TransitCaseStudy() {
  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Minor project · March 2024</p>
          <h1 className="page-title">Public transport assistance</h1>
          <p className="page-deck">
            How do you keep a bus position when the cellular link is intermittent, and how close can a small network get to the arrival time on a known Kathmandu corridor?
          </p>
          <div className="link-row">
            <Link className="text-link" href="/software">Software</Link>
            <a className="text-link" href={report} target="_blank" rel="noopener noreferrer">Report</a>
            <a className="text-link" href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a className="text-link" href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Context</h2>
          <div className="content-flow">
            <p className="record-copy">
              Minor project, Department of Electronics and Computer Engineering, Institute of Engineering, Thapathali Campus. Defended March 2024. Supervisor Er. Kiran Chandra Dahal. External examiner Er. Yogesh Aryal.
            </p>
            <p className="record-copy">
              Team of four: Chandra Mohan Sah, Hari Krishna Joshi, Jyotsna Jha, and Khagendra Raj Joshi. I led it and did most of the build.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">System</h2>
          <div className="content-flow">
            <p className="record-copy">
              The tracker is a u-blox NEO-6M on an Arduino Mega 2560. A SIM900 posts the fix over GPRS. The sketch and the pinout are in the repository.
            </p>
            <p className="record-copy">
              The map is Django plus Leaflet. Stops and corridors are seeded for Kathmandu. A trip is drawn only when both ends sit on one stored line: walk to the stop, ride the corridor, walk off. Fare is Rs. 20 for the first 5 km, then Rs. 5 for each further 5 km along that line.
            </p>
            <p className="record-copy">
              Each hop asks a network for minutes. The inputs are the two stop indexes, the hour, the distance, and the speed. Two hidden layers, 64 and 32 units. The running app loads those weights from a scikit-learn file. An earlier TensorFlow script is still in the repo and is not what the site serves.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">What was measured</h2>
          <div className="content-flow">
            <p className="record-copy">
              The March 2024 report, Table 6-1, gives R² 0.965 and MAPE 6.74% for an earlier pass on scaled targets.
            </p>
            <p className="record-copy">
              The weights the app serves now were trained on the cleaned 2022–2023 table. On an 80/20 holdout of that table the average error is 0.16 minutes, MAPE is 4.0%, and R² is 0.998. That is a different run from the number in the report.
            </p>
            <p className="record-copy">
              One stored ride the app will show is Kalanki to Ratnapark: 5.27 km, 19 minutes, Rs. 25.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">What it does not show</h2>
          <div className="content-flow">
            <p className="record-copy">
              It is not a live map of every bus in the valley. The radar view follows one corridor. A fix older than 30 seconds is marked stale.
            </p>
            <p className="record-copy">
              If the two places do not share a stored line, the app does not invent a route across the city.
            </p>
            <p className="record-copy">
              The holdout score is on the training table. It is not a claim about a new day of traffic, and it does not survive a fix that never arrives.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
