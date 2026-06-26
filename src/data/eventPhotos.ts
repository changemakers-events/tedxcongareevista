// Event photos for the HomePage "Moments from the event" marquee.
//
// Drop optimized image files into ../assets/events/ (see that folder's README).
// They are picked up automatically here via Vite's import.meta.glob, bundled and
// hashed like every other local asset, and ordered by filename — no code changes
// needed when you add or remove photos.

const modules = import.meta.glob<string>(
  "../assets/events/*.{webp,jpg,jpeg,png}",
  { eager: true, import: "default" },
);

export type EventPhoto = { src: string; alt: string };

export const eventPhotos: EventPhoto[] = Object.keys(modules)
  .sort()
  .map((path, i) => ({
    src: modules[path],
    alt: `TEDxCongaree Vista event photo ${i + 1}`,
  }));
