import type { Metadata } from "next";
import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Cpu,
  BarChart3,
  Radio,
  Gauge,
  Binary,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About the developer behind RideBuddy.",
};

const skills = [
  { icon: Code2, label: "Python", detail: "Data pipelines, signal processing, scripting" },
  { icon: Cpu, label: "Raspberry Pi", detail: "I2C, UART, GPIO, systemd services" },
  { icon: Radio, label: "IMU / GPS", detail: "ICM-20948, u-blox NEO-M8N, NMEA parsing" },
  { icon: BarChart3, label: "Sensor Fusion", detail: "Complementary & Kalman filtering" },
  { icon: Gauge, label: "Signal Processing", detail: "Low-pass filters, windowed features, FFT" },
  { icon: Binary, label: "Data Logging", detail: "High-frequency CSV, timestamping, buffering" },
];

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title="About" />

        {/* Bio */}
        <Card className="mb-8">
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Avatar placeholder */}
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-3xl font-bold text-white">
              ZK
            </div>
            <div>
              <h2 className="mb-1 text-xl font-bold text-surface-900 dark:text-white">
                Zain Khan
              </h2>
              <p className="mb-3 text-sm text-primary-600 dark:text-primary-400">
                CS Student · Embedded Systems & Data
              </p>
              <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                I&apos;m a computer science student with a focus on embedded systems, sensor data
                pipelines, and applied signal processing. RideBuddy started as a way to combine my
                interest in motorcycles with real-world engineering — building a system that captures
                ride data, detects events like hard braking and crashes, and surfaces insights through
                post-ride analytics.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                I enjoy working at the intersection of hardware and software — taking raw sensor data
                and turning it into something useful. This project has touched everything from I2C
                communication and real-time data acquisition to filtering algorithms and dashboard
                visualization.
              </p>
            </div>
          </div>
        </Card>

        {/* Skills */}
        <h3 className="mb-4 text-lg font-semibold text-surface-900 dark:text-white">
          Skills & Technologies
        </h3>
        <div className="mb-8 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-start gap-3 rounded-lg border border-surface-200 bg-white p-4 dark:border-surface-800 dark:bg-surface-900"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                <skill.icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-surface-900 dark:text-white">{skill.label}</p>
                <p className="text-xs text-surface-500 dark:text-surface-400">{skill.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <h3 className="mb-4 text-lg font-semibold text-surface-900 dark:text-white">
          Find Me
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button href={SOCIAL_LINKS.github} variant="secondary" external>
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3" />
          </Button>
          <Button href={SOCIAL_LINKS.linkedin} variant="secondary" external>
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
