import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allPhotos, photoSourceUrl } from "@/data/photos";

export const Route = createFileRoute("/photos")({
  head: () => ({
    meta: [
      { title: "TEDxCongaree Vista 2026 — Event Photos" },
      { name: "description", content: "Photos from TEDxCongaree Vista 2026 in Columbia, SC." },
      { property: "og:title", content: "TEDxCongaree Vista 2026 — Event Photos" },
      { property: "og:description", content: "Moments from the day, from our community." },
    ],
  }),
  component: PhotosPage,
});

function PhotosPage() {
  const [idx, setIdx] = useState<number | null>(null);
  const photos = allPhotos;

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, photos.length]);

  return (
    <section className="pt-12 pb-10 bg-background">
      <div className="container-x mb-6">
        <h1 className="font-display text-4xl md:text-6xl">TEDxCongaree Vista 2026</h1>
        <p className="mt-2 text-foreground/60">
          Event photos · {photos.length} moments ·{" "}
          <a href={photoSourceUrl} target="_blank" rel="noreferrer" className="underline hover:text-primary">
            full Flickr album
          </a>
        </p>
      </div>

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-0">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="block w-full break-inside-avoid focus:outline-none"
            aria-label="Open photo"
          >
            <img src={src} alt="" loading="lazy" className="block w-full h-auto hover:opacity-90 transition" />
          </button>
        ))}
      </div>

      {idx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setIdx(null)}>
          <button onClick={() => setIdx(null)} aria-label="Close" className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
            <X size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIdx((i) => (i! - 1 + photos.length) % photos.length); }} className="absolute left-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
            <ChevronLeft />
          </button>
          <img src={photos[idx]} alt="" className="max-h-[90vh] max-w-[92vw] rounded shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setIdx((i) => (i! + 1) % photos.length); }} className="absolute right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
