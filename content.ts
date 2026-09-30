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
  }
  hero: {
    eyebrow: string
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

export const content: Content = {
  personal: {
    name: 'Hari Krishna Joshi',
    initials: 'HKJ',
    title: 'Robotics & Systems Researcher · Mobile & Embedded Systems Engineer',
    location: 'Kathmandu, Nepal',
    email: 'harijoshi07x@gmail.com',
    github: 'https://github.com/harijoshi07',
    linkedin: 'https://linkedin.com/in/harijoshi07',
    orcid: null,
    twitter: 'https://x.com/sometimesIcode_',
  },

  hero: {
    eyebrow: 'Autonomous Robotics · Mobile Systems · Embedded Perception',
    thesis:
      'How can autonomous agents and mobile platforms perform reliable perception, localization, and navigation under severe hardware and computational constraints?',
    support:
      'My work spans vision-based aerial robotics (ROS, depth perception, real-time obstacle avoidance in cluttered environments), embedded sensor telemetry (GPS/GSM, microcontrollers), and high-reliability mobile systems (real-time mapping workflows, offline architectures).',
  },

  currentResearch: {
    question:
      'How can lightweight vision and sensor fusion models provide real-time spatial awareness and dynamic obstacle avoidance on compute-constrained embedded platforms?',
    evidence:
      'In our final-year capstone at IOE Thapathali Campus, we designed an autonomous UAV system utilizing onboard camera and depth sensing integrated within a ROS framework for real-time obstacle detection, avoidance, and local path planning in cluttered spaces. Combined with our 6th-sem hardware telemetry pipelines and production MapLibre geospatial mapping at Kathmandu Living Labs, this demonstrated how edge-compute constraints directly dictate perception-to-actuation latency.',
    status:
      'Undergraduate research and engineering completed at Tribhuvan University, IOE Thapathali Campus. Preparing research proposals for Master\'s programs in Computer Science and Robotics.',
  },

  investigations: [
    {
      id: 'autonomous-uav-investigation',
      title: 'Vision-Based Autonomous UAV Navigation in Cluttered Environments',
      context: 'Final-Year Capstone Project · Tribhuvan University, IOE Thapathali Campus (2024–2025)',
      question:
        'How can onboard perception and lightweight depth estimation reliably generate real-time collision-free trajectories in cluttered, GPS-denied environments without prohibitive compute hardware?',
      methodology:
        'Implemented a ROS-based modular architecture linking camera and depth perception to an onboard companion computer running embedded Linux. Structured node communications to handle sensor streams, spatial obstacle mapping, and local trajectory generation for indoor and low-altitude flight stabilization.',
      findings:
        'Real-time obstacle avoidance on constrained flight hardware requires aggressive optimization of perception-to-actuation latency. Tradeoffs between sensor resolution and frame rate directly govern the maximum safe traversal velocity in cluttered environments.',
      systemsFocus:
        'Real-time depth processing, ROS node communication topology, compute-constrained local path planning, aerial flight stabilization.',
      tags: ['ROS', 'Computer Vision', 'Depth Sensing', 'UAV Autonomy', 'Embedded Linux', 'C++', 'Python'],
      links: [
        { label: 'Collaborator Portfolio', href: 'https://www.kalyankumarshrestha.com.np/' },
      ],
    },
    {
      id: 'public-transport-investigation',
      title: 'Real-Time GPS Telemetry and Neural Network ETA Prediction for Urban Transit',
      context: '6th-Semester Minor Project · Tribhuvan University, IOE Thapathali Campus (2024)',
      question:
        'How can low-cost edge microcontrollers maintain reliable telemetry under intermittent cellular connectivity, and can deep neural networks accurately predict arrival times from sparse historical GPS traces?',
      methodology:
        'Built an integrated hardware-software pipeline: Arduino Mega + GPS module + SIM800L GSM transmitting time-series spatial coordinates to ThingSpeak, ingested into a Django backend via WebSockets. Trained a Deep Neural Network (DNN) on historical corridor transit logs, integrated with Graphhopper routing for dynamic road network distance estimation.',
      findings:
        'Network latency fluctuations and packet loss in cellular edge environments require client-side fallback buffering; combining physical road network topology (Graphhopper) with DNN residual learning significantly outperformed static velocity-distance heuristics for arrival estimation.',
      systemsFocus:
        'Edge hardware sensor acquisition, asynchronous WebSocket ingestion, DNN time-series prediction, spatial database indexing with PostgreSQL.',
      tags: ['Arduino', 'GPS/GSM', 'Deep Learning', 'Django', 'WebSockets', 'PostgreSQL', 'Graphhopper'],
      links: [
        { label: 'Repository', href: 'https://github.com/harijoshi07/public-transport-assistant-ann' },
      ],
    },
    {
      id: 'maplibre-concurrency-investigation',
      title: 'Concurrency Control and Thread Isolation in High-Frequency Spatial Mapping Engines',
      context: 'Production Engineering · Kathmandu Living Labs (Baato Maps, 2025)',
      question:
        'How can high-frequency GPS stream ingestion and continuous vector map rendering operate simultaneously on resource-constrained mobile hardware without causing UI thread contention and memory leaks?',
      methodology:
        'Profiled rendering pipelines and lifecycle subscriptions in MapLibre Android SDK. Decoupled high-frequency GPS sensor polling and real-time route snapping into dedicated background coroutine scopes, isolating heavy vector calculations from the main UI thread. Implemented memory-bounded offline tile caching.',
      findings:
        'Map view lifecycle leaks were primarily caused by lingering asynchronous subscriptions during orientation shifts and rapid navigation state changes. Structuring strict scope cancellation and state hoisting improved navigation session stability to 99.9% crash-free.',
      systemsFocus:
        'Mobile concurrency, coroutine scope management, memory-bounded spatial caching, lifecycle-bound streaming.',
      tags: ['Kotlin', 'MapLibre SDK', 'Coroutines', 'Jetpack Compose', 'Android Architecture', 'Room DB'],
      links: [
        { label: 'Company', href: 'https://www.kathmandulivinglabs.org/' },
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
      title: 'Vision-Based Autonomous UAV for Obstacle Detection, Avoidance, and Navigation',
      category: 'aerial robotics',
      description:
        'Final-year major capstone project at IOE, Thapathali Campus (Team Lead, team of 4; Supervisor: Er. Umesh Kanta Ghimire). Built a physical F330 quadrotor with Pixhawk 4X and Raspberry Pi 4B that detects obstacles using YOLOv8 and Intel RealSense D435 RGB-D depth sensing to navigate safely in cluttered environments. Implemented 3D occupancy voxel mapping and an RRT* trajectory planner in ROS on the companion computer, streaming velocity commands over UART at 10 Hz. Optimized YOLOv8 through ONNX export and TFLite quantization (FP16/INT8) deployed via OpenCV DNN. Validated in Gazebo/PX4 simulation and field flight tests at 1.3 m altitude and 0.4 m/s default speed, achieving real-time depth-thresholded obstacle detection within 2 m and autonomous waypoint avoidance replanning.',
      systemsFocus:
        'Vision-based onboard perception, depth sensor processing (Intel RealSense D435), real-time dynamic obstacle avoidance, ROS node communication pipeline, local trajectory planning under constrained embedded compute (Raspberry Pi 4B), Pixhawk 4X UART offboard control, flight stability in cluttered environments.',
      tags: ['ROS', 'Computer Vision', 'YOLOv8', 'Depth Sensing', 'UAV Systems', 'Pixhawk 4X', 'Embedded Linux', 'C++', 'Python', 'RRT*'],
      status: 'Archived',
      links: [
        { label: 'Collaborator Portfolio', href: 'https://www.kalyankumarshrestha.com.np/' },
      ],
    },
    {
      id: 'public-transport-assistant',
      title: 'Public Transportation Assistance using Artificial Neural Network',
      category: 'embedded iot',
      description:
        'Third-year academic minor project at IOE, Thapathali Campus (Team Lead, team of 4; Supervisor: Er. Kiran Chandra Dahal). Built an IoT vehicle tracking hardware unit combining Arduino Mega, NEO-6M GPS, and SIM900 GSM module that streams position coordinates to ThingSpeak every 30 seconds. Ingested data into a Django REST Framework backend with Django Channels (WebSockets) streaming live positions, routes, and fares to a Leaflet/OpenStreetMap interface. Trained a feedforward neural network (64 and 32 units, dropout 0.3) on historical bus GPS corridor records, achieving R² = 0.965 on a held-out 20% test set.',
      systemsFocus:
        'Hardware–software telemetry integration (Arduino Mega + GPS/GSM → ThingSpeak → Django Channels), real-time WebSocket position streaming, DNN-based arrival time prediction, geospatial routing with Graphhopper and Leaflet/OSM, PostgreSQL persistence.',
      tags: ['Arduino', 'GPS (NEO-6M)', 'SIM900 GSM', 'Django', 'WebSockets', 'Deep Learning', 'PostgreSQL', 'Graphhopper', 'Python'],
      status: 'Archived',
      links: [
        { label: 'Repository', href: 'https://github.com/harijoshi07/public-transport-assistant-ann' },
      ],
    },

    // ── Industry & Systems Projects ──
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
      links: [
        { label: 'Company', href: 'https://www.kathmandulivinglabs.org/' },
      ],
    },
    {
      id: 'driving-license-app',
      title: 'Driving License Exam Nepal',
      category: 'mobile systems',
      description:
        'Offline-first Android application for driving license exam preparation, built with Room DB local persistence and Material 3 interface.',
      systemsFocus:
        'Offline-first data architecture, local database schema design, background sync, coroutine-backed async operations.',
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
        { label: 'Repository', href: 'https://github.com/harijoshi07' },
      ],
    },
    {
      id: 'quizzle',
      title: 'Quizzle',
      category: 'mobile systems',
      description:
        'Quiz application with offline progress tracking, API-based question fetching, and local Room persistence.',
      systemsFocus:
        'Dependency injection with Koin, coroutine-backed networking, offline-first caching strategy, database migration handling.',
      tags: ['Kotlin', 'Room DB', 'Retrofit', 'Koin DI', 'Coroutines'],
      status: 'Active',
      links: [
        { label: 'Repository', href: 'https://github.com/harijoshi07/Quizzle' },
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
      'I am an engineer from Kathmandu, Nepal, working at the convergence of autonomous robotics, embedded perception, and real-time mobile systems. I hold a Bachelor of Engineering in Electronics, Communication & Information Technology from Tribhuvan University, IOE Thapathali Campus.',
      'During my undergraduate studies, I focused on autonomous systems and spatial computing: for our capstone, our team developed a vision-based autonomous UAV capable of real-time obstacle detection, depth perception, and dynamic trajectory planning in cluttered environments using ROS and onboard sensing. Previously, for our 6th-semester minor project, we engineered an end-to-end GPS/GSM tracking and deep neural network ETA prediction pipeline on custom Arduino hardware.',
      'Professionally, as a Mobile Engineer at Kathmandu Living Labs, I engineer location services and navigation systems for Baato Maps using MapLibre SDK, focusing on real-time routing overlays, lifecycle concurrency, and offline tile caching. I am pursuing graduate study (Master\'s in Computer Science / Robotics) to investigate real-time perception, state estimation, and path planning for autonomous mobile platforms under severe computational and sensing constraints.',
    ],
    interests: [
      'Autonomous aerial robotics (UAVs)',
      'Vision-based perception & depth sensing',
      'Real-time obstacle avoidance & path planning',
      'Robot Operating System (ROS)',
      'Embedded systems & edge computing',
      'Location-aware systems & GPS telemetry',
      'Offline-first architectures & concurrency',
    ],
    education: [
      {
        year: '2026–Present',
        label: 'Swift Technology',
        detail: 'Mobile Engineer — Real-time ATM cash-in workflows (Jetpack Compose & Flows), client-side security hardening, and multi-module Flutter remittance architectures.',
        type: 'work',
      },
      {
        year: '2025–2026',
        label: 'Kathmandu Living Labs',
        detail: 'Mobile Engineer — Location services, real-time navigation workflows, MapLibre SDK, offline tile caching.',
        type: 'work',
      },
      {
        year: '2024–2025',
        label: 'Vision-Based Autonomous UAV — Major Project',
        detail: 'Final-year capstone at IOE Thapathali Campus. Onboard camera and depth sensing, ROS framework, real-time obstacle avoidance, and dynamic navigation in cluttered spaces.',
        type: 'research',
      },
      {
        year: '2024',
        label: 'Public Transport Assistant — Minor Project',
        detail: '6th-semester project at IOE Thapathali Campus. Arduino Mega, GPS/GSM hardware, DNN-based ETA modeling, and WebSocket-driven Django live mapping.',
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
        detail: 'Bachelor of Electronics, Communication and Information Engineering (63.99%).',
        type: 'education',
      },
    ],
  },
}
