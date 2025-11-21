// Image size breakpoints from 640px to 2048px with 100vw fallback
export const DEFAULT_IMAGE_SIZES = [
  320,
  640,
  768,
  1024,
  1280,
  1536,
  1920,
  2048,
  2560,
  "100vw",
] as const;
// Default fallback size for the img element src attribute

// Default image quality
export const DEFAULT_QUALITY = 80;
export const DEFAULT_FORMAT = "jpg";

// Default loading behavior for the img element
export const DEFAULT_LOADING = "lazy";
export type Size = (typeof DEFAULT_IMAGE_SIZES)[number];

export type PictureProps = {
  src: HTMLImageElement["src"];
  mobileSrc?: HTMLImageElement["src"];
  alt?: HTMLImageElement["alt"];
  loading?: "lazy" | "eager";
  quality?: number;
  imageSizes?: readonly (Size | string)[] | string;
  format?: "jpg" | "webp" | "avif";
};

/**
 * Generates sizes attribute based on the image sizes array
 * Supports both numbers (converted to px) and strings (used as-is)
 * The last item in the array is used as the fallback size
 */
export function generateSizesAttribute(sizes?: PictureProps["imageSizes"]) {
  if (typeof sizes === "string") {
    return sizes;
  }

  if (!sizes) {
    return undefined;
  }

  // The last item is always used as the fallback
  const lastItem = sizes[sizes.length - 1];
  const fallback = typeof lastItem === "string" ? lastItem : `100vw`;

  const mediaQueries = sizes.map((size) => {
    const sizeValue = typeof size === "number" ? `${size}px` : size;
    const breakpoint = typeof size === "number" ? size : parseInt(size);

    return `(max-width: ${breakpoint}px) ${sizeValue}`;
  });

  return [...mediaQueries, fallback].join(", ");
}

type GenerateSrcSetOptions = {
  src?: PictureProps["src"];
  format?: PictureProps["format"];
  quality?: PictureProps["quality"];
  imageSizes?: readonly (number | string)[];
};

/**
 * Generates srcSet string for a given image format
 */
export function generateSrcSet({
  src,
  format,
  imageSizes,
  quality,
}: GenerateSrcSetOptions) {
  if (!src || !imageSizes?.length) {
    return undefined;
  }

  return imageSizes
    .filter((imageSize): imageSize is number => typeof imageSize === "number")
    .map(
      (imageSize) =>
        `${src}?w=${imageSize}&fm=${format}&q=${quality} ${imageSize}w`
    )
    .join(", ");
}
