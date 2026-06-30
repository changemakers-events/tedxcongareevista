# Event photos

Optimized event photos for the homepage **"Moments from the event"** marquee.

- **Format:** `.webp` preferred (also accepts `.jpg` / `.jpeg` / `.png`).
- **Naming:** `event-01.webp`, `event-02.webp`, … (zero-padded). Photos are ordered by filename.
- **Size:** resize to ~640–800px wide and compress to ~100–200 KB each. Tiles
  render at 320×300 in two rows, so they don't need to be large.
- **Count:** add at least ~8 so the scroll fills the screen without visible gaps.

Files placed here are picked up automatically by `src/data/eventPhotos.ts`
(via Vite `import.meta.glob`) and bundled/hashed like every other local asset —
no code changes required. Until at least one image is present, the marquee
section is hidden on the homepage.
