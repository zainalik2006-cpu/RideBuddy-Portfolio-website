interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-surface-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-surface-500 dark:text-surface-400">{description}</p>
      )}
    </div>
  );
}
