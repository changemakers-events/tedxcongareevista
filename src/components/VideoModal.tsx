import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink, Play, X } from "lucide-react";
import { getYouTubeId, type Speaker } from "../data/sessions";
import "./VideoModal.css";

type VideoModalProps = {
  speakers: Speaker[];
  /** Index of the talk currently playing, or null when the modal is closed. */
  activeIndex: number | null;
  onSelect: (index: number) => void;
  onClose: () => void;
};

const thumb = (url: string) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

/** If the embed hasn't fired `load` within this window we assume it was
    blocked (CSP, network, embedding disabled) and show the thumbnail fallback. */
const EMBED_TIMEOUT_MS = 5000;

export function VideoModal({ speakers, activeIndex, onSelect, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);
  const failTimer = useRef<number | null>(null);
  const open = activeIndex !== null;
  const count = speakers.length;

  // Whether the current video's embed failed to load (falls back to thumbnail).
  const [embedFailed, setEmbedFailed] = useState(false);

  // A successful iframe `load` cancels the pending timeout so the fallback can
  // never appear over a working video.
  const handleEmbedLoad = () => {
    if (failTimer.current !== null) window.clearTimeout(failTimer.current);
    setEmbedFailed(false);
  };

  // Step up/down the fixed playlist order (with wrap-around), like YouTube's
  // Up next list — the "Now playing" highlight moves, the list stays put.
  const step = (delta: number) => {
    if (activeIndex === null) return;
    onSelect((activeIndex + delta + count) % count);
  };

  // Reset the fallback state and arm a load-timeout each time the talk changes.
  useEffect(() => {
    if (activeIndex === null) return;
    setEmbedFailed(false);
    failTimer.current = window.setTimeout(() => setEmbedFailed(true), EMBED_TIMEOUT_MS);
    return () => {
      if (failTimer.current !== null) window.clearTimeout(failTimer.current);
    };
  }, [activeIndex]);

  // Keep the highlighted row in view as navigation moves it down the list.
  useEffect(() => {
    if (open) activeItemRef.current?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  // Escape closes; arrow keys step through the queue.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  // Lock scrolling on the whole document (both html and body) while open, and
  // pad for the removed scrollbar so the background doesn't shift.
  useEffect(() => {
    if (!open) return;
    const { body, documentElement: html } = document;
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const prev = {
      bodyOverflow: body.style.overflow,
      htmlOverflow: html.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
    return () => {
      body.style.overflow = prev.bodyOverflow;
      html.style.overflow = prev.htmlOverflow;
      body.style.paddingRight = prev.paddingRight;
    };
  }, [open]);

  // Move focus to the close button when the modal opens.
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && activeIndex !== null && (
        <motion.div
          className="vm-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="vm-card"
            role="dialog"
            aria-modal="true"
            aria-label={`${speakers[activeIndex].name}: ${speakers[activeIndex].title}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              ref={closeRef}
              type="button"
              className="vm-close"
              onClick={onClose}
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            {/* Left column: player + speaker block */}
            <div className="vm-main">
              <div className="vm-player">
                {embedFailed ? (
                  <a
                    className="vm-player-fallback"
                    href={speakers[activeIndex].youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={thumb(speakers[activeIndex].youtubeUrl)} alt="" />
                    <span className="vm-player-fallback-overlay">
                      <span className="vm-player-fallback-play">
                        <Play size={26} fill="currentColor" />
                      </span>
                      <span className="vm-player-fallback-text">
                        Watch on YouTube
                        <ExternalLink size={15} />
                      </span>
                    </span>
                  </a>
                ) : (
                  <iframe
                    key={activeIndex}
                    src={`https://www.youtube.com/embed/${getYouTubeId(
                      speakers[activeIndex].youtubeUrl,
                    )}?autoplay=1&rel=0`}
                    title={speakers[activeIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={handleEmbedLoad}
                    onError={() => setEmbedFailed(true)}
                  />
                )}
                <button
                  type="button"
                  className="vm-nav-btn vm-nav-btn--prev"
                  onClick={() => step(-1)}
                  aria-label="Previous talk"
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  type="button"
                  className="vm-nav-btn vm-nav-btn--next"
                  onClick={() => step(1)}
                  aria-label="Next talk"
                >
                  <ChevronRight size={26} />
                </button>
              </div>

              <div className="vm-speaker">
                <img
                  className="vm-headshot"
                  src={speakers[activeIndex].image}
                  alt={speakers[activeIndex].name}
                  loading="lazy"
                />
                <div className="vm-speaker-text">
                  <h3 className="vm-talk-title">{speakers[activeIndex].title}</h3>
                  <p className="vm-speaker-name">
                    {speakers[activeIndex].name}
                    <span className="vm-speaker-role"> · {speakers[activeIndex].jobTitle}</span>
                  </p>
                  <p className="vm-bio">{speakers[activeIndex].bio}</p>
                  <p className="vm-description">{speakers[activeIndex].description}</p>
                  <a
                    className="vm-yt-link"
                    href={speakers[activeIndex].youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch on YouTube
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: fixed playlist order; the highlight tracks playback. */}
            <div className="vm-playlist" aria-label="Up next">
              <p className="vm-playlist-heading">Up next</p>
              <ul className="vm-playlist-list">
                {speakers.map((speaker, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <li key={speaker.name} ref={isActive ? activeItemRef : undefined}>
                      <button
                        type="button"
                        className={`vm-item${isActive ? " vm-item--active" : ""}`}
                        onClick={() => onSelect(index)}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span className="vm-item-thumb">
                          <img src={thumb(speaker.youtubeUrl)} alt="" loading="lazy" />
                        </span>
                        <span className="vm-item-text">
                          {isActive && (
                            <span className="vm-item-badge">
                              <Play size={9} fill="currentColor" />
                              Now playing
                            </span>
                          )}
                          <span className="vm-item-title">{speaker.title}</span>
                          <span className="vm-item-name">{speaker.name}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
