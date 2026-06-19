import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import stage from "@/assets/stage.jpg";

export function SponsorCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src={stage} alt="" aria-hidden className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="relative container-x">
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="red-bar" />
              <span className="eyebrow">Partner With Us</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] text-balance">
              Put your brand
              <br />
              on the <span className="text-primary">red dot.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              TEDxCongaree Vista partners reach city leaders, university
              decision-makers, founders, and an audience that decides where
              South Carolina goes next.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/sponsors"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:brightness-110 transition"
              >
                Request the Sponsorship Deck
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/sponsors"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-foreground hover:bg-white/10 transition"
              >
                View Tiers
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10">
          {[
            { v: "Fortune 500", l: "Attending C-suite" },
            { v: "12,400+", l: "Annual reach" },
            { v: "26", l: "Media partners" },
            { v: "98%", l: "Renewal rate" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="bg-[var(--surface)] px-6 py-8">
                <div className="font-display text-2xl md:text-3xl text-primary">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
