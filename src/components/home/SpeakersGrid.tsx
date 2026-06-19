import { speakers } from "@/data/speakers";

const cardColors = ["#FFE680", "#FFD1D1", "#C7E9FF", "#D6F3CB", "#FFE2B8", "#E9D6FF"];
const tilts = [-2, 2, -1.5, 1.5, -2.5, 1, -1, 2];

export function SpeakersGrid() {
  return (
    <section id="speakers" className="py-10 md:py-14 bg-[var(--cream)] border-y border-border">
      <div className="container-x text-center mb-6">
        <h2 className="font-display text-3xl md:text-5xl">Meet the speakers</h2>
        <p className="mt-2 text-sm text-foreground/60">16 voices · 4 sessions · one Saturday in Columbia</p>
      </div>


      <div className="container-x grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
        {speakers.map((s, i) => (
          <a
            key={s.slug}
            href={s.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="group p-4 rounded-2xl hover-wiggle block"
            style={{
              background: cardColors[i % cardColors.length],
              transform: `rotate(${tilts[i % tilts.length]}deg)`,
              ["--r" as never]: `${tilts[i % tilts.length]}deg`,
            }}
          >
            <div className="overflow-hidden rounded-xl bg-white aspect-[3/4]">
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 font-display text-lg leading-tight">{s.name}</h3>
            <p className="font-hand text-lg text-primary leading-tight">"{s.talkTitle}"</p>
          </a>
        ))}
      </div>
    </section>
  );
}
