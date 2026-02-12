import { Cpu } from "lucide-react";
import { PROJECT_STATUS } from "@/lib/constants";

export function StatusWidget() {
  return (
    <div className="rounded-xl border border-surface-200 bg-white p-6 dark:border-surface-800 dark:bg-surface-900">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/40">
          <Cpu className="h-4 w-4 text-accent-600 dark:text-accent-400" />
        </div>
        <h3 className="font-semibold text-surface-900 dark:text-white">Project Status</h3>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-surface-400">Current Milestone</p>
          <p className="text-sm font-medium text-surface-700 dark:text-surface-200">
            {PROJECT_STATUS.milestone}
          </p>
        </div>

        <div>
          <p className="text-xs text-surface-400">Build Phase</p>
          <p className="text-sm font-medium text-surface-700 dark:text-surface-200">
            {PROJECT_STATUS.phase}
          </p>
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between text-xs text-surface-400">
            <span>Progress</span>
            <span>{PROJECT_STATUS.progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-surface-100 dark:bg-surface-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"
              style={{ width: `${PROJECT_STATUS.progress}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-surface-400">
          Last updated:{" "}
          {new Date(PROJECT_STATUS.lastUpdated).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
