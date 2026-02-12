import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content/devlog");

export interface DevlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  status: "idea" | "build" | "test" | "done";
  featuredImage?: string;
  readingTime: string;
  content: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): DevlogPost {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    summary: data.summary ?? "",
    status: data.status ?? "idea",
    featuredImage: data.featuredImage,
    readingTime: stats.text,
    content,
  };
}

export function getAllPosts(): DevlogPost[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
