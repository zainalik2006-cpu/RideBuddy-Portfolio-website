import type { Metadata } from "next";
import {
  Play,
  Image as ImageIcon,
  Download,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Demo",
  description: "Demos, screenshots, and sample data from the RideBuddy telemetry system.",
};

const videos = [
  {
    title: "First Ride Test — Full Dashboard Replay",
    description: "Real-time replay of IMU + GPS data from a 12-minute city ride with event markers.",
    placeholder: true,
  },
  {
    title: "Crash Detection Demo — Controlled Drop Test",
    description: "Simulated crash scenario showing the impact detection and stillness heuristic in action.",
    placeholder: true,
  },
];

const screenshots = [
  { title: "Dashboard — Ride Overview", description: "Route map with lean angle and speed overlays." },
  { title: "IMU Time Series", description: "Accelerometer XYZ channels over a 30-second segment." },
  { title: "Event Timeline", description: "Detected hard braking and lean events during a ride." },
  { title: "Sensor Fusion Output", description: "Pitch and roll angles from complementary filter." },
  { title: "GPS Track", description: "GPS path plotted on map with speed gradient." },
  { title: "Crash Detection", description: "Impact spike followed by stillness detection window." },
];

const downloads = [
  { name: "sample-ride-imu.csv", size: "2.4 MB", description: "IMU data from a 15-minute ride (100Hz)" },
  { name: "sample-ride-gps.csv", size: "340 KB", description: "GPS log from the same ride (10Hz)" },
  { name: "sample-events.json", size: "8 KB", description: "Detected events with timestamps and metadata" },
];

const setupSteps = [
  "Flash Raspberry Pi OS Lite to microSD, boot and SSH in.",
  "Connect ICM-20948 via I2C (SDA → GPIO2, SCL → GPIO3) and GPS via UART.",
  "Clone the RideBuddy repo and install dependencies: pip install -r requirements.txt",
  "Enable I2C and serial in raspi-config, then reboot.",
  "Run the acquisition script: python ridebuddy/acquire.py --config ride.yaml",
  "Mount the Pi to your bike, power from 12V via buck converter, and ride.",
  "After the ride, pull CSV files and run: python ridebuddy/analyze.py --ride <ride-id>",
];

export default function DemoPage() {
  return (
    <div className="page-container">
      <SectionHeader
        title="Demo & Gallery"
        description="Videos, screenshots, and sample data from development and test rides."
      />

      {/* Video Section */}
      <section className="mb-12">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Play className="h-5 w-5 text-primary-500" />
          Videos
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {videos.map((video) => (
            <Card key={video.title} hover>
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-surface-100 dark:bg-surface-800">
                <div className="text-center">
                  <Play className="mx-auto mb-2 h-10 w-10 text-surface-300 dark:text-surface-600" />
                  <p className="text-xs text-surface-400">Video placeholder</p>
                </div>
              </div>
              <h4 className="mb-1 font-semibold text-surface-900 dark:text-white">{video.title}</h4>
              <p className="text-sm text-surface-500 dark:text-surface-400">{video.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="mb-12">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <ImageIcon className="h-5 w-5 text-primary-500" />
          Screenshots
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((shot) => (
            <Card key={shot.title} hover>
              <div className="mb-3 flex aspect-[4/3] items-center justify-center rounded-lg bg-surface-100 dark:bg-surface-800">
                <ImageIcon className="h-8 w-8 text-surface-300 dark:text-surface-600" />
              </div>
              <h4 className="mb-1 text-sm font-semibold text-surface-900 dark:text-white">{shot.title}</h4>
              <p className="text-xs text-surface-500 dark:text-surface-400">{shot.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="mb-12">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Download className="h-5 w-5 text-primary-500" />
          Sample Data
        </h3>
        <div className="space-y-3">
          {downloads.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between rounded-lg border border-surface-200 bg-white p-4 transition-colors hover:border-primary-300 dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-700"
            >
              <div>
                <p className="font-mono text-sm font-medium text-surface-900 dark:text-white">
                  {file.name}
                </p>
                <p className="text-xs text-surface-500 dark:text-surface-400">{file.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-surface-400">{file.size}</span>
                <button className="rounded-lg bg-surface-100 p-2 text-surface-500 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:bg-surface-800 dark:hover:bg-primary-950 dark:hover:text-primary-400">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-surface-400">
          Placeholder links — replace with actual sample data files.
        </p>
      </section>

      {/* Reproduce a Test Ride */}
      <section>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Terminal className="h-5 w-5 text-primary-500" />
          How to Reproduce a Test Ride
        </h3>
        <Card>
          <ol className="space-y-3">
            {setupSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  {i + 1}
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-300">{step}</p>
              </li>
            ))}
          </ol>
        </Card>
      </section>
    </div>
  );
}
