interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-lg border border-surface-200 dark:border-surface-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-surface-500 dark:text-surface-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
