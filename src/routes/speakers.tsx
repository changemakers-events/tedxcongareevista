import { createFileRoute } from "@tanstack/react-router";
import { speakers, sessions } from "@/data/speakers";
import { event } from "@/data/event";
import { Play, ArrowUpRight } from "lucide-react";
import speakersGroup from "@/assets/speakers-group.jpg.asset.json";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — TEDxCongaree Vista" },
      { name: "description", content: "Meet the 16 speakers of TEDxCongaree Vista, grouped by session." },
    ],
  }),
  component: SpeakersPage,
});

const cardColors = ["#FFE680", "#FFD1D1", "#C7E9FF", "#D6F3CB", "#FFE2B8", "#E9D6FF", "#FFDFA8", "#D9E8FF"];
const tilts = [-2, 2, -1.5, 1.5, -2.5, 1, -1, 2];

function SpeakersPage() {
  return (
    <main className="bg-background">
      <section className="relative container-x pt-10 md:pt-12">
        <div className="relative overflow-hidden rounded-2xl border border-border">
          {/* text overlay */}
          <div className="absolute inset-x-0 top-0 z-10 px-4 pt-6 text-center md:pt-8">
            <p className="font-hand text-xl text-primary -rotate-1 inline-block drop-shadow-sm">our 2026 lineup</p>
            <h1 className="mt-1 font-display text-[clamp(1.8rem,5vw,3.5rem)] leading-[0.95] text-white drop-shadow-sm">
              Meet the speakers.
            </h1>
          </div>

          <img
            src={speakersGroup.url}
            alt="TEDxCongaree Vista speakers and team on stage."
            loading="eager"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="pb-6 pt-4 text-center md:pb-8 md:pt-6">
          <p className="mx-auto max-w-lg text-sm text-foreground/80">
            Sixteen Columbia changemakers across four sessions. Tap any face to watch their talk on YouTube.
          </p>
          <a
            href={event.links.youtubePlaylist}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:brightness-110"
          >
            <Play size={12} className="fill-current" /> Watch the full playlist
          </a>
        </div>
      </section>

      {sessions.map((session, sIdx) => {
        const inSession = speakers.filter((s) => s.session === session);
        return (
          <section key={session} className={`py-14 md:py-20 ${sIdx % 2 === 0 ? "bg-[var(--cream)]" : "bg-background"} border-y border-border`}>
            <div className="container-x">
              <div className="mb-8 flex items-center gap-3">
                <span className="font-hand text-3xl text-primary">0{sIdx + 1}</span>
                <h2 className="font-display text-2xl md:text-4xl">{session.replace(/^Session \d+: /, "")}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
                {inSession.map((s, i) => {
                  const r = tilts[(sIdx * 4 + i) % tilts.length];
                  return (
                    <a
                      key={s.slug}
                      href={s.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group p-4 rounded-2xl hover-wiggle block"
                      style={{
                        background: cardColors[(sIdx * 4 + i) % cardColors.length],
                        transform: `rotate(${r}deg)`,
                        ["--r" as never]: `${r}deg`,
                      }}
                    >
                      <div className="overflow-hidden rounded-xl bg-white aspect-[3/4] relative">
                        <img src={s.image} alt={s.name} loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                          <Play size={14} className="fill-current ml-0.5" />
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg leading-tight">{s.name}</h3>
                      <p className="text-sm text-foreground/60 leading-snug">{s.title}</p>
                      <p className="mt-2 font-hand text-lg text-primary leading-tight">"{s.talkTitle}"</p>
                      <p className="mt-1 text-sm text-foreground/70 line-clamp-3">{s.talkDescription}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm text-foreground/70 group-hover:text-primary transition">
                        Watch talk <ArrowUpRight size={14} />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
