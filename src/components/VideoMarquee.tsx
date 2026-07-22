import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { allSpeakers, getYouTubeId } from "../data/sessions";
import { VideoModal } from "./VideoModal";
import "./Marquee.css";

export function VideoMarquee() {
  // Index into allSpeakers of the talk playing in the modal (null = closed).
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Render the list twice so the track can loop seamlessly.
  const tiles = [...allSpeakers, ...allSpeakers];

  return (
    <>
      <div className="mq-viewport">
        <motion.div
          className="mq-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 165, ease: "linear", repeat: Infinity }}
        >
          {tiles.map((speaker, i) => {
            const id = getYouTubeId(speaker.youtubeUrl);
            // The track is doubled, so map the tile back to its speaker index.
            const speakerIndex = i % allSpeakers.length;
            return (
              <button
                key={`${speaker.name}-${i}`}
                type="button"
                onClick={() => setActiveIndex(speakerIndex)}
                className="mq-tile group"
                aria-label={`Watch ${speaker.name}'s talk: ${speaker.title}`}
              >
                <div className="mq-thumb">
                  <img
                    src={id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : speaker.image}
                    alt={speaker.title}
                    loading="lazy"
                  />
                  <div className="mq-thumb-overlay" />
                  <span className="mq-play" aria-hidden="true">
                    <Play size={16} />
                  </span>
                </div>
                <p className="mq-caption">{speaker.title}</p>
                <p className="mq-speaker">{speaker.name}</p>
              </button>
            );
          })}
        </motion.div>
      </div>

      <VideoModal
        speakers={allSpeakers}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
}
