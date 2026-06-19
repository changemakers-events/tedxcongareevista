import { Reveal } from "@/components/site/Reveal";
import audience from "@/assets/audience.jpg";

const partners = [
  "University of South Carolina",
  "BlueCross BlueShield",
  "AGFirst",
  "IBM",
  "TEDx",
  "Inspire Columbia",
  "Prisma Health",
  "Richland Library",
  "Congaree Conservancy",
];

const testimonials = [
  {
    quote: "The most ambitious idea-stage in the Southeast. We left rethinking our entire community strategy.",
    name: "Dr. Lena Whitaker",
    role: "Dean, Darla Moore School of Business",
  },
  {
    quote: "It felt like a TED you'd fly across the country for — only it was in our backyard.",
    name: "Jamal Pierce",
    role: "Editor, The State",
  },
  {
    quote: "Easily one of the most professionally produced TEDx events I've experienced.",
    name: "Renee Calloway",
    role: "TEDx Ambassador",
  },
];

export function SocialProof() {
  return (
    <section className="relative py-28 md:py-40 bg-[var(--surface)] overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-10 inset-x-0 overflow-hidden border-y border-white/5 py-6 bg-background/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="mx-8 font-display text-xl md:text-3xl text-muted-foreground/60 hover:text-foreground transition"
            >
              {p}
              <span className="mx-8 text-primary">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="red-bar" />
                <span className="eyebrow">Social Proof</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1] text-balance">
                Where Columbia's
                <br />
                <span className="text-primary">changemakers</span> meet.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Each November, the Vista becomes a converging point for the
                people building South Carolina's next chapter — and the
                organizations backing them.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "92%", l: "Attendee NPS" },
                { v: "4.9★", l: "Speaker Rating" },
                { v: "26", l: "Press Mentions" },
              ].map((s) => (
                <Reveal key={s.l}>
                  <div>
                    <div className="font-display text-3xl text-primary">{s.v}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src={audience}
                alt="A captivated TEDxCongaree Vista audience"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl md:text-3xl leading-tight text-balance">
                  "It felt like a TED you'd fly across the country for — only it was in our backyard."
                </p>
                <p className="mt-4 text-sm text-muted-foreground">— Jamal Pierce, The State</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Testimonials grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="rounded-2xl border border-white/10 bg-background/40 p-8 h-full hover:border-primary/40 transition">
                <span className="font-display text-3xl text-primary leading-none">"</span>
                <blockquote className="mt-2 text-base leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
