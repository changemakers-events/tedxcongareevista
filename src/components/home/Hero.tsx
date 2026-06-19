import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { event } from "@/data/event";
import cameraView from "@/assets/tedx-camera-view.png.asset.json";
import p14 from "@/assets/landing-14.png.asset.json";
import p15 from "@/assets/landing-15.png.asset.json";
import p16 from "@/assets/landing-16.png.asset.json";
import p17 from "@/assets/landing-17.png.asset.json";
import p18 from "@/assets/landing-18.png.asset.json";
import p19 from "@/assets/landing-19.png.asset.json";
import p20 from "@/assets/landing-20.png.asset.json";
import p21 from "@/assets/landing-21.png.asset.json";
import p22 from "@/assets/landing-22.png.asset.json";
import p23 from "@/assets/landing-23.png.asset.json";
import p24 from "@/assets/landing-24.png.asset.json";
import p25 from "@/assets/landing-25.png.asset.json";
import p26 from "@/assets/landing-26.png.asset.json";
import p27 from "@/assets/landing-27.png.asset.json";
import p28 from "@/assets/landing-28.png.asset.json";
import p29 from "@/assets/landing-29.png.asset.json";
import p30 from "@/assets/landing-30.png.asset.json";

const heroPhotos = [
  cameraView.url,
  p14.url, p15.url, p16.url, p17.url, p18.url, p19.url, p20.url, p21.url,
  p22.url, p23.url, p24.url, p25.url, p26.url, p27.url, p28.url, p29.url, p30.url,
];

const slots = [
  { top: "4%", left: "16px", right: "auto", bottom: "auto", w: "160px", rotate: -6, delay: 0.1, z: 1, startOffset: 9 },
  { top: "2%", left: "auto", right: "16px", bottom: "auto", w: "170px", rotate: 5, delay: 0.3, z: 3, startOffset: 0 },
  { top: "auto", left: "16px", right: "auto", bottom: "16px", w: "142px", rotate: 7, delay: 0.5, z: 2, startOffset: 3 },
  { top: "auto", left: "auto", right: "16px", bottom: "16px", w: "150px", rotate: -8, delay: 0.7, z: 1, startOffset: 16 },
];

const CYCLE_MS = 4500;

function CyclingPhoto({ startOffset, stagger }: { startOffset: number; stagger: number }) {
  const [index, setIndex] = useState(startOffset);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((i) => (i + 1) % heroPhotos.length);
      }, CYCLE_MS);
    }, stagger);
    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [stagger]);

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[4px] bg-muted">
      {heroPhotos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading={i === startOffset ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 block w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {slots.map((c, i) => (
        <div
          key={i}
          className="absolute hidden md:block polaroid animate-hero-appear"
          style={{
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            width: c.w,
            transform: `rotate(${c.rotate}deg)`,
            zIndex: c.z,
            animationDelay: `${c.delay}s`,
          }}
        >
          <CyclingPhoto startOffset={c.startOffset} stagger={i * 900} />
        </div>
      ))}

      <div className="relative z-10 container-x pt-16 md:pt-20 pb-16 md:pb-24 text-center">
        <h1 className="font-display text-[clamp(2.5rem,7.5vw,5.5rem)] leading-[0.95] max-w-3xl mx-auto animate-hero-appear" style={{ animationDelay: "0.2s" }}>
          TED<span className="text-primary">x</span>
          <br className="md:hidden" />
          <span className="inline-block">Congaree Vista</span>
        </h1>
        <p className="mt-4 text-base md:text-xl text-foreground/70 max-w-xl mx-auto animate-hero-appear" style={{ animationDelay: "0.4s" }}>
          {event.tagline}
        </p>
        <p className="mt-2 font-hand text-xl md:text-2xl text-foreground/80 animate-hero-appear" style={{ animationDelay: "0.5s" }}>
          {event.date} · {event.time}
          <br />
          {event.venue}
        </p>

        <div className="mt-5 flex justify-center animate-hero-appear" style={{ animationDelay: "0.6s" }}>
          <Link
            to="/speakers"
            className="rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:brightness-110 transition shadow-md"
          >
            Meet Speakers
          </Link>
        </div>
      </div>
    </section>
  );
}
