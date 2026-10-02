// content.ts — All site content in one place. Fill in your own details.

export interface Publication {
  id: string
  year: number
  type: 'preprint' | 'conference' | 'journal' | 'demonstration'
  venue: string
  title: string
  authors: string
  abstract: string
  contribution: string
  status: string
  links: { label: string; href: string }[]
}

export interface ResearchInvestigation {
  id: string
  title: string
  context: string
  question: string
  methodology: string
  findings: string
  systemsFocus: string
  tags: string[]
  links: { label: string; href: string }[]
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  summary?: string
  systemsFocus: string
  tags: string[]
  status: 'Active' | 'Archived'
  links: { label: string; href: string }[]
}

export interface Note {
  slug: string
  date: string
  type: 'research log' | 'note' | 'reading note'
  title: string
  summary: string
}

export interface TimelineItem {
  year: string
  label: string
  detail: string
  type: 'education' | 'work' | 'research'
}

export interface Content {
  personal: {
    name: string
    initials: string
    title: string
    location: string
    email: string
    github: string
    linkedin: string
    orcid: string | null
    twitter: string | null
    cv: string
  }
  hero: {
    eyebrow: string
    identity: string
    thesis: string
    support: string
  }
  currentResearch: {
    question: string
    evidence: string
    status: string
  } | null
  investigations: ResearchInvestigation[]
  publications: Publication[]
  projects: Project[]
  notes: Note[]
  about: {
    bio: string[]
    interests: string[]
    education: TimelineItem[]
  }
}

export const UAV_TITLE =
  'Vision-Based Autonomous UAV for Obstacle Detection, Avoidance, and Navigation'

export const TRANSIT_TITLE =
  'Real-Time GPS Telemetry and Neural Network ETA Prediction for Urban Transit'

export const PRODUCTION_MOBILE_TITLE =
  'Production Mobile Systems: Navigation, Location Tracking, and Client Hardening'

