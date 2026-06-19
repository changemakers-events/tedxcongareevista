import { createFileRoute } from "@tanstack/react-router";
import { sponsorTiers } from "@/data/sponsors";
import { event } from "@/data/event";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — TEDxCongaree Vista" },
      { name: "description", content: "The partners who make TEDxCongaree Vista possible." },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <main className="bg-background">
      <header className="container-x pt-10 pb-5 text-center md:pt-12 md:pb-6">
        <p className="inline-block rotate-1 font-hand text-2xl text-primary">a huge 🧡 to</p>
        <h1 className="mt-2 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95]">
          Our sponsors.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Thank you to our generous partners who made TEDxCongaree Vista possible.
        </p>
      </header>

      <div className="container-x pb-14 md:pb-16">
        <div className="space-y-8 md:space-y-10">
          {sponsorTiers.map((t) => (
            <section key={t.tier} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
              <div className="mb-4 flex items-end justify-between gap-4">
                <h2 className="font-display text-2xl leading-none md:text-3xl">
                  <span className="text-primary">·</span> {t.tier}
                </h2>
                <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t.sponsors.length} partner{t.sponsors.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {t.sponsors.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    className="aspect-[3/2] flex items-center justify-center rounded-md border border-border bg-card px-4 py-4 transition hover:-translate-y-0.5 hover:border-primary"
                  >
                    <img
                      src={s.logo}
                      alt={s.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="border-y border-border bg-cream py-12 text-center md:py-14">
        <div className="container-x max-w-xl">
          <p className="inline-block -rotate-1 font-hand text-2xl text-primary">become a sponsor</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">Partner with us.</h2>
          <p className="mt-4 text-foreground/70">
            Amplify ideas worth spreading and make a lasting impact in our community.
          </p>
          <a
            href={`mailto:${event.links.email}?subject=Sponsorship%20Inquiry`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            <Mail size={14} /> {event.links.email}
          </a>
        </div>
      </section>
    </main>
  );
}
