import type { Metadata } from "next";
import {
  Cpu,
  HardDrive,
  Wifi,
  BarChart3,
  ShieldAlert,
  Database,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Architecture",
  description: "System architecture of the RideBuddy motorcycle telemetry platform.",
};

const breakdownCards = [
  {
    icon: Cpu,
    title: "Hardware",
    description:
      "Raspberry Pi 4 as the central compute node, ICM-20948 9-axis IMU (accel + gyro + mag) via I2C, u-blox NEO-M8N GPS module via UART, powered from motorcycle 12V with buck converter to 5V.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: HardDrive,
    title: "Firmware / Software",
    description:
      "Python-based data acquisition layer using smbus2 for IMU and pyserial for GPS. Runs as a systemd service on Raspberry Pi OS. Configurable sample rates (100Hz IMU, 10Hz GPS).",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: Wifi,
    title: "Data Pipeline",
    description:
      "Sensor readings are timestamped, buffered in-memory, and flushed to CSV logs on local storage. Pipeline supports real-time streaming via ZMQ for live dashboards during test rides.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: ShieldAlert,
    title: "Event Detection",
    description:
      "Sliding-window feature extraction on fused orientation data. Heuristic classifiers for hard braking (>0.8g decel), aggressive lean (>45°), and crash events (impact + stillness pattern).",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950/30",
  },
  {
    icon: Database,
    title: "Storage",
    description:
      "Per-ride CSV files with structured naming. Metadata index in JSON. Designed for easy migration to SQLite or PostgreSQL when multi-ride analytics features are added.",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: BarChart3,
    title: "Visualization",
    description:
      "Post-ride dashboard built with Plotly/Dash. Displays route on map, time-series of sensor channels, event markers, and summary statistics per ride segment.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
  },
];

const dataFlowSteps = [
  { label: "Sensors", sub: "IMU + GPS" },
  { label: "Acquisition", sub: "100Hz / 10Hz" },
  { label: "Filter & Fusion", sub: "Complementary Filter" },
  { label: "Feature Extraction", sub: "Sliding Window" },
  { label: "Classification", sub: "Event Detection" },
  { label: "Log", sub: "CSV + Metadata" },
  { label: "Dashboard", sub: "Post-Ride Analysis" },
];

