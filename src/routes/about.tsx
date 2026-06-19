import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/data/team";
import { event } from "@/data/event";
import { Mail, ExternalLink } from "lucide-react";
import teamStage from "@/assets/team-stage.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TEDxCongaree Vista" },
      { name: "description", content: "Why TEDxCongaree Vista exists, the team behind it, and how to get involved." },
    ],
  }),
  component: AboutPage,
});

const cardColors = ["#FFE680", "#FFD1D1", "#C7E9FF", "#D6F3CB", "#FFE2B8", "#E9D6FF"];
const tilts = [-2, 1.5, -1, 2, -2, 1, -1.5, 2, -1, 1.5];

function AboutPage() {
  return (
    <main className="bg-background">
      <header className="pt-12 pb-6 md:pt-14 md:pb-8 text-center container-x">
        <p className="font-hand text-2xl text-primary -rotate-1 inline-block">hi, we're TEDx</p>
        <h1 className="mt-2 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95]">
          Why TEDxCongaree Vista?
        </h1>
        <p className="mt-5 text-foreground/70 max-w-2xl mx-auto">
          A locally organized event bringing together our community to share ideas worth spreading.
        </p>
      </header>

      <section className="container-x pb-8 md:pb-10">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={teamStage.url}
            alt="The TEDxCongaree Vista team on stage during the event."
            loading="eager"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[var(--cream)] border-y border-border">
        <div className="container-x max-w-3xl space-y-5 text-foreground/80 leading-relaxed">
          <p>
            TEDxCongaree Vista reflects not just the location of Columbia, but a spirit of
            connection, creativity, and growth that aligns with the mission of TEDx. Our theme,{" "}
            <span className="font-hand text-primary text-xl">"ChangeMakers,"</span> showcases local
            visionaries already making a difference and transforming Columbia through health,
            education, innovative research, tech startups, or grassroots initiatives.
          </p>
          <p>
            The name reflects both the cultural identity and geographic heart of Columbia, South
            Carolina — symbolizing connection, progress, and innovation.
          </p>
          <p>
            By sharing ideas in this collaborative format, we spark personal transformation, inspire
            change across communities, and celebrate how far we've come and where we're going.
          </p>
          <p className="font-hand text-2xl text-primary">
            Let's create something powerful, together.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="font-hand text-2xl text-primary rotate-1 inline-block">the humans behind it</p>
            <h2 className="mt-2 font-display text-4xl md:text-6xl">Our organizing team.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="p-4 rounded-2xl hover-wiggle"
                style={{
                  background: cardColors[i % cardColors.length],
                  transform: `rotate(${tilts[i % tilts.length]}deg)`,
                  ["--r" as never]: `${tilts[i % tilts.length]}deg`,
                }}
              >
                <div className="overflow-hidden rounded-xl bg-white aspect-square">
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-3 font-display text-lg leading-tight">{m.name}</h3>
                <p className="font-hand text-base text-primary leading-tight">{m.role}</p>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-4">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[var(--cream)] border-y border-border">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-hand text-2xl text-primary -rotate-1 inline-block">join us</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Volunteer or emcee.</h2>
            <p className="mt-4 text-foreground/70">
              We're looking for additional volunteers and emcees to join our team for the day of the event!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={event.links.volunteer}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition"
              >
                Volunteer / Emcee form <ExternalLink size={14} />
              </a>
              <a
                href={`mailto:${event.links.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                <Mail size={14} /> {event.links.email}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 md:p-8 border-2 border-foreground/10">
            <p className="font-hand text-2xl text-primary">a 100% volunteer-driven nonprofit</p>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              TEDxCongaree Vista is operated by <strong>Inspire Columbia</strong>, a South Carolina
              501(c)3 nonprofit and 100% volunteer-driven organization. Funds raised through
              sponsorships and ticket sales stay right here in the local community.
            </p>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized
              events. <em>x = independently organized TED event.</em>
            </p>
            <a
              href={event.links.tedxProgram}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Learn more about the TEDx program <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
