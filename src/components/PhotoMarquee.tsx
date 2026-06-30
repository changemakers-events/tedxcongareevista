import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { eventPhotos } from "../data/eventPhotos";
import "./Marquee.css";

export function PhotoMarquee() {
  // Nothing to show until optimized photos are added to src/assets/events/.
  if (eventPhotos.length === 0) return null;

  // Each row is rendered twice so its track can loop seamlessly. The second row
  // uses a reversed order and the opposite direction for visual variety.
  const topRow = [...eventPhotos, ...eventPhotos];
  const bottomSource = [...eventPhotos].reverse();
  const bottomRow = [...bottomSource, ...bottomSource];

  return (
    <div className="mq-photo-rows">
      <div className="mq-viewport">
        <motion.div
          className="mq-track"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        >
          {topRow.map((photo, i) => (
            <ImageWithFallback
              key={`top-${photo.alt}-${i}`}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="mq-photo"
            />
          ))}
        </motion.div>
      </div>

      <div className="mq-viewport">
        <motion.div
          className="mq-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 95, ease: "linear", repeat: Infinity }}
        >
          {bottomRow.map((photo, i) => (
            <ImageWithFallback
              key={`bottom-${photo.alt}-${i}`}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="mq-photo"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
