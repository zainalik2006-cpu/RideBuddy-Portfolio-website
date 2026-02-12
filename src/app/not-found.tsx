import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 font-mono text-6xl font-bold text-surface-200 dark:text-surface-800">404</p>
      <h1 className="mb-2 text-xl font-semibold text-surface-900 dark:text-white">Page not found</h1>
      <p className="mb-6 text-surface-500 dark:text-surface-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" variant="secondary">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>
    </div>
  );
}
