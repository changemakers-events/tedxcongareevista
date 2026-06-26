import { motion } from "motion/react";
import { Play } from "lucide-react";
import { allSpeakers, getYouTubeId } from "../data/sessions";
import "./Marquee.css";

export function VideoMarquee() {
  // Render the list twice so the track can loop seamlessly.
  const tiles = [...allSpeakers, ...allSpeakers];

  return (
    <div className="mq-viewport">
      <motion.div
        className="mq-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 165, ease: "linear", repeat: Infinity }}
      >
        {tiles.map((speaker, i) => {
          const id = getYouTubeId(speaker.youtubeUrl);
          return (
            <a
              key={`${speaker.name}-${i}`}
              href={speaker.youtubeUrl}
              target="_blank"
              rel="noreferrer"
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
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
