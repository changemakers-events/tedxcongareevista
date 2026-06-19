import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { speakers, youtubeThumb } from "@/data/speakers";
import { event } from "@/data/event";

export function TalksCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  // continuous auto-scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let paused = false;
    const step = () => {
      if (!paused && el) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter);
    el.addEventListener("touchend", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  // duplicate the list for seamless loop
  const loop = [...speakers, ...speakers];

  return (
    <section id="talks" className="mt-4 md:mt-6 pt-1 pb-0 overflow-hidden">
      <div className="container-x flex items-end justify-between mb-3 gap-4 flex-wrap">
        <h2 className="font-display text-3xl md:text-5xl">Watch the talks</h2>
        <a
          href={event.links.youtubePlaylist}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          full playlist <ArrowUpRight size={16} />
        </a>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pl-5 md:pl-10 pr-5 md:pr-10 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((s, i) => (
          <a
            key={`${s.slug}-${i}`}
            href={s.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex-none w-[220px] md:w-[260px]"
          >
            <div className="relative aspect-video overflow-hidden rounded-md bg-foreground/5">
              <img
                src={youtubeThumb(s.youtubeUrl)}
                alt={s.talkTitle}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="pt-3">
              <h3 className="font-display text-base leading-tight line-clamp-2">{s.talkTitle}</h3>
              <p className="text-sm text-foreground/60">{s.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
