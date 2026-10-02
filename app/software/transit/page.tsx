import { content, TRANSIT_TITLE } from '@/content'
import { pageMetadata } from '@/seo'
import Link from 'next/link'

export const metadata = pageMetadata(
  `${TRANSIT_TITLE} — ${content.personal.name}`,
  'A Kathmandu bus tracker and arrival estimate: GPS and GSM hardware, a stored corridor map, and a small neural net.',
  '/software/transit',
)

const report = 'https://drive.google.com/file/d/1OQ9E2Be1z1Rs9MlQo7qIhcqWz8Cyc8Of/view?usp=sharing'
const demo = 'https://drive.google.com/file/d/1QK_E9o4nTWwKg8LO8D3vSZ7M-Gffb--v/view?usp=sharing'
const repo = 'https://github.com/harijoshi07/public-transport-assistant-ann'

export default function TransitCaseStudy() {
  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Minor project · March 2024</p>
          <h1 className="page-title page-title-long">{TRANSIT_TITLE}</h1>
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
              Team of four: Chandra Mohan Sah, Hari Joshi, Jyotsna Jha, and Khagendra Raj Joshi. I led it and did most of the build.
            </p>
            <p className="record-copy">
              Submitted to the department as &quot;Public Transportation Assistance using Artificial Neural Network.&quot;
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
              Each hop asks a network for minutes. The inputs are the two stop indexes, the hour, the distance, and the speed. Two hidden layers, 64 and 32 units. The running app loads those weights from a scikit-learn file. The report&apos;s model, a TensorFlow network with ten inputs and dropout 0.3, is described by the script ml/train_eta_ann.py and is not what the site serves.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">What was measured</h2>
          <div className="content-flow">
            <p className="record-copy">
              The report&apos;s model is a TensorFlow network with ten normalized inputs, hidden layers of 64 and 32 units, and dropout 0.3 after each. Table 6-1 gives R² 0.965 and MAPE 6.74% on a 20% test split. Both inputs and targets were min–max scaled and the scores were computed on the scaled targets, so the MAPE is not a percentage of minutes.
            </p>
            <p className="record-copy">
              The app serves a different model: a scikit-learn network with the same hidden layers and five inputs (current stop, next stop, hour, distance, speed), trained on the cleaned 2022–2023 table. On a random 80/20 split of that table, scored in minutes, the average error is 0.16 minutes, MAPE is 4.0%, and R² is 0.998. These numbers come from a different model, different inputs and a different scale, so they are not comparable with the report&apos;s.
            </p>
            <p className="record-copy">
              Speed is one of the inputs, and travel time is mostly distance divided by speed. In the training table, speed is the recorded hop speed. When the app predicts a new trip it has no recorded speed, so it uses the median speed for the hour. The 0.998 therefore describes a setting the app does not run in.
            </p>
            <p className="record-copy">
              Running an ablation on that cleaned table reveals the exact impact: with speed removed entirely, MAE is 1.92 minutes, MAPE is 42.7%, and R² is 0.582. When the hour-median speed is substituted at test time (matching the deployed app runtime), MAE is 2.55 minutes, MAPE is 41.1%, and R² is 0.136. A pure distance ÷ speed physics baseline on measured speed scores R² = 1.000, confirming that the speed column carries almost all the variance.
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
              It is not a live map of every bus in the valley. The app follows stored corridors only. In the demo, the Radar tab animates a bus along the planned corridor. A real tracker can post fixes to the API, and the map reads the latest one. A fix older than 30 seconds is marked stale. If two places do not share a stored line, the app does not invent a route across the city.
            </p>
            <p className="record-copy">
              Both sets of scores come from random 80/20 splits of rows from the same tables, so rows from the same corridor and hour can fall on both sides. They show how well each model fits its table. They do not show how it would predict a new day of traffic, and they say nothing about a fix that never arrives.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