export default function ArchitecturePage() {
  return (
    <div className="page-container">
      <SectionHeader
        title="System Architecture"
        description="How RideBuddy captures, processes, and analyzes motorcycle telemetry data."
      />

      {/* System Diagram Placeholder */}
      <div className="mb-12 overflow-hidden rounded-xl border border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-900">
        <div className="border-b border-surface-200 px-4 py-2 dark:border-surface-800">
          <span className="font-mono text-xs text-surface-400">system-overview.svg</span>
        </div>
        <div className="flex items-center justify-center p-8 sm:p-12">
          <svg
            viewBox="0 0 800 300"
            className="w-full max-w-3xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sensors */}
            <rect x="10" y="100" width="100" height="80" rx="8" className="fill-blue-100 stroke-blue-400 dark:fill-blue-900/40 dark:stroke-blue-600" strokeWidth="2" />
            <text x="60" y="135" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300" fontSize="12" fontWeight="600">IMU</text>
            <text x="60" y="155" textAnchor="middle" className="fill-blue-500 dark:fill-blue-400" fontSize="10">ICM-20948</text>

            <rect x="10" y="200" width="100" height="80" rx="8" className="fill-blue-100 stroke-blue-400 dark:fill-blue-900/40 dark:stroke-blue-600" strokeWidth="2" />
            <text x="60" y="235" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300" fontSize="12" fontWeight="600">GPS</text>
            <text x="60" y="255" textAnchor="middle" className="fill-blue-500 dark:fill-blue-400" fontSize="10">NEO-M8N</text>

            {/* Arrows */}
            <line x1="110" y1="140" x2="160" y2="180" className="stroke-surface-400" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="110" y1="240" x2="160" y2="200" className="stroke-surface-400" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Raspberry Pi */}
            <rect x="160" y="140" width="130" height="100" rx="8" className="fill-purple-100 stroke-purple-400 dark:fill-purple-900/40 dark:stroke-purple-600" strokeWidth="2" />
            <text x="225" y="175" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300" fontSize="12" fontWeight="600">Raspberry Pi</text>
            <text x="225" y="195" textAnchor="middle" className="fill-purple-500 dark:fill-purple-400" fontSize="10">Data Acquisition</text>
            <text x="225" y="215" textAnchor="middle" className="fill-purple-500 dark:fill-purple-400" fontSize="10">Python Pipeline</text>

            {/* Arrow */}
            <line x1="290" y1="190" x2="340" y2="190" className="stroke-surface-400" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Fusion */}
            <rect x="340" y="150" width="120" height="80" rx="8" className="fill-amber-100 stroke-amber-400 dark:fill-amber-900/40 dark:stroke-amber-600" strokeWidth="2" />
            <text x="400" y="180" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300" fontSize="12" fontWeight="600">Sensor Fusion</text>
            <text x="400" y="200" textAnchor="middle" className="fill-amber-500 dark:fill-amber-400" fontSize="10">Comp. Filter</text>

            {/* Arrow */}
            <line x1="460" y1="190" x2="510" y2="190" className="stroke-surface-400" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Event Detection */}
            <rect x="510" y="150" width="120" height="80" rx="8" className="fill-red-100 stroke-red-400 dark:fill-red-900/40 dark:stroke-red-600" strokeWidth="2" />
            <text x="570" y="180" textAnchor="middle" className="fill-red-700 dark:fill-red-300" fontSize="12" fontWeight="600">Detection</text>
            <text x="570" y="200" textAnchor="middle" className="fill-red-500 dark:fill-red-400" fontSize="10">Events + Crash</text>

            {/* Arrow */}
            <line x1="630" y1="190" x2="680" y2="190" className="stroke-surface-400" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Dashboard */}
            <rect x="680" y="150" width="110" height="80" rx="8" className="fill-green-100 stroke-green-400 dark:fill-green-900/40 dark:stroke-green-600" strokeWidth="2" />
            <text x="735" y="180" textAnchor="middle" className="fill-green-700 dark:fill-green-300" fontSize="12" fontWeight="600">Dashboard</text>
            <text x="735" y="200" textAnchor="middle" className="fill-green-500 dark:fill-green-400" fontSize="10">Analytics</text>

            {/* Storage branch */}
            <line x1="570" y1="230" x2="570" y2="270" className="stroke-surface-400" strokeWidth="2" markerEnd="url(#arrow)" />
            <rect x="510" y="270" width="120" height="50" rx="8" className="fill-surface-100 stroke-surface-400 dark:fill-surface-800 dark:stroke-surface-600" strokeWidth="2" />
            <text x="570" y="300" textAnchor="middle" className="fill-surface-600 dark:fill-surface-300" fontSize="12" fontWeight="600">Storage (CSV)</text>

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" className="fill-surface-400" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      {/* Breakdown Cards */}
      <SectionHeader
        title="Component Breakdown"
        description="Each subsystem and its role in the telemetry pipeline."
      />
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {breakdownCards.map((card) => (
          <Card key={card.title} hover>
            <div className={`mb-3 inline-flex rounded-lg p-2.5 ${card.bg}`}>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </div>
            <h3 className="mb-2 font-semibold text-surface-900 dark:text-white">{card.title}</h3>
            <p className="text-sm leading-relaxed text-surface-500 dark:text-surface-400">
              {card.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Data Flow */}
      <SectionHeader
        title="Data Flow"
        description="The pipeline from raw sensor input to actionable ride analytics."
      />
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-surface-200 bg-surface-50 p-6 dark:border-surface-800 dark:bg-surface-900 sm:p-8">
        {dataFlowSteps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="rounded-lg border border-surface-200 bg-white px-4 py-3 text-center dark:border-surface-700 dark:bg-surface-800">
              <p className="text-sm font-semibold text-surface-900 dark:text-white">{step.label}</p>
              <p className="text-xs text-surface-400">{step.sub}</p>
            </div>
            {i < dataFlowSteps.length - 1 && (
              <ArrowRight className="hidden h-4 w-4 text-surface-300 dark:text-surface-600 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
