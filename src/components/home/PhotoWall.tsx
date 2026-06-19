import { Link } from "@tanstack/react-router";
import { allPhotos } from "@/data/photos";

const COLUMN_COUNT = 5;

function getColumnPhotos(columnIndex: number) {
  return allPhotos.filter((_, photoIndex) => photoIndex % COLUMN_COUNT === columnIndex);
}

function ScrollingColumn({
  photos,
  duration,
  reverse = false,
}: {
  photos: string[];
  duration: number;
  reverse?: boolean;
}) {
  const loopPhotos = [...photos, ...photos];
  return (
    <div className="relative h-[260px] overflow-hidden md:h-[720px]">
      <div
        className="flex flex-col will-change-transform photo-scroll-col"
        style={
          {
            "--scroll-duration": `${duration}s`,
            "--scroll-direction": reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {loopPhotos.map((src, index) => (
          <Link key={index} to="/photos" className="block w-full shrink-0">
            <img
              src={src}
              alt=""
              loading="lazy"
              className="block w-full h-auto object-cover hover:opacity-90 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const columnsConfig = [
  { duration: 600, reverse: false },
  { duration: 720, reverse: false },
  { duration: 540, reverse: false },
  { duration: 660, reverse: false },
  { duration: 480, reverse: false },
];

export function PhotoWall() {
  return (
    <section id="photos" className="py-3 md:py-8 bg-background">
      <div className="container-x flex items-end justify-between gap-2 flex-wrap mb-2 md:mb-4">
        <h2 className="font-display text-xl md:text-5xl">View event photos</h2>
        <Link to="/photos" className="text-xs md:text-sm text-foreground/60 hover:text-primary underline">
          See all {allPhotos.length} photos →
        </Link>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {columnsConfig.map((cfg, i) => (
          <ScrollingColumn
            key={i}
            photos={getColumnPhotos(i)}
            duration={cfg.duration}
            reverse={cfg.reverse}
          />
        ))}
      </div>

      <div className="container-x mt-6 text-center">
        <Link
          to="/photos"
          className="inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          See all photos
        </Link>
      </div>
    </section>
  );
}

