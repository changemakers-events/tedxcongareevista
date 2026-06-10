import { motion } from "motion/react";
import { Calendar, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../assets/2017ColumbiaSkylineTEDx.webp";

export function HomePage() {
  const navigate = useNavigate();
  const stats = [
    { icon: Calendar, label: "Date", value: "March 14, 2026", type: "text" as const },
    {
      icon: MapPin,
      label: "Location",
      value: "Columbia Metropolitan Convention Center",
      type: "link" as const,
      link:
        "https://www.google.com/maps/search/?api=1&query=1101+Lincoln+St,+Columbia,+SC+29201",
    },
    { icon: Users, label: "Speakers", value: "16 Inspiring Voices", type: "button" as const },
  ];

  const handleStatClick = (stat: (typeof stats)[0]) => {
    if (stat.type === "link" && stat.link) {
      window.open(stat.link, "_blank", "noopener,noreferrer");
    } else if (stat.type === "button" && stat.label === "Speakers") {
      navigate("/speakers");
    }
  };

  return (
    <div>
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen overflow-hidden"
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

        <div className="relative z-10 h-full flex items-center justify-center px-4">
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
              Bringing TEDx Back to Columbia
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

            <div className="mt-6 mb-4">
              {/* motion.span so this element animates its own opacity — backdrop-filter
                  on an element animating its OWN opacity works fine; it only breaks
                  when an ANCESTOR has opacity < 1 */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                className="inline-block px-12 py-4 rounded-full bg-black/40 border border-white/20 text-white font-bold text-lg sm:text-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)"
                }}
              >
                Saturday, March 14th, 2026 10 AM - 5 PM
              </motion.span>
            </div>
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

      {/* STATS */}
      {/* Goal: match the About-page "raised" box: solid surface, clean border, not transparent */}
      <section className="py-16 sm:py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={[
              "rounded-3xl",
              
    
              // raised shadow like your About box
              "shadow-[0_18px_55px_rgba(0,0,0,0.16)]",
              "p-8 sm:p-10 md:p-12",
            ].join(" ")}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.button
                  key={stat.label}
                  type="button"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * index, duration: 0.55 }}
                  onClick={() => handleStatClick(stat)}
                  className={[
                    "text-center p-8 rounded-2xl",
                    // slightly tinted inner tiles (still solid, not transparent)
                    "bg-gray-50",
                    "border border-gray-200",
                    "shadow-sm hover:shadow-md transition-all",
                    "outline-none",
                    stat.type !== "text" ? "cursor-pointer" : "cursor-default",
                  ].join(" ")}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#E62B1E] rounded-full mb-4 shadow-sm"
                  >
                    <stat.icon className="text-white" size={28} />
                  </motion.div>

                  <h3 className="text-gray-600 mb-2">{stat.label}</h3>
                  <p className="text-2xl text-black break-words">{stat.value}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
