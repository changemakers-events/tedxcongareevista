import { flickrPhotos } from "@/data/photos";

const captions = ["the crowd 💛", "main stage", "hallway talks", "our volunteers", "thank-you wall"];
const rots = [-4, 3, -2, 5, -3];

export function ADayOfIdeas() {
  const picks = flickrPhotos.slice(0, 5);
  return (
    <section className="relative py-20 md:py-28 bg-[var(--cream)] border-y border-border">
      <div className="container-x text-center mb-10">
        <p className="font-hand text-2xl text-primary -rotate-1 inline-block">one Saturday</p>
        <h2 className="mt-2 font-display text-4xl md:text-6xl">A day of ideas.</h2>
        <p className="mt-3 text-foreground/70 max-w-md mx-auto">
          One stage. A few hundred neighbors. A whole lot of curiosity.
        </p>
      </div>

      <div className="container-x flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {picks.map((src, i) => (
          <div
            key={i}
            className="polaroid w-[150px] sm:w-[180px] md:w-[210px] hover-wiggle"
            style={{
              transform: `rotate(${rots[i]}deg)`,
              ["--r" as never]: `${rots[i]}deg`,
            }}
          >
            <img src={src} alt={captions[i]} loading="lazy" className="block aspect-[4/5] object-cover w-full rounded-[4px]" />
            <p className="font-hand text-lg text-center mt-2 text-foreground/80">{captions[i]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
