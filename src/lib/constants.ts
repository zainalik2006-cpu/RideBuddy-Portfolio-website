export const SITE_NAME = "RideBuddy";
export const SITE_DESCRIPTION =
  "Motorcycle Telemetry & Safety System — IMU + GPS logging, sensor fusion, event detection, crash/incident detection, and ride analytics.";
export const SITE_URL = "https://ridebuddy.dev";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/devlog", label: "Devlog" },
  { href: "/architecture", label: "Architecture" },
  { href: "/demo", label: "Demo" },
  { href: "/build-notes", label: "Build Notes" },
  { href: "/about", label: "About" },
] as const;

export const PROJECT_STATUS = {
  milestone: "Alpha — Sensor Pipeline + Event Detection",
  lastUpdated: "2025-01-15",
  phase: "Build & Test",
  progress: 65,
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername/ridebuddy",
  linkedin: "https://linkedin.com/in/yourusername",
} as const;
