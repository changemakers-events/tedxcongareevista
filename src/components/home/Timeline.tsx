import { Reveal } from "@/components/site/Reveal";
import stage from "@/assets/stage.jpg";
import networking from "@/assets/networking.jpg";
import audience from "@/assets/audience.jpg";
import volunteers from "@/assets/volunteers.jpg";
import speaker1 from "@/assets/speaker1.jpg";
import speaker2 from "@/assets/speaker2.jpg";
import speaker3 from "@/assets/speaker3.jpg";

const moments = [
  { time: "08:30", title: "Arrival", desc: "Coffee, croissants, and conversations that set the tone for the day.", img: networking, stat: "100+ Guests" },
  { time: "09:15", title: "Networking", desc: "Curated introductions across industries, campuses, and disciplines.", img: speaker3, stat: "26 Industries" },
  { time: "10:00", title: "Session One", desc: "Innovation & Entrepreneurship. The risk-takers take the stage.", img: stage, stat: "5 Talks" },
  { time: "12:30", title: "Lunch", desc: "A locally sourced midday pause inside the Vista.", img: networking, stat: "Locally sourced" },
  { time: "13:45", title: "Session Two", desc: "Health, equity, and the future of care.", img: speaker1, stat: "6 Talks" },
  { time: "15:30", title: "Session Three", desc: "Education, community, and what we owe each other.", img: audience, stat: "5 Talks" },
  { time: "17:00", title: "Closing", desc: "A standing ovation. A reception. A city changed.", img: speaker2, stat: "1 Standing ovation" },
  { time: "Late", title: "After Hours", desc: "Volunteers, crew, and stragglers — the warmest room of the night.", img: volunteers, stat: "60 Volunteers" },
];

export function Timeline() {
  return (
    <section className="relative py-28 md:py-40 bg-[var(--surface)]">
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="red-bar" />
              <span className="eyebrow">Event Highlights</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] text-balance">
              A day in the life
              <br />
              <span className="text-muted-foreground">of the Vista.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" aria-hidden />

          <div className="space-y-16 md:space-y-24">
            {moments.map((m, i) => (
              <div
                key={m.title}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                    <img src={m.img} alt={m.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-xs uppercase tracking-[0.2em] text-primary">
                      {m.time}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className={i % 2 === 1 ? "md:pr-12" : "md:pl-12"}>
                    <p className="eyebrow text-primary mb-3">Chapter {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-display text-3xl md:text-5xl leading-[1] text-balance">{m.title}</h3>
                    <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md">{m.desc}</p>
                    <p className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/70 border border-white/10 rounded-full px-4 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {m.stat}
                    </p>
                  </div>
                </Reveal>

                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow-primary" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
