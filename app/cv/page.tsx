import { content } from '@/content'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Curriculum Vitae — ${content.personal.name}`,
  description: `Curriculum vitae for ${content.personal.name}.`,
}

export default function CVPage() {
  const p = content.personal

  return (
    <div className="site-shell">
      <header className="cv-header">
        <h1>{p.name}</h1>
        <div className="cv-contact">
          <span>Kathmandu, Nepal</span>
          <span>·</span>
          <span>+977-9840046008</span>
          <span>·</span>
          <a className="text-link" href={`mailto:${p.email}`}>{p.email}</a>
          <span>·</span>
          <a className="text-link" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>·</span>
          <a className="text-link" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>·</span>
          <a className="text-link" href={p.cv} target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
        </div>
      </header>

      <section className="cv-section">
        <h2>Research interests</h2>
        <p className="record-copy" style={{ color: 'var(--ink)' }}>
          Perception and local planning for small aerial robots, and arrival estimation from sparse GPS, when the onboard computer and the link are limited.
        </p>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <h3>Institute of Engineering (IOE), Thapathali Campus</h3>
          <p className="cv-item-meta">Bachelor of Electronics, Communication and Information Engineering · May 2021 – May 2025</p>
          <p className="record-copy"><strong>Percentage:</strong> 63.99% (First Division)</p>
          <p className="record-copy">
            <strong>Relevant coursework:</strong> Control Systems, Microprocessors & Microcontrollers, Artificial Intelligence, Digital Signal Processing, Computer Networks, Operating Systems, Object-Oriented Programming, Embedded System Design.
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Research & projects</h2>
        <div>
          <div className="cv-item">
            <h3>Vision-Based Autonomous UAV for Obstacle Detection, Avoidance, and Navigation</h3>
            <p className="cv-item-meta">Capstone · 2024–2025</p>
            <p className="record-copy">
              Final-year major project at IOE, Thapathali Campus. Team lead of a 4-member team. Supervisor: Er. Umesh Kanta Ghimire (Head of Department).
            </p>
            <ul className="cv-list">
              <li>Built an F330 quadrotor (Pixhawk 4X, Raspberry Pi 4B, Intel RealSense D435) that detects obstacles with YOLOv8, quantized through ONNX and TFLite (FP16/INT8) and run with OpenCV DNN, then replans with an occupancy map and RRT* on the Pi, sending commands to the Pixhawk over UART.</li>
              <li>Flew the stack in Gazebo, then in the field: a college parking lot, a forest area, and open ground.</li>
              <li>On a logged flight the auto segment was 0–1 m/s (average 0.36 m/s) at about 0.9–1.5 m altitude. Early flights were limited by GPS interference from the Pi and the battery; raising the GPS module reduced it.</li>
            </ul>
            <div className="link-row">
              <Link className="text-link" href="/software/uav">Write-up</Link>
            </div>
          </div>

          <div className="cv-item">
            <h3>Public Transportation Assistance using Artificial Neural Network</h3>
            <p className="cv-item-meta">Minor project · 2024</p>
            <p className="record-copy">
              Third-year minor project at IOE, Thapathali Campus. Team lead of a 4-member team. Supervisor: Er. Kiran Chandra Dahal.
            </p>
            <ul className="cv-list">
              <li>Built an Arduino Mega tracker (NEO-6M GPS, SIM900 GSM) that posts a fix to ThingSpeak every 30 seconds, and a Django backend with WebSockets that streams positions, routes, and fares to a Leaflet map.</li>
              <li>Trained a feedforward network (hidden layers of 64 and 32 units, dropout 0.3) on 2022–2023 corridor GPS records. The project report measured R² = 0.965 and MAPE 6.74% on a held-out test set.</li>
            </ul>
            <div className="link-row">
              <Link className="text-link" href="/software/transit">Write-up</Link>
              <a className="text-link" href="https://github.com/harijoshi07/public-transport-assistant-ann" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <div>
          <div className="cv-item">
            <h3>Mobile Engineer · Swift Technology</h3>
            <p className="cv-item-meta">Kathmandu, Nepal · Jul 2026 – Present</p>
            <ul className="cv-list">
              <li>Built a cash-in feature for a remittance app in Kotlin and Jetpack Compose that tracks ATM cash deposits in real time using polling, coroutines, and Flows.</li>
              <li>Added security hardening to a legacy Java/XML remittance app: reverse-engineering protection, idle-session logout, screenshot prevention, VPN detection, and new-device detection.</li>
            </ul>
          </div>
          <div className="cv-item">
            <h3>Mobile Engineer · Kathmandu Living Labs</h3>
            <p className="cv-item-meta">Kathmandu, Nepal · Apr 2025 – Apr 2026</p>
            <ul className="cv-list">
              <li>Built core features of the Baato Maps Android app, including navigation, search, and real-time location data visualization.</li>
              <li>Built the main map interface with the MapLibre SDK and improved rendering performance.</li>
              <li>Fixed bugs and refactored components, reducing the crash rate by 30% in key user flows.</li>
            </ul>
          </div>
          <div className="cv-item">
            <h3>Android Developer Intern · Uncle Sam&apos;s Technologies</h3>
            <p className="cv-item-meta">Remote · Aug 2024 – Sep 2024</p>
            <ul className="cv-list">
              <li>Integrated the Stripe Android SDK to implement a secure payment flow, and built a WebView component for embedded web content.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Selected software</h2>
        <div>
          <div className="cv-item">
            <h3>Driving License Exam Nepal</h3>
            <p className="cv-item-meta">Kotlin, Jetpack Compose, Material 3 · 2025</p>
            <p className="record-copy">
              Built an offline-first exam preparation app for Nepal&apos;s driving license test; published on Google Play with 1,000+ downloads.
            </p>
            <div className="link-row">
              <a className="text-link" href="https://github.com/harijoshi07/Driving-License-Exam-App" target="_blank" rel="noopener noreferrer">Repository</a>
              <a className="text-link" href="https://play.google.com/store/apps/details?id=com.hari.drivinglicenseexamnepal_" target="_blank" rel="noopener noreferrer">Google Play</a>
            </div>
          </div>
          <div className="cv-item">
            <h3>IPO Share</h3>
            <p className="cv-item-meta">Kotlin, Android SDK, MVVM, SQLite, Retrofit · May 2026</p>
            <p className="record-copy">
              Built an app for IPO allotment discovery and portfolio tracking, with local SQLite caching and live results fetched through Retrofit.
            </p>
            <div className="link-row">
              <a className="text-link" href="https://github.com/harijoshi07" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Technical skills</h2>
        <div>
          <p className="record-copy"><strong>Robotics & perception:</strong> ROS / ROS 2, PX4, Pixhawk 4X, Gazebo, RGB-D sensing (Intel RealSense D435), occupancy mapping, RRT*.</p>
          <p className="record-copy"><strong>Machine learning:</strong> Computer vision (YOLOv8, TFLite), TensorFlow / Keras, scikit-learn, OpenCV DNN, pandas, NumPy.</p>
          <p className="record-copy"><strong>Languages:</strong> C++, Python, Kotlin, Java, Dart, C, SQL, Bash.</p>
          <p className="record-copy"><strong>Embedded & hardware:</strong> Arduino Mega, Raspberry Pi 4B, NEO-6M GPS, SIM900 GSM, UART serial communication.</p>
          <p className="record-copy"><strong>Mobile:</strong> Android SDK, Jetpack Compose, Flutter, Kotlin Multiplatform (KMP), Compose Multiplatform (CMP), MapLibre SDK, Room, Retrofit, Ktor.</p>
          <p className="record-copy"><strong>Systems & tools:</strong> Linux, Git, Django REST Framework, Django Channels (WebSockets).</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Honors & leadership</h2>
        <div>
          <div className="cv-item">
            <h3>Winner, Dristi 3.0 Hackathon</h3>
            <p className="cv-item-meta">Kathmandu Engineering College · Jan 2025</p>
            <p className="record-copy">Built an educational Android app teaching Nepali language, culture, and folklore to NRN children.</p>
          </div>
          <div className="cv-item">
            <h3>Secretary, Leo Club of Kathmandu-Aarambha Deurali</h3>
            <p className="cv-item-meta">Lions Club · 2024–2025</p>
            <p className="record-copy">Organized a blood donation program at Thapathali Campus with 120+ donors.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
