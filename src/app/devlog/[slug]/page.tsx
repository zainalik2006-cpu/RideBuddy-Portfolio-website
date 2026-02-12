import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPostBySlug, getPostSlugs } from "@/lib/devlog";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        type: "article",
        publishedTime: post.date,
        tags: post.tags,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function DevlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <Button href="/devlog" variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Devlog
        </Button>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="status" status={post.status}>
            {post.status}
          </Badge>
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h1 className="mb-3 text-3xl font-bold text-surface-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-surface-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
        <article className="min-w-0">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
              },
            }}
          />
        </article>

        <TableOfContents />
      </div>
    </div>
  );
}
