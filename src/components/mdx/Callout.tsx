import { AlertCircle, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { ReactNode } from "react";

interface CalloutProps {
  type?: "note" | "warning" | "result" | "info";
  title?: string;
  children: ReactNode;
}

const config = {
  note: {
    icon: Info,
    bg: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
    title: "text-blue-800 dark:text-blue-300",
    iconColor: "text-blue-500",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
    title: "text-amber-800 dark:text-amber-300",
    iconColor: "text-amber-500",
  },
  result: {
    icon: CheckCircle2,
    bg: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800",
    title: "text-green-800 dark:text-green-300",
    iconColor: "text-green-500",
  },
  info: {
    icon: AlertCircle,
    bg: "bg-surface-50 border-surface-200 dark:bg-surface-900 dark:border-surface-700",
    title: "text-surface-800 dark:text-surface-200",
    iconColor: "text-surface-500",
  },
};

export function Callout({ type = "note", title, children }: CalloutProps) {
  const c = config[type];
  const Icon = c.icon;
  const displayTitle = title ?? type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className={`my-6 rounded-lg border p-4 ${c.bg}`}>
      <div className={`mb-1 flex items-center gap-2 font-semibold ${c.title}`}>
        <Icon className={`h-4 w-4 ${c.iconColor}`} />
        <span className="text-sm">{displayTitle}</span>
      </div>
      <div className="text-sm text-surface-700 dark:text-surface-300 [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}
