import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DevlogFilters } from "@/components/ui/DevlogFilters";
import { getAllPosts, getAllTags } from "@/lib/devlog";

export const metadata: Metadata = {
  title: "Devlog",
  description: "Development log for the RideBuddy motorcycle telemetry project.",
};

export default function DevlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <div className="page-container">
      <SectionHeader
        title="Devlog"
        description="Build notes, experiments, and progress updates on the RideBuddy telemetry system."
      />
      <DevlogFilters posts={posts} allTags={allTags} />
    </div>
  );
}
