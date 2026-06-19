import { createFileRoute } from "@tanstack/react-router";
import { event } from "@/data/event";
import { Ticket, Heart, Users, Share2, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Us — TEDxCongaree Vista" },
      { name: "description", content: "Attend, volunteer, donate, or spread the word." },
    ],
  }),
  component: SupportPage,
});

const cards = [
  {
    icon: Ticket,
    title: "Attend",
    desc: "Be part of the live audience and experience the power of ideas firsthand.",
    cta: "Get Tickets",
    url: event.links.tickets,
    bg: "#FFE680",
  },
  {
    icon: Users,
    title: "Volunteer",
    desc: "Join our team of passionate volunteers and help create an unforgettable experience.",
    cta: "Sign Up to Volunteer",
    url: event.links.volunteer,
    bg: "#C7E9FF",
  },
  {
    icon: Heart,
    title: "Donate",
    desc: "Your generous donation to Inspire Columbia helps us continue spreading ideas that matter.",
    cta: "Make a Donation",
    url: event.links.donate,
    bg: "#FFD1D1",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    desc: "Share TEDxCongaree Vista with your network and help us reach more people.",
    cta: "Share Event",
    url: event.links.instagram,
    bg: "#D6F3CB",
  },
];

const tilts = [-1.5, 2, -2, 1.5];

const roles = [
  "Event Day Coordination",
  "Speaker Support",
  "Registration & Guest Services",
  "Social Media & Marketing",
  "Photography & Videography",
  "Technical Support",
];

function SupportPage() {
  return (
    <main className="bg-background">
      <header className="pt-32 pb-12 md:pt-40 md:pb-16 text-center container-x">
        <p className="font-hand text-2xl text-primary -rotate-1 inline-block">jump in</p>
        <h1 className="mt-2 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95]">
          Support our mission.
        </h1>
        <p className="mt-5 text-foreground/70 max-w-xl mx-auto">
          Help us create a platform for ideas worth spreading in our community.
        </p>
        <p className="mt-2 font-hand text-xl text-foreground/70">
          {event.date} · {event.venue}
        </p>
      </header>

      <section className="py-12 md:py-16">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="block p-7 rounded-2xl hover-wiggle"
                style={{
                  background: c.bg,
                  transform: `rotate(${tilts[i]}deg)`,
                  ["--r" as never]: `${tilts[i]}deg`,
                }}
              >
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl">{c.title}</h2>
                <p className="mt-2 text-foreground/70">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-hand text-lg text-primary">
                  {c.cta} <ExternalLink size={14} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[var(--cream)] border-y border-border">
        <div className="container-x">
          <div className="mb-8 text-center">
            <p className="font-hand text-2xl text-primary rotate-1 inline-block">we need you</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Volunteer roles.</h2>
            <p className="mt-3 text-foreground/70">Explore opportunities to contribute your skills.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {roles.map((r) => (
              <div
                key={r}
                className="rounded-xl bg-white border-2 border-foreground/10 px-5 py-4 font-display text-base text-center"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
