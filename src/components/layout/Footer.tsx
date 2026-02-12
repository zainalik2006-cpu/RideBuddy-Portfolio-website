import { Activity } from "lucide-react";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-surface-500">
            <Activity className="h-4 w-4 text-primary-500" />
            <span>{SITE_NAME} — Motorcycle Telemetry & Safety System</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-500 transition-colors hover:text-primary-500"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-500 transition-colors hover:text-primary-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-surface-400">
          Last updated: January 2025 · Built with Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
