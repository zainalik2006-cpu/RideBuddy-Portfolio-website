"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PostCard } from "./PostCard";
import { Badge } from "./Badge";
import type { DevlogPost } from "@/lib/devlog";

interface DevlogFiltersProps {
  posts: DevlogPost[];
  allTags: string[];
}

export function DevlogFilters({ posts, allTags }: DevlogFiltersProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeTag, search]);

  return (
    <>
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-surface-200 bg-white py-2.5 pl-10 pr-4 text-sm text-surface-700 placeholder:text-surface-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-900 dark:text-surface-200 dark:placeholder:text-surface-500 dark:focus:border-primary-600"
        />
      </div>

      {/* Tags */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            activeTag === null
              ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
              : "bg-surface-100 text-surface-500 hover:text-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:text-surface-200"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === tag
                ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                : "bg-surface-100 text-surface-500 hover:text-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:text-surface-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <div className="rounded-xl border border-dashed border-surface-300 py-12 text-center dark:border-surface-700">
            <p className="text-surface-400">No posts match your search.</p>
          </div>
        )}
      </div>

      <p className="mt-6 text-sm text-surface-400">
        {filtered.length} of {posts.length} posts
      </p>
    </>
  );
}
