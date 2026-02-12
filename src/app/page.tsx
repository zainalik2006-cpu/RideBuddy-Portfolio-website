import {
  Activity,
  Navigation,
  BarChart3,
  ShieldAlert,
  Layers,
  ArrowRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PostCard } from "@/components/ui/PostCard";
import { StatusWidget } from "@/components/ui/StatusWidget";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllPosts } from "@/lib/devlog";

const capabilities = [
  {
    icon: Activity,
    title: "IMU + GPS Logging",
    description: "9-axis IMU and GPS data captured at high frequency with precise timestamp synchronization.",
  },
  {
    icon: Layers,
    title: "Sensor Fusion",
    description: "Complementary filter combining accelerometer, gyroscope, and magnetometer for accurate orientation.",
  },
  {
    icon: ShieldAlert,
    title: "Event Detection",
    description: "Real-time detection of hard braking, aggressive lean angles, and crash/incident events.",
  },
  {
    icon: Navigation,
    title: "Ride Analytics",
    description: "Post-ride analysis with route mapping, event timeline, and performance metrics dashboard.",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-200 dark:border-surface-800">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
              <Activity className="h-3.5 w-3.5" />
              Active Development
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-surface-900 dark:text-white sm:text-5xl lg:text-6xl">
              Ride<span className="text-primary-500">Buddy</span>
            </h1>
            <p className="mb-2 text-xl font-medium text-surface-700 dark:text-surface-200 sm:text-2xl">
              Motorcycle Telemetry & Safety System
            </p>
            <p className="mb-8 max-w-2xl text-base text-surface-500 dark:text-surface-400 sm:text-lg">
              A Raspberry Pi-based system that logs IMU and GPS data during rides, applies sensor fusion
              and event detection algorithms, and provides post-ride analytics — including crash and incident detection.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/devlog">
                Read Devlog
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/architecture" variant="secondary">
                <Layers className="h-4 w-4" />
                System Architecture
              </Button>
              <Button href="/demo" variant="secondary">
                <BarChart3 className="h-4 w-4" />
                Demo
              </Button>
              <Button href="https://github.com/yourusername/ridebuddy" variant="ghost" external>
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-container">
        <SectionHeader
          title="Key Capabilities"
          description="End-to-end telemetry pipeline from sensor input to actionable ride insights."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-surface-200 bg-white p-5 transition-all duration-200 hover:border-primary-300 hover:shadow-md dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-700"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                <cap.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-surface-900 dark:text-white">
                {cap.title}
              </h3>
              <p className="text-sm text-surface-500 dark:text-surface-400">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Devlog + Status */}
      <section className="page-container border-t border-surface-100 dark:border-surface-800/50">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <SectionHeader title="Latest Devlog" className="mb-0" />
              <Button href="/devlog" variant="ghost">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <div>
            <StatusWidget />
          </div>
        </div>
      </section>
    </>
  );
}
