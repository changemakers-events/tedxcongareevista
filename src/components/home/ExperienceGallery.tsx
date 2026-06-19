import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import stage from "@/assets/stage.jpg";
import audience from "@/assets/audience.jpg";
import networking from "@/assets/networking.jpg";
import speaker1 from "@/assets/speaker1.jpg";
import speaker2 from "@/assets/speaker2.jpg";
import speaker3 from "@/assets/speaker3.jpg";
import speaker4 from "@/assets/speaker4.jpg";
import volunteers from "@/assets/volunteers.jpg";
import sponsors from "@/assets/sponsors.jpg";
import heroCity from "@/assets/hero-columbia.jpg";

type Cat = "All" | "Speakers" | "Networking" | "Audience" | "Sponsors" | "Behind The Scenes" | "Volunteers";

const photos: { src: string; alt: string; cat: Exclude<Cat, "All">; span: string }[] = [
  { src: stage, alt: "Speaker on TEDx stage", cat: "Speakers", span: "md:col-span-2 md:row-span-2" },
  { src: networking, alt: "Networking reception", cat: "Networking", span: "" },
  { src: audience, alt: "Engaged audience", cat: "Audience", span: "md:row-span-2" },
  { src: speaker1, alt: "Dr. Amelia Hart on stage", cat: "Speakers", span: "" },
  { src: volunteers, alt: "Volunteers backstage", cat: "Volunteers", span: "md:col-span-2" },
  { src: speaker2, alt: "Marcus Reed presenting", cat: "Speakers", span: "" },
  { src: sponsors, alt: "Sponsor wall at the venue", cat: "Sponsors", span: "md:col-span-2" },
  { src: speaker3, alt: "Speaker portrait", cat: "Speakers", span: "md:row-span-2" },
  { src: heroCity, alt: "Columbia skyline at dusk", cat: "Behind The Scenes", span: "md:col-span-2" },
  { src: speaker4, alt: "Speaker portrait in profile", cat: "Speakers", span: "" },
];

const categories: Cat[] = ["All", "Speakers", "Networking", "Audience", "Sponsors", "Behind The Scenes", "Volunteers"];

export function ExperienceGallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = cat === "All" ? photos : photos.filter((p) => p.cat === cat);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, filtered.length]);

  return (
    <section id="experience" className="relative py-28 md:py-40 bg-background">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="red-bar" />
            <span className="eyebrow">The Experience</span>
          </div>
        </Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-3xl text-balance">
              An evening that lingers
              <br />
              <span className="text-muted-foreground">long after the lights fade.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-muted-foreground">
              Step inside the room. Conversations, applause, and the quiet
              moments before a speaker takes the red dot.
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] border transition ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {filtered.map((p, i) => (
            <button
              key={`${p.src}-${i}`}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-white/5 ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 p-4 md:p-5 text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{p.cat}</span>
                <p className="text-sm md:text-base text-foreground mt-1 line-clamp-2">{p.alt}</p>
              </div>
              <div className="absolute top-3 right-3 h-6 w-6 rounded-full border border-white/30 backdrop-blur opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-[10px]">↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-fade-in">
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-6 right-6 h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
          >
            <X size={18} />
          </button>
          <button
            onClick={() => setOpen((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))}
            aria-label="Previous"
            className="absolute left-4 md:left-8 h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setOpen((i) => (i === null ? null : (i + 1) % filtered.length))}
            aria-label="Next"
            className="absolute right-4 md:right-8 h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </button>

          <img
            src={filtered[open].src}
            alt={filtered[open].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{filtered[open].cat}</p>
            <p className="mt-2 text-sm text-muted-foreground">{filtered[open].alt}</p>
            <p className="mt-2 text-xs text-muted-foreground/60">{open + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
