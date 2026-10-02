import { content, UAV_TITLE } from '@/content'
import { pageMetadata } from '@/seo'
import Link from 'next/link'

export const metadata = pageMetadata(
  `${UAV_TITLE} — ${content.personal.name}`,
  'A quadrotor that detects obstacles with YOLOv8 and a depth camera, then replans on a Raspberry Pi.',
  '/software/uav',
)

const report = 'https://drive.google.com/file/d/1XXjeIgFgG1DwsJRwUCZ7RjVk2_VBTKLe/view?usp=sharing'
const demo = 'https://drive.google.com/file/d/1MTHDK0L21io8D2WmGxGLWsQl3sj8WFYp/view?usp=sharing'

export default function UavCaseStudy() {
  return (
    <>
      <header className="page-hero">
        <div className="site-shell">
          <p className="eyebrow">Major project · March 2025</p>
          <h1 className="page-title page-title-long">{UAV_TITLE}</h1>
          <p className="page-deck">
            How does a small quadrotor see an obstacle and change course when the only computer onboard is a Raspberry Pi?
          </p>
          <div className="link-row">
            <Link className="text-link" href="/software">Software</Link>
            <a className="text-link" href={report} target="_blank" rel="noopener noreferrer">Report</a>
            <a className="text-link" href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">Context</h2>
          <div className="content-flow">
            <p className="record-copy">
              Final-year major project, Department of Electronics and Computer Engineering, Institute of Engineering, Thapathali Campus. Submitted March 2025. Supervisor Er. Umesh Kanta Ghimire.
            </p>
            <p className="record-copy">
              Team of four: Bishal Bhandari, Hari Joshi, Jyotsna Jha, and Kalyan Kumar Shrestha. I led it and did most of the build.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">System</h2>
          <div className="content-flow">
            <p className="record-copy">
              The aircraft is an F330 frame in quad-X, with a Pixhawk 4X and a Raspberry Pi 4B. An Intel RealSense D435 supplies the color and depth image. The Pi talks to the flight controller over UART.
            </p>
            <p className="record-copy">
              YOLOv8 marks obstacles. The Pi cannot run the training-time model as it is, so I exported it to ONNX, quantized it to TensorFlow Lite (FP16 or INT8), and ran it with OpenCV DNN. Depth from the RealSense fills an occupancy map. RRT* searches a path around what that map contains. I first flew this loop in ROS, Gazebo, and RViz, including an offboard simulation that climbed to 2.5 m under keyboard velocity commands. Then I moved the same stack onto the airframe.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">What was measured</h2>
          <div className="content-flow">
            <p className="record-copy">
              The report does not publish a single detection score. It says the quantized detector reached a satisfactory mAP, and that this model was what flew on the Pi.
            </p>
            <p className="record-copy">
              A Pixhawk log from the field tests shows the auto segment between 0 and 1 m/s, averaging 0.36 m/s. Altitude on that log sits between about 0.9 and 1.5 m. The log&apos;s satellite field reads 29 to 32. The conclusion records flights in the college parking lot, a forest area, and open ground.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid">
          <h2 className="section-label">What it does not show</h2>
          <div className="content-flow">
            <p className="record-copy">
              The first physical tests were not limited by the detector. GPS interference from the Raspberry Pi and the battery produced glitches, EKF and AHRS errors, and sudden falls. Raising the GPS module off the other electronics reduced that, which means the perception stack was not the whole stability problem.
            </p>
            <p className="record-copy">
              The logged flight is low and slow. It is not evidence for fast flight through dense clutter, and it is not flight without GPS. The log&apos;s satellite field is high, so this was not a weak-GPS test.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
