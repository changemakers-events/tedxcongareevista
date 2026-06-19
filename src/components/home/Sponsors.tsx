import { sponsorTiers } from "@/data/sponsors";

const tilts = [-1.5, 1, -1, 1.5, -2, 1, -1.5, 2];

export function Sponsors() {
  // Show top 3 tiers on homepage (ChangeMaker, Platinum, Gold)
  const featured = sponsorTiers.slice(0, 3);

  return (
    <section id="sponsors" className="py-10 md:py-14 bg-background">
      <div className="container-x text-center mb-6">
        <h2 className="font-display text-3xl md:text-5xl">Made possible by</h2>
        <p className="mt-2 text-sm text-foreground/60">Local partners who pitched in time, dollars, and snacks.</p>
      </div>


      <div className="container-x space-y-6">
        {featured.map((t) => (
          <div key={t.tier}>
            <p className="text-center font-hand text-xl text-foreground/60 mb-4">{t.tier}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {t.sponsors.map((s, i) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-[3/2] flex items-center justify-center p-5 rounded-2xl bg-white border-2 border-foreground/10 hover:border-primary transition"
                  style={{ transform: `rotate(${tilts[i % tilts.length] * 0.5}deg)` }}
                  title={s.name}
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
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-foreground/60">
        Thanks, y'all. — the TEDxCongaree Vista team
      </p>

    </section>
  );
}
