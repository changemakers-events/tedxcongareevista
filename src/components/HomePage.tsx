import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { VideoMarquee } from "./VideoMarquee";
import { PhotoMarquee } from "./PhotoMarquee";
import { ViewCounter } from "./ViewCounter";
import { eventPhotos } from "../data/eventPhotos";
import heroImg from "../assets/2017ColumbiaSkylineTEDx.webp";
import TysonSquare from "../assets/TysonSquare.webp";
import FabioSquare from "../assets/FabioSquare.webp";
import RisdonSquare from "../assets/RisdonSquare.webp";
import MattSquare from "../assets/MattSquare.webp";
import "./HomePage.css";

export function HomePage() {
  const navigate = useNavigate();

  // Square speaker crops for the corkboard photos pinned in the hero.
  const heroSpeakers = [
    { image: TysonSquare, name: "Tyson Keon Brown" },
    { image: FabioSquare, name: "Fabio Matta" },
    { image: RisdonSquare, name: "Risdon Nichols Slate" },
    { image: MattSquare, name: "Matt Vaadi" },
  ];

  return (
    <div>
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
        style={{ minHeight: "66.67vh", display: "flex", flexDirection: "column" }}
      >
        <style>{`
          @keyframes tedxBlink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: .25; transform: scale(.75); }
          }
        `}</style>

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Real fade mask (doesn't rely on any CSS class existing) */}
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)",
            }}
          >
            <ImageWithFallback
              src={heroImg}
              alt="Congaree Vista Aerial View"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />

            {/* readability layer */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/165 via-black/40 to-transparent" />
          </div>

          {/* Blend the bottom into your PAGE background colors (light/dark) */}
          <div
            className="absolute inset-x-0 bottom-0 h-72 sm:h-80"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--bg-l-2) 55%, var(--bg-l-3) 100%)",
            }}
          />
        </motion.div>

        {/* Corkboard speaker photos pinned to the screen edges (hidden on small screens) */}
        <div className="hero-photos" aria-hidden="true">
          <motion.div
            className="hero-photo hero-photo--lt"
            initial={{ opacity: 0, y: 36, rotate: -7 }}
            animate={{ opacity: 1, y: 0, rotate: -7 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[0].image} alt={heroSpeakers[0].name} className="hero-photo-img" />
          </motion.div>
          <motion.div
            className="hero-photo hero-photo--lb"
            initial={{ opacity: 0, y: 36, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ delay: 0.62, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[1].image} alt={heroSpeakers[1].name} className="hero-photo-img" />
          </motion.div>
          <motion.div
            className="hero-photo hero-photo--rt"
            initial={{ opacity: 0, y: 36, rotate: 7 }}
            animate={{ opacity: 1, y: 0, rotate: 7 }}
            transition={{ delay: 0.56, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[2].image} alt={heroSpeakers[2].name} className="hero-photo-img" />
          </motion.div>
          <motion.div
            className="hero-photo hero-photo--rb"
            initial={{ opacity: 0, y: 36, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ delay: 0.68, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[3].image} alt={heroSpeakers[3].name} className="hero-photo-img" />
          </motion.div>
        </div>

        <div
          className="relative z-10 flex-1 flex items-center justify-center px-4"
          style={{ paddingTop: "100px", paddingBottom: "40px" }}
        >
          {/* Outer wrapper only translates — no opacity — so backdrop-filter children
              are never inside an opacity < 1 compositing layer */}
          <motion.div
            initial={{ y: 28 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-center text-white flex flex-col items-center"
          >
            <div>
              <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl mb-6"
              style={{
                textShadow:
                  "0 4px 8px rgba(0,0,0,0.75), 0 10px 20px rgba(0,0,0,0.6), 0 2px 0 rgba(0,0,0,0.35)",
              }}
            >
              Columbia's Premier TEDx Event
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-16"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.65)" }}
            >
              An unforgettable journey through innovation, creativity, and inspiration
            </motion.p>

            </div>

            {/* Tickets CTA */}
              <div className="mt-12 sm:mt-16 flex flex-col items-center gap-6">
                <motion.a
                  href="/speakers"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/speakers");
                  }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    relative inline-flex items-center justify-center
                    px-10 sm:px-12 py-4
                    rounded-full
                    text-base sm:text-lg font-semibold tracking-wide
                    text-black
                bg-white
                    border border-white/20
                    backdrop-blur-md
                    shadow-[0_18px_55px_rgba(0,0,0,0.35)]
                    hover:border-white/35
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                    transition-all duration-300
                  "
                >
                  {/* subtle inner gradient sheen */}
                  <span
                    className="
                      pointer-events-none absolute inset-0 rounded-full
                      bg-gradient-to-r from-[#E62B1E]/35 via-white/10 to-[#8B1230]/30
                      opacity-70
                    "
                  />
                  <span className="relative flex items-center gap-2">
                    🔴 Experience the talks →
                  </span>
                </motion.a>
                <motion.a
                  href="https://www.flickr.com/photos/inspirecolumbia/albums/72177720332590194"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    relative inline-flex items-center justify-center
                    px-10 sm:px-12 py-4
                    rounded-full
                    text-base sm:text-lg font-semibold tracking-wide
                    text-black
                    bg-white
                    border border-white
                    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                    hover:bg-gray-100
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                    transition-all duration-300
                  "
                >
                  <span className="relative flex items-center gap-2">
                    📷 View event photos
                  </span>
                </motion.a>
              </div>
              {/* End Tickets CTA */}

          </motion.div>
        </div>
      </motion.section>

      {/* TALK MARQUEE */}
      <section style={{ paddingTop: "4rem", paddingBottom: "2.5rem" }}>
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-3">Watch the talks</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Sixteen ideas worth spreading, straight from the TEDxCongaree Vista stage.
          </p>
        </div>
        <VideoMarquee />

        <div className="flex justify-center px-4" style={{ marginTop: "2.5rem" }}>
          <motion.a
            href="https://www.youtube.com/playlist?list=PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-3
              rounded-full
              text-base font-semibold
              text-white
              bg-[#E62B1E]
              shadow-md
              hover:bg-[#c22419]
              transition-all duration-300
            "
          >
            View all talks
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* TOTAL YOUTUBE VIEWS */}
      <ViewCounter />

      {/* EVENT PHOTOS MARQUEE — hidden until photos exist in src/assets/events/ */}
      {eventPhotos.length > 0 && (
        <section style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
          <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl text-black mb-3">Moments from the event</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Scenes from a day of bold ideas in the Congaree Vista.
            </p>
          </div>
          <PhotoMarquee />
        </section>
      )}

      {/* WHAT IS TEDX INFO CARD */}
      <section className="py-16 sm:py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={[
              "rounded-3xl",
              "shadow-[0_18px_55px_rgba(0,0,0,0.16)]",
              "p-8 sm:p-10 md:p-12",
              "bg-white"
            ].join(" ")}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-black text-center">
              What is <span className="font-black text-[#E62B1E]">TEDx</span>?
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto space-y-4">
              <p>
                In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
              </p>
              <p>
                Our event is called TEDxCongaree Vista, where x = independently organized TED event. At our TEDxCongaree Vista event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <motion.a
                href="https://www.ted.com/about/programs-initiatives/tedx-program"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center justify-center
                  px-8 py-3
                  rounded-full
                  text-base font-semibold
                  text-white
                  bg-[#E62B1E]
                  shadow-md
                  hover:bg-[#c22419]
                  transition-all duration-300
                "
              >
                Learn more about the TEDx program
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