export const content: Content = {
  personal: {
    name: 'Hari Joshi',
    initials: 'HJ',
    title: 'Robotics & Systems Researcher · Mobile & Embedded Systems Engineer',
    location: 'Kathmandu, Nepal',
    email: 'harijoshi07x@gmail.com',
    github: 'https://github.com/harijoshi07',
    linkedin: 'https://linkedin.com/in/harijoshi07',
    orcid: null,
    twitter: 'https://x.com/sometimesIcode_',
    cv: 'https://drive.google.com/file/d/10iii42ZgEahdjW4edyy8cVo_5Ujwqsd4/view?usp=sharing',
  },

  hero: {
    eyebrow: 'Kathmandu, Nepal',
    identity:
      'Electronics engineer seeking a research-based MSc starting in 2027, on perception and navigation for small robots and mobile systems with limited compute and unreliable links.',
    thesis:
      'How can small robots and mobile devices perceive their surroundings and use live sensor data reliably when compute is limited and network links drop?',
    support:
      'Electronics engineer in Kathmandu working on onboard perception and live telemetry for small robots and mobile systems.',
  },

  currentResearch: {
    question:
      'How can lightweight vision and sensor processing keep a small robot or a mobile client reliable when compute is limited and the network link drops?',
    evidence:
      'An aerial vision stack replanning on a Raspberry Pi, a GPS and GSM transit tracker with a neural arrival-time model, and more than a year of production Android work.',
    status:
      'Undergraduate research completed at IOE Thapathali Campus; production mobile engineering in Kathmandu. Preparing applications to research-based Master\'s programs in robotics and mobile systems.',
  },

  investigations: [
    {
      id: 'autonomous-uav-investigation',
      title: UAV_TITLE,
      context: 'Final-Year Capstone Project · Tribhuvan University, IOE Thapathali Campus (2024–2025)',
      question:
        'How does a small quadrotor see an obstacle and change course when the only computer onboard is a Raspberry Pi?',
      methodology:
        'F330 quadrotor with a Pixhawk 4X, Raspberry Pi 4B, and Intel RealSense D435. YOLOv8 is quantized through ONNX and TFLite (FP16/INT8), run with OpenCV DNN, then replanned with an occupancy map and RRT* on the Pi. Commands go to the Pixhawk over UART. Flown in Gazebo, then in a college parking lot, a forest area, and open ground.',
      findings:
        'On a logged flight the auto segment was 0–1 m/s (average 0.36 m/s) at about 0.9–1.5 m altitude. Early flights were limited by GPS interference from the Pi and the battery; raising the GPS module reduced it. The log is not fast flight through dense clutter, and it is not flight without GPS.',
      systemsFocus:
        'Onboard depth processing, occupancy mapping and RRT* planning on a Raspberry Pi, with UART commands to a Pixhawk 4X.',
      tags: ['ROS', 'Computer Vision', 'Depth Sensing', 'UAV Autonomy', 'Embedded Linux', 'Python'],
      links: [
        { label: 'Report', href: 'https://drive.google.com/file/d/1XXjeIgFgG1DwsJRwUCZ7RjVk2_VBTKLe/view?usp=sharing' },
        { label: 'Demo', href: 'https://drive.google.com/file/d/1MTHDK0L21io8D2WmGxGLWsQl3sj8WFYp/view?usp=sharing' },
      ],
    },
    {
      id: 'public-transport-investigation',
      title: TRANSIT_TITLE,
      context: '6th-Semester Minor Project · Tribhuvan University, IOE Thapathali Campus (2024)',
      question:
        'How do you keep a bus position when the cellular link is intermittent, and how close can a small network get to the arrival time on a known Kathmandu corridor?',
      methodology:
        'Arduino Mega tracker (NEO-6M GPS, SIM900 GSM) that sends a fix every 30 seconds over GPRS, and a Django backend that accepts fixes over HTTP and serves routes, stops and fares to a Leaflet map. A feedforward network with hidden layers of 64 and 32 units estimates the minutes for each hop, trained on 2022–2023 corridor GPS records. The report\'s TensorFlow version used dropout 0.3; the deployed scikit-learn version does not.',
      findings:
        'The project report measured R² = 0.965 and MAPE 6.74% on a 20% test split of scaled targets. The model the app now serves, retrained in scikit-learn on five inputs, scores differently (see the write-up). A trip is drawn only when both ends share a stored corridor. A fix older than 30 seconds is marked stale.',
      systemsFocus:
        'Sparse GPS telemetry over GSM, a stored-corridor map, and arrival-time estimation with a small feedforward network.',
      tags: ['Arduino', 'GPS/GSM', 'Neural Network', 'Django', 'Leaflet', 'Python'],
      links: [
        { label: 'Repository', href: 'https://github.com/harijoshi07/public-transport-assistant-ann' },
        { label: 'Report', href: 'https://drive.google.com/file/d/1OQ9E2Be1z1Rs9MlQo7qIhcqWz8Cyc8Of/view?usp=sharing' },
        { label: 'Demo', href: 'https://drive.google.com/file/d/1QK_E9o4nTWwKg8LO8D3vSZ7M-Gffb--v/view?usp=sharing' },
      ],
    },
    {
      id: 'production-mobile-investigation',
      title: PRODUCTION_MOBILE_TITLE,
      context: 'Production Systems Engineering · Kathmandu Living Labs & Swift Technology (2025–Present)',
      question:
        'How do production mobile clients keep navigation and location tracking working when the network is intermittent and the device is constrained?',
      methodology:
        'At Kathmandu Living Labs, built navigation, search and the main map view of the Baato Maps Android app with the MapLibre SDK, including offline tile caching, and fixed threading and lifecycle problems in map views. At Swift Technology, built a cash-in tracking feature for Japan Money Express in Kotlin and Jetpack Compose using polling, coroutines and Flows, and added security hardening to a legacy Java/XML client.',
      findings:
        'Crash rate in key flows fell by 30% at Kathmandu Living Labs through coroutine isolation and thread-safe map lifecycle cleanup.',
      systemsFocus:
        'MapLibre SDK, Kotlin coroutines and Flow, offline tile persistence, client-side security hardening.',
      tags: ['Android SDK', 'Jetpack Compose', 'MapLibre SDK', 'Coroutines', 'Room DB', 'Security'],
      links: [
        { label: 'Portfolio', href: 'https://harijoshi07.github.io/portfolio/' },
      ],
    },
  ],

  publications: [
    // Example placeholder — replace with your own when you have publications
    // {
    //   id: 'example-paper',
    //   year: 2025,
    //   type: 'conference',
    //   venue: 'Conference Name',
    //   title: 'Your Paper Title',
    //   authors: 'Hari Joshi, Co-Author Name',
    //   abstract: 'One-sentence summary of the paper.',
    //   contribution: 'What this study specifically adds to the field.',
    //   status: 'Published at Conference 2025',
    //   links: [
    //     { label: 'Paper', href: 'https://doi.org/...' },
    //   ],
    // },
  ],

  projects: [
    // ── Academic & Robotics Projects ──
    {
      id: 'autonomous-uav',
      title: UAV_TITLE,
      category: 'aerial robotics',
      description:
        'Final-year major project at IOE, Thapathali Campus. Team lead of a 4-member team. Supervisor: Er. Umesh Kanta Ghimire. F330 quadrotor (Pixhawk 4X, Raspberry Pi 4B, Intel RealSense D435) that detects obstacles with YOLOv8, quantized through ONNX and TFLite and run with OpenCV DNN, then replans with an occupancy map and RRT* on the Pi. Logged auto flight was 0–1 m/s (average 0.36 m/s) at about 0.9–1.5 m altitude.',
      systemsFocus:
        'Onboard perception and local planning on a Raspberry Pi, occupancy mapping, RRT*, UART commands to a Pixhawk 4X.',
      summary:
        'A quadrotor that sees obstacles with a camera and a depth sensor, then replans a path on a Raspberry Pi.',
      tags: ['ROS', 'Computer Vision', 'YOLOv8', 'Depth Sensing', 'UAV Systems', 'Pixhawk 4X', 'Embedded Linux', 'Python', 'RRT*'],
      status: 'Archived',
      links: [
        { label: 'Report', href: 'https://drive.google.com/file/d/1XXjeIgFgG1DwsJRwUCZ7RjVk2_VBTKLe/view?usp=sharing' },
        { label: 'Demo', href: 'https://drive.google.com/file/d/1MTHDK0L21io8D2WmGxGLWsQl3sj8WFYp/view?usp=sharing' },
      ],
    },
    {
      id: 'public-transport-assistant',
      title: TRANSIT_TITLE,
      category: 'embedded iot',
      description:
        'Third-year minor project at IOE, Thapathali Campus. Team lead of a 4-member team. Supervisor: Er. Kiran Chandra Dahal. Arduino Mega tracker (NEO-6M GPS, SIM900 GSM) sending a fix every 30 seconds over GPRS, and a Django backend serving routes, stops and fares to a Leaflet map. The project report measured R² = 0.965 and MAPE 6.74% on a 20% test split of scaled targets.',
      systemsFocus:
        'Sparse GPS telemetry over GSM, a stored-corridor map, and arrival-time estimation with a small feedforward network.',
      summary:
        'A GPS and GSM tracker, a live map, and a neural net that estimates bus arrival on Kathmandu corridors.',
      tags: ['Arduino', 'GPS (NEO-6M)', 'SIM900 GSM', 'Django', 'Leaflet', 'Neural Network', 'Python'],
      status: 'Archived',
      links: [
        { label: 'Repository', href: 'https://github.com/harijoshi07/public-transport-assistant-ann' },
        { label: 'Report', href: 'https://drive.google.com/file/d/1OQ9E2Be1z1Rs9MlQo7qIhcqWz8Cyc8Of/view?usp=sharing' },
        { label: 'Demo', href: 'https://drive.google.com/file/d/1QK_E9o4nTWwKg8LO8D3vSZ7M-Gffb--v/view?usp=sharing' },
      ],
    },

    // ── Industry & Systems Projects ──
    {
      id: 'production-mobile-systems',
      title: PRODUCTION_MOBILE_TITLE,
      category: 'mobile systems',
      description:
        'More than a year of production Android engineering at Kathmandu Living Labs and Swift Technology: Baato Maps navigation and location tracking, and a cash-in tracking feature for a remittance app, with client-side security hardening.',
      systemsFocus:
        'MapLibre SDK integration, Kotlin coroutines and Flow, offline tile caching, client-side security hardening.',
      summary:
        'Navigation, location tracking and hardened client state across more than a year of production mobile engineering in Nepal.',
      tags: ['Android SDK', 'Jetpack Compose', 'MapLibre SDK', 'Kotlin Coroutines', 'Flow', 'Room DB', 'Security'],
      status: 'Active',
      links: [
        { label: 'Portfolio', href: 'https://harijoshi07.github.io/portfolio/' },
      ],
    },
    {
      id: 'baato-maps',
      title: 'Baato Maps — Location Services',
      category: 'spatial systems',
      description:
        'Production mapping application with real-time navigation, GPS tracking, and offline map tile caching. Built at Kathmandu Living Labs serving users across Nepal.',
      systemsFocus:
        'MapLibre SDK integration, real-time navigation overlays, threading and lifecycle management for map views, GPS polling architecture, offline tile persistence.',
      tags: ['Kotlin', 'MapLibre SDK', 'Coroutines', 'Jetpack Compose', 'Room DB'],
      status: 'Active',
      links: [],
    },
    {
      id: 'driving-license-app',
      title: 'Driving License Exam Nepal',
      category: 'mobile systems',
      description:
        'Offline-first Android app for Nepal\'s driving license exam, with study mode and exam mode for bike, scooter and car questions. Published on Google Play.',
      systemsFocus:
        'Offline question bank, Room persistence, Jetpack Compose UI, coroutine-backed async work.',
      tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Material 3', 'Offline First'],
      status: 'Active',
      links: [
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.hari.drivinglicenseexamnepal_' },
        { label: 'Repository', href: 'https://github.com/harijoshi07/Driving-License-Exam-App' },
      ],
    },
    {
      id: 'ipo-share',
      title: 'IPO Share',
      category: 'mobile systems',
      description:
        'Mobile IPO tracking application with dashboard, issue discovery, allotment result checking, and portfolio management.',
      systemsFocus:
        'REST API integration, local caching with SQLite, reactive UI state management with MVVM, network error handling.',
      tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'SQLite', 'Retrofit'],
      status: 'Active',
      links: [
        { label: 'Portfolio', href: 'https://harijoshi07.github.io/portfolio/' },
      ],
    },
  ],

  notes: [
    // Example placeholder — add technical writeups, reading notes, experiment logs
    // {
    //   slug: 'maplibre-threading-analysis',
    //   date: '2025-06-15',
    //   type: 'research log',
    //   title: 'Threading Leaks in MapLibre Map Views on Android',
    //   summary:
    //     'Analysis of how map view lifecycle mismanagement causes frame drops during sustained navigation sessions, and a coroutine-scope restructuring that resolved it.',
    // },
  ],

  about: {
    bio: [
      'I live in Kathmandu. In 2025 I finished a bachelor\'s in Electronics, Communication and Information Engineering at the Institute of Engineering, Thapathali Campus, Tribhuvan University.',
      'I am applying to research-based master\'s programs in robotics and mobile systems, on perception and navigation for machines that cannot assume a large computer or a reliable link.',
    ],
    interests: [
      'Perception and local planning for small aerial robots, when the onboard computer is limited',
      'Arrival estimation from sparse GPS, and reliable location tracking on mobile clients, when the network link drops',
    ],
    education: [
      {
        year: '2026–Present',
        label: 'Swift Technology',
        detail: 'Mobile Engineer. Japan Money Express ATM cash-in in Compose, client-side security hardening, and multi-module Flutter remittance architecture.',
        type: 'work',
      },
      {
        year: '2025–2026',
        label: 'Kathmandu Living Labs',
        detail: 'Mobile Engineer. Baato Maps: navigation, search, and map rendering. Crash rate down 30% in key flows.',
        type: 'work',
      },
      {
        year: '2024–2025',
        label: UAV_TITLE,
        detail: 'Final-year capstone at IOE Thapathali Campus. Onboard obstacle detection and RRT* on a Raspberry Pi. Logged flight 0–1 m/s, average 0.36 m/s.',
        type: 'research',
      },
      {
        year: '2024',
        label: TRANSIT_TITLE,
        detail: 'Third-year project at IOE Thapathali Campus. GPS and GSM tracker, live map, and a report result of R² 0.965 and MAPE 6.74% on a 20% test split.',
        type: 'research',
      },
      {
        year: '2024',
        label: "Uncle Sam's Technologies",
        detail: 'Android Developer Intern — Stripe SDK payment pipelines, Ktor networking, coroutine-based async state management.',
        type: 'work',
      },
      {
        year: '2021–2025',
        label: 'Institute of Engineering (IOE), Thapathali Campus',
        detail: 'Bachelor of Electronics, Communication and Information Engineering. 63.99% (First Division).',
        type: 'education',
      },
    ],
  },
}
