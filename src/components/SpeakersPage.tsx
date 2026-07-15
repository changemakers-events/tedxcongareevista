import { motion } from "motion/react";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { sessions } from "../data/sessions";
import "./AboutPage.css";
import "./NewsPage.css";
import "./SpeakersPage.css";

export function SpeakersPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <section className="about-hero news-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="about-hero-title">
              Our Speakers
            </h1>
            <p className="about-hero-subtitle" style={{ marginBottom: '1.5rem' }}>
              Meet the visionaries, innovators, and changemakers who shared their groundbreaking ideas
            </p>
            <div className="flex justify-center" style={{ marginTop: '1.25rem' }}>
              <motion.a
                href="https://www.youtube.com/playlist?list=PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I"
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
                  📹 Watch all talks on YouTube
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {sessions.map((session, sessionIndex) => (
            <div key={session.label}>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * sessionIndex, duration: 0.5 }}
                className="text-3xl font-bold text-center text-black mb-8"
              >
                {session.label}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {session.speakers.map((speaker, index) => {
                  const hasLink = speaker.youtubeUrl && speaker.youtubeUrl !== "#";

                  return (
                    <motion.div
                      key={speaker.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (sessionIndex * 4 + index), duration: 0.6 }}
                      whileHover={{ y: -8 }}
                      className="speaker-card group"
                    >
                      {/* Portrait — links to the talk (no overlay on the speaker's face) */}
                      {hasLink ? (
                        <a
                          href={speaker.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Watch ${speaker.name}'s talk on YouTube`}
                          className="speaker-portrait"
                        >
                          <ImageWithFallback src={speaker.image} alt={speaker.name} />
                        </a>
                      ) : (
                        <div className="speaker-portrait">
                          <ImageWithFallback src={speaker.image} alt={speaker.name} />
                        </div>
                      )}

                      {/* Name */}
                      <h3 className="speaker-name">
                        {hasLink ? (
                          <a
                            href={speaker.youtubeUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Watch ${speaker.name}'s talk on YouTube`}
                          >
                            {speaker.name}
                          </a>
                        ) : (
                          speaker.name
                        )}
                      </h3>

                      {/* Persistent talk title */}
                      <p className="speaker-talk">
                        {hasLink ? (
                          <a href={speaker.youtubeUrl} target="_blank" rel="noreferrer">
                            {speaker.title}
                          </a>
                        ) : (
                          speaker.title
                        )}
                      </p>

                      {/* Role */}
                      <p className="speaker-role">{speaker.jobTitle}</p>

                      {/* Short bio */}
                      <p className="speaker-bio">{speaker.bio}</p>

                      {/* Watch Talk CTA */}
                      {hasLink && (
                        <a
                          href={speaker.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Watch ${speaker.name}'s talk on YouTube`}
                          className="watch-talk"
                        >
                          <Play size={16} />
                          Watch Talk
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
