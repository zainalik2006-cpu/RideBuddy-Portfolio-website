interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-surface-200 bg-white p-6 dark:border-surface-800 dark:bg-surface-900 ${
        hover
          ? "transition-all duration-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 dark:hover:border-primary-700"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
