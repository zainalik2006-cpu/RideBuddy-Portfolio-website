import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { ImageWithCaption } from "./ImageWithCaption";

export const mdxComponents: MDXComponents = {
  Callout,
  ImageWithCaption,
  h2: (props) => (
    <h2
      className="mb-4 mt-10 scroll-mt-24 border-b border-surface-200 pb-2 text-xl font-bold text-surface-900 dark:border-surface-800 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-8 scroll-mt-24 text-lg font-semibold text-surface-800 dark:text-surface-100"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-surface-600 dark:text-surface-300" {...props} />
  ),
  ul: (props) => <ul className="mb-4 ml-4 list-disc space-y-1 text-surface-600 dark:text-surface-300" {...props} />,
  ol: (props) => <ol className="mb-4 ml-4 list-decimal space-y-1 text-surface-600 dark:text-surface-300" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-surface-100 px-1.5 py-0.5 font-mono text-sm text-primary-700 dark:bg-surface-800 dark:text-primary-300"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border border-surface-200 bg-surface-50 p-4 font-mono text-sm dark:border-surface-700 dark:bg-surface-900"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-4 border-primary-300 pl-4 italic text-surface-500 dark:border-primary-700 dark:text-surface-400"
      {...props}
    />
  ),
  table: (props) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-surface-200 bg-surface-50 px-4 py-2 text-left font-semibold text-surface-700 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-200"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-surface-100 px-4 py-2 text-surface-600 dark:border-surface-800 dark:text-surface-300"
      {...props}
    />
  ),
};
