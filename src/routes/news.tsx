import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Instagram, Facebook, Play, ArrowUpRight } from "lucide-react";
import { getNewsPosts } from "@/lib/news.functions";
import { newsVideos } from "@/data/videos";
import { event } from "@/data/event";
import pressWach from "@/assets/press-wach.png.asset.json";
import pressScpr from "@/assets/press-scpr.png.asset.json";
import pressUsc from "@/assets/press-usc.png.asset.json";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Videos — TEDxCongaree Vista" },
      { name: "description", content: "Updates, press, and behind-the-scenes from TEDxCongaree Vista." },
    ],
  }),
  component: NewsPage,
});



type PressFeature = { url: string; outlet: string; image: string; title: string };

const pressFeatures: PressFeature[] = [
  {
    url: "https://sc.edu/uofsc/posts/2026/01/tedx-student-organized-event-set-for-march.php",
    outlet: "University of South Carolina",
    image: pressUsc.url,
    title: "TEDx student-organized event set for March",
  },
  {
    url: "https://www.southcarolinapublicradio.org/show/south-carolina-business-review/2026-03-04/tedx-returns-to-columbia-sc-after-10-year-absence",
    outlet: "SC Public Radio",
    image: pressScpr.url,
    title: "TEDx returns to Columbia, SC after a 10-year absence",
  },
  {
    url: "https://wach.com/news/local/tedx-congaree-vista-draws-entrepreneurs-and-advocates-saturday-in-columbias-vista",
    outlet: "WACH FOX 57",
    image: pressWach.url,
    title: "TEDxCongaree Vista draws entrepreneurs and advocates to Columbia's Vista",
  },
];

function NewsPage() {
  const fetchPosts = useServerFn(getNewsPosts);
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["news-posts"],
    queryFn: () => fetchPosts(),
    staleTime: 1000 * 60 * 10,
  });

  return (
    <main className="bg-background">
      <header className="pt-10 pb-4 md:pt-12 md:pb-5 text-center container-x">
        <p className="font-hand text-2xl text-primary -rotate-1 inline-block">what's new</p>
        <h1 className="mt-1 font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.95]">
          News & updates.
        </h1>
        <p className="mt-2 text-foreground/70 max-w-xl mx-auto">
          Latest posts, press features, and social moments from TEDxCongaree Vista.
        </p>
      </header>

      {/* Newsletter + Press */}
      <section className="pb-8 md:pb-10">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {/* Newsletter scrollable column */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-3 gap-4 flex-wrap">
              <h2 className="font-display text-2xl md:text-3xl">From the newsletter</h2>
              <a href={event.links.newsletter} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                Visit news site <ExternalLink size={14} />
              </a>
            </div>

            <div className="rounded-xl border border-border bg-[var(--cream)] p-3 max-h-[640px] overflow-y-auto">
              {isLoading && <p className="text-foreground/60 p-3">Loading latest posts…</p>}

              {!isLoading && posts.length === 0 && (
                <p className="text-foreground/60 p-3">
                  Couldn't load posts right now —{" "}
                  <a href={event.links.newsletter} target="_blank" rel="noreferrer" className="underline">read them on the news site</a>.
                </p>
              )}

              <ul className="flex flex-col gap-3">
                {posts.map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex gap-4 rounded-lg bg-background border border-border hover:border-primary transition overflow-hidden"
                    >
                      {p.thumbnailUrl && (
                        <div className="w-28 sm:w-36 shrink-0 aspect-video overflow-hidden bg-foreground/5">
                          <img src={p.thumbnailUrl} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 p-3 pr-4">
                        <p className="text-[10px] uppercase tracking-wide text-foreground/50">
                          {p.timeAgo} ago · {p.readingTime} min read
                        </p>
                        <h3 className="mt-1 font-display text-base leading-snug line-clamp-2 group-hover:text-primary transition">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-xs text-foreground/70 line-clamp-2">{p.introContent}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Videos carousel fills the space below the newsletter */}
            <VideosCarousel />
          </div>

          {/* Press features sidebar */}
          <aside>
            <h2 className="font-display text-2xl md:text-3xl mb-3">In the press</h2>
            <div className="flex flex-col gap-3">
              {pressFeatures.map((f) => (
                <a
                  key={f.url}
                  href={f.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl overflow-hidden bg-[var(--cream)] border border-border hover:border-primary transition"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-foreground/5">
                    <img
                      src={f.image}
                      alt={f.outlet}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-wide text-foreground/50">{f.outlet}</p>
                    <h3 className="mt-1 font-display text-base leading-snug group-hover:text-primary transition">
                      {f.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-primary">
                      Read article <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>


      {/* Social feeds */}
      <section className="py-8 md:py-10 bg-[var(--cream)] border-y border-border">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl mb-5">Follow along</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Facebook page plugin */}
            <div className="rounded-xl overflow-hidden bg-background border border-border">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Facebook size={18} className="text-[#1877F2]" />
                  <span className="font-medium">Facebook</span>
                </div>
                <a href="https://www.facebook.com/TEDxCongareeVista" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">Open</a>
              </div>
              <iframe
                title="TEDxCongareeVista on Facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTEDxCongareeVista&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="100%"
                height="500"
                style={{ border: "none", overflow: "hidden", display: "block" }}
                scrolling="no"
                allow="encrypted-media"
              />
            </div>

            {/* Instagram Reel embed */}
            <div className="rounded-xl overflow-hidden bg-background border border-border flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Instagram size={18} className="text-[#E1306C]" />
                  <span className="font-medium">Instagram</span>
                </div>
                <a href="https://www.instagram.com/tedxcongareevista/" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">@tedxcongareevista</a>
              </div>
              <div className="relative w-full bg-black" style={{ height: 500 }}>
                <iframe
                  src="https://www.instagram.com/reel/DWARfpgD-bx/embed/?hidecaption=true"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  scrolling="no"
                  title="TEDxCongaree Vista Instagram Reel"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function VideosCarousel() {
  const ref = useRef<HTMLDivElement>(null);

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

  const loop = [...newsVideos, ...newsVideos];

  return (
    <section className="mt-6 overflow-hidden">
      <div className="flex items-end justify-between mb-3 gap-4 flex-wrap">
        <h2 className="font-display text-2xl md:text-3xl">Videos</h2>
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
        className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((v, i) => (
          <a
            key={`${v.id}-${i}`}
            href={v.url}
            target="_blank"
            rel="noreferrer"
            className="group flex-none w-[200px] md:w-[230px]"
          >
            <div className="relative aspect-video overflow-hidden rounded-md bg-foreground/5">
              <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-white">
                  <Play size={18} className="fill-current ml-0.5 text-primary-foreground" />
                </span>
              </div>
            </div>
            <p className="pt-2 font-display text-sm leading-tight line-clamp-2">{v.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
