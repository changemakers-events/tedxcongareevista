import { motion } from "motion/react";
import { ArrowRight, Camera, CirclePlay } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { VideoMarquee } from "./VideoMarquee";
import { PhotoMarquee } from "./PhotoMarquee";
import { ViewCounter } from "./ViewCounter";
import { eventPhotos } from "../data/eventPhotos";
import heroImg from "../assets/2017ColumbiaSkylineTEDx.webp";
import FabioSquare from "../assets/FabioSquare.webp";
import heroPolaroidTopLeft from "../assets/hero-polaroid-top-left.png";
import heroPolaroidTopRight from "../assets/hero-polaroid-top-right.png";
import heroPolaroidBottomRight from "../assets/hero-polaroid-bottom-right.png";
import "./HomePage.css";

export function HomePage() {
  const navigate = useNavigate();

  const heroSpeakers = [
    { image: heroPolaroidTopLeft, name: "TEDxCongaree Vista guests in conversation" },
    { image: FabioSquare, name: "Fabio Matta" },
    { image: heroPolaroidTopRight, name: "TEDxCongaree Vista convention center crowd" },
    { image: heroPolaroidBottomRight, name: "Changemakers 2026 event attendee" },
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="home-hero relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroImg}
            alt="Congaree Vista Aerial View"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="home-hero-overlay absolute inset-0" />
          <div className="home-hero-bottom-fade absolute inset-x-0 bottom-0" />
        </motion.div>

        <div className="hero-photos" aria-hidden="true">
          <motion.div
            className="hero-photo hero-photo--lt"
            initial={{ opacity: 0, y: 30, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[0].image} alt={heroSpeakers[0].name} className="hero-photo-img" />
          </motion.div>
          <motion.div
            className="hero-photo hero-photo--lb"
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ delay: 0.56, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[1].image} alt={heroSpeakers[1].name} className="hero-photo-img" />
          </motion.div>
          <motion.div
            className="hero-photo hero-photo--rt"
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[2].image} alt={heroSpeakers[2].name} className="hero-photo-img" />
          </motion.div>
          <motion.div
            className="hero-photo hero-photo--rb"
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ delay: 0.62, duration: 0.7 }}
          >
            <ImageWithFallback src={heroSpeakers[3].image} alt={heroSpeakers[3].name} className="hero-photo-img" />
          </motion.div>
        </div>

        <div className="home-hero-content relative z-10 flex items-center justify-center px-4">
          <motion.div
            initial={{ y: 28 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center text-white flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="home-hero-title"
            >
              Columbia's Premier TEDx Event
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="home-hero-subtitle"
            >
              An unforgettable journey through innovation, creativity, and inspiration
            </motion.p>

            <div className="home-hero-actions">
              <motion.a
                href="/speakers"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/speakers");
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="home-hero-button home-hero-button--primary"
              >
                <CirclePlay size={18} />
                Experience the talks
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="https://www.flickr.com/photos/inspirecolumbia/albums/72177720332590194"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="home-hero-button home-hero-button--secondary"
              >
                <Camera size={17} />
                View event photos
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="home-talks relative z-10"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.75 }}
        >
          <div className="home-talks-heading">
            <div>
              <h2>Watch the talks</h2>
              <p>Sixteen ideas worth spreading, straight from the TEDxCongaree Vista stage.</p>
            </div>
            <a
              href="https://www.youtube.com/playlist?list=PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I"
              target="_blank"
              rel="noreferrer"
              className="home-playlist-link"
            >
              Full playlist
              <ArrowRight size={17} />
            </a>
          </div>
          <VideoMarquee />
        </motion.div>
      </motion.section>

      <ViewCounter />

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
              "bg-white",
            ].join(" ")}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-black text-center">
              What is <span className="font-black text-[#E62B1E]">TEDx</span>?
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto space-y-4">
              <p>
                In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a
                program of local, self-organized events that bring people together to share a TED-like experience.
              </p>
              <p>
                Our event is called TEDxCongaree Vista, where x = independently organized TED event. At our
                TEDxCongaree Vista event, TED Talks video and live speakers will combine to spark deep discussion and
                connection in a small group. The TED Conference provides general guidance for the TEDx program, but
                individual TEDx events, including ours, are self-organized.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <motion.a
                href="https://www.ted.com/about/programs-initiatives/tedx-program"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold text-white bg-[#E62B1E] shadow-md hover:bg-[#c22419] transition-all duration-300"
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
