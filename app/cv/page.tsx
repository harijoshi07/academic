import { content } from '@/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Curriculum Vitae — ${content.personal.name}`,
  description: `Curriculum vitae for ${content.personal.name}.`,
}

export default function CVPage() {
  const p = content.personal

  return (
    <div className="site-shell">
      {/* CV Header */}
      <header className="cv-header">
        <h1>{p.name}</h1>
        <div className="cv-contact">
          <span>{p.location} (UTC +5:45)</span>
          <span>·</span>
          <a className="text-link" href={`mailto:${p.email}`}>{p.email}</a>
          <span>·</span>
          <a className="text-link" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>·</span>
          <a className="text-link" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>·</span>
          <a className="text-link" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
        </div>
      </header>

      {/* Research Interests */}
      <section className="cv-section">
        <h2>Research interests</h2>
        <div>
          <p className="record-copy" style={{ color: 'var(--ink)' }}>
            Vision-based obstacle detection and avoidance for small aerial robots in cluttered environments, with a focus on real-time perception and local planning under tight onboard compute and latency budgets. This grew out of my capstone on a vision-based autonomous UAV and my industry work on real-time location and payment systems.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="cv-section">
        <h2>Education</h2>
        <div>
          <div className="cv-item">
            <h3>B.E. in Electronics, Communication & Information Engineering</h3>
            <p className="cv-item-meta">
              Institute of Engineering (IOE), Thapathali Campus · May 2021 – May 2025
            </p>
            <p className="record-copy" style={{ marginBottom: '6px' }}>
              <strong>Percentage:</strong> 63.99%
            </p>
            <p className="record-copy">
              <strong>Relevant Coursework:</strong> Control Systems, Microprocessors & Microcontrollers, Artificial Intelligence, Digital Signal Processing, Computer Networks, Operating Systems, Object-Oriented Programming, Embedded System Design.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Capstone Projects */}
      <section className="cv-section">
        <h2>Research & Projects</h2>
        <div>
          <div className="cv-item">
            <h3>Vision-Based Autonomous UAV for Obstacle Detection, Avoidance, and Navigation</h3>
            <p className="cv-item-meta">
              Final-Year Major Capstone Project · IOE Thapathali Campus (Team Lead, team of 4; Supervisor: Er. Umesh Kanta Ghimire) · 2024–2025
            </p>
            <ul className="cv-list">
              <li>Built an autonomous quadrotor (F330 frame, Pixhawk 4X, Raspberry Pi 4B) that detects obstacles with YOLOv8 and Intel RealSense D435 RGB-D depth sensing to navigate safely in cluttered environments.</li>
              <li>Implemented 3D occupancy voxel mapping and an RRT* trajectory planner in ROS on the companion computer, streaming velocity commands to the flight controller over UART at 10 Hz.</li>
              <li>Optimized YOLOv8 through ONNX export and TensorFlow Lite (TFLite) quantization (FP16/INT8) deployed with OpenCV DNN for low-latency onboard inference on the Raspberry Pi 4B.</li>
              <li>Validated the pipeline in Gazebo and PX4 simulation, followed by field flight tests at 1.3 m altitude and 0.4 m/s default speed, demonstrating dynamic depth thresholding within 2 m and autonomous waypoint avoidance replanning.</li>
            </ul>
          </div>

          <div className="cv-item">
            <h3>Public Transportation Assistance using Artificial Neural Network</h3>
            <p className="cv-item-meta">
              Third-Year Minor Project · IOE Thapathali Campus (Team Lead, team of 4; Supervisor: Er. Kiran Chandra Dahal) · 2024
            </p>
            <ul className="cv-list">
              <li>Built a GPS tracking unit from an Arduino Mega, NEO-6M GPS, and SIM900 GSM module that posts vehicle position to ThingSpeak every 30 seconds.</li>
              <li>Built a Django REST Framework backend with Django Channels (WebSockets) that streams live bus positions, routes, and fares to a Leaflet and OpenStreetMap web interface.</li>
              <li>Trained a feedforward neural network (hidden layers of 64 and 32 units, dropout 0.3) on 2022–2023 bus GPS records to predict travel time between stops, reaching R² = 0.965 on a held-out 20% test set.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="cv-section">
        <h2>Reports</h2>
        <div>
          <div className="cv-item">
            <h3>Major Project Report (Team Lead, team of 4)</h3>
            <p className="cv-item-meta">IOE Thapathali Campus · March 2025</p>
            <p className="record-copy">
              <em>A Vision based Autonomous UAV for Obstacle Detection, Avoidance and Navigation in Cluttered Environment.</em> Supervisor: Er. Umesh Kanta Ghimire.
            </p>
          </div>
          <div className="cv-item">
            <h3>Minor Project Report (Team Lead, team of 4)</h3>
            <p className="cv-item-meta">IOE Thapathali Campus · March 2024</p>
            <p className="record-copy">
              <em>Public Transportation Assistance using Artificial Neural Network.</em> Supervisor: Er. Kiran Chandra Dahal.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="cv-section">
        <h2>Experience</h2>
        <div>
          <div className="cv-item">
            <h3>Mobile Engineer · Swift Technology</h3>
            <p className="cv-item-meta">Kathmandu, Nepal · Jul 2026 – Present</p>
            <ul className="cv-list">
              <li>Built a cash-in feature for a remittance app in Kotlin and Jetpack Compose that tracks ATM cash deposits in real time using polling, coroutines, and Flows.</li>
              <li>Added security hardening to a legacy Java/XML remittance app: reverse-engineering protection, idle-session logout, screenshot prevention, VPN detection, and new-device detection.</li>
              <li>Rebuilding a second remittance app in Flutter as a multi-module architecture that separates platform, product, and region-specific solution repositories.</li>
            </ul>
          </div>

          <div className="cv-item">
            <h3>Mobile Systems Engineer · Kathmandu Living Labs</h3>
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

      {/* Selected Software Builds */}
      <section className="cv-section">
        <h2>Selected software</h2>
        <div>
          <div className="cv-item">
            <h3>Driving License Exam Nepal</h3>
            <p className="cv-item-meta">Kotlin, Jetpack Compose, Room DB, Material 3 · 2025</p>
            <p className="record-copy">
              Built an offline-first exam preparation app for Nepal&apos;s driving license test; published on Google Play with 1,000+ downloads.
            </p>
          </div>
          <div className="cv-item">
            <h3>IPO Share</h3>
            <p className="cv-item-meta">Kotlin, Android SDK, MVVM, SQLite, Retrofit · May 2026</p>
            <p className="record-copy">
              Built an app for IPO allotment discovery and portfolio tracking, with local SQLite caching and live results fetched through Retrofit.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="cv-section">
        <h2>Technical skills</h2>
        <div>
          <p className="record-copy" style={{ marginBottom: '8px' }}>
            <strong>Robotics & Perception:</strong> ROS / ROS 2, PX4, Pixhawk 4X, Gazebo, RGB-D Sensing (Intel RealSense D435), Occupancy Mapping, RRT* and B-spline Trajectory Planning.
          </p>
          <p className="record-copy" style={{ marginBottom: '8px' }}>
            <strong>Machine Learning:</strong> Computer Vision (YOLOv8, TFLite), TensorFlow / Keras, scikit-learn, OpenCV DNN, pandas, NumPy.
          </p>
          <p className="record-copy" style={{ marginBottom: '8px' }}>
            <strong>Languages:</strong> C++, Python, Kotlin, Java, Dart, C, SQL, Bash.
          </p>
          <p className="record-copy" style={{ marginBottom: '8px' }}>
            <strong>Embedded & Hardware:</strong> Arduino Mega, Raspberry Pi 4B, NEO-6M GPS, SIM900 GSM, UART Serial Communication.
          </p>
          <p className="record-copy" style={{ marginBottom: '8px' }}>
            <strong>Mobile:</strong> Android SDK, Jetpack Compose, Flutter, Kotlin Multiplatform (KMP), Compose Multiplatform (CMP), MapLibre SDK, Room, Retrofit, Ktor.
          </p>
          <p className="record-copy">
            <strong>Systems & Tools:</strong> Linux, Git, Django REST Framework, Django Channels (WebSockets).
          </p>
        </div>
      </section>

      {/* Honors & Leadership */}
      <section className="cv-section" style={{ borderBottom: 'none' }}>
        <h2>Honors & Leadership</h2>
        <div>
          <div className="cv-item">
            <h3>Winner, Dristi 3.0 Hackathon</h3>
            <p className="cv-item-meta">Kathmandu Engineering College · Jan 2025</p>
            <p className="record-copy">
              Built an educational Android app teaching Nepali language, culture, and folklore to NRN children.
            </p>
          </div>
          <div className="cv-item">
            <h3>Secretary, Leo Club of Kathmandu-Aarambha Deurali</h3>
            <p className="cv-item-meta">Lions Club · 2024 – 2025</p>
            <p className="record-copy">
              Organized a blood donation program at Thapathali Campus with 120+ donors.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
