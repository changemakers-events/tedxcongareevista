import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { allSpeakers, getYouTubeId } from "../data/sessions";
import { VideoModal } from "./VideoModal";
import "./Marquee.css";

const STORAGE_KEY = "tedx-watched-talks";

/** Names of watched talks, oldest first, persisted across visits. */
function loadWatched(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function VideoMarquee() {
  // Index into allSpeakers of the talk playing in the modal (null = closed).
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Watch history drives the "least recently watched" queue order.
  const [watched, setWatched] = useState<string[]>(loadWatched);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watched));
    } catch {
      /* ignore storage failures (private mode, quota, etc.) */
    }
  }, [watched]);

  // Open a talk and mark it as the most recently watched.
  const openTalk = (index: number) => {
    setActiveIndex(index);
    const name = allSpeakers[index].name;
    setWatched((prev) => [...prev.filter((n) => n !== name), name]);
  };

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
                onClick={() => openTalk(speakerIndex)}
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
        watched={watched}
        onSelect={openTalk}
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
}
