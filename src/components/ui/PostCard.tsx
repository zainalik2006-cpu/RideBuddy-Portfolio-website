import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "./Badge";
import type { DevlogPost } from "@/lib/devlog";

interface PostCardProps {
  post: DevlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/devlog/${post.slug}`} className="group block">
      <article className="rounded-xl border border-surface-200 bg-white p-5 transition-all duration-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/5 dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-700">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="status" status={post.status}>
            {post.status}
          </Badge>
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className="mb-2 text-lg font-semibold text-surface-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-surface-500 dark:text-surface-400">
          {post.summary}
        </p>

        <div className="flex items-center gap-4 text-xs text-surface-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
      </article>
    </Link>
  );
}
