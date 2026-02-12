interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "status";
  status?: "idea" | "build" | "test" | "done";
}

const statusColors = {
  idea: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  build: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  test: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  done: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

export function Badge({ children, variant = "default", status }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  if (variant === "status" && status) {
    return <span className={`${base} ${statusColors[status]}`}>{children}</span>;
  }

  return (
    <span className={`${base} bg-surface-100 text-surface-600 dark:bg-surface-800 dark:text-surface-300`}>
      {children}
    </span>
  );
}
