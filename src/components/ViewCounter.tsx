import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * TEDxCongaree Vista — total YouTube playlist view counter.
 *
 * Renders the summed view count of every talk in our playlist as one large,
 * bold number.
 *
 * The count is fetched from our own serverless endpoint (`/api/youtube-views`),
 * which talks to the YouTube API using a SERVER-ONLY key. The key never reaches
 * the browser, so it needs no domain/referrer restriction. See:
 *   - api/youtube-views.js  (the endpoint)
 *   - Vercel env var:        YT_API_KEY  (not VITE_-prefixed)
 *
 * If the endpoint is unavailable (e.g. running plain `vite dev` with no
 * functions, or an API error), we show FALLBACK_TOTAL instead of 0.
 */

// Shown when the view total can't be fetched/calculated (endpoint down, API error, empty result).
const FALLBACK_TOTAL = "150,000+";

/** Counts up to `target` once, over `duration` ms, easing out. */
function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!target || started.current) return;
    started.current = true;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return value;
}

export function ViewCounter() {
  const [state, setState] = useState<{
    status: "loading" | "done" | "error";
    totalViews: number;
  }>({ status: "loading", totalViews: 0 });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/youtube-views")
      .then((res) => {
        if (!res.ok) throw new Error(`youtube-views endpoint failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ status: "done", totalViews: Number(data.totalViews ?? 0) });
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setState({ status: "error", totalViews: 0 });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const displayed = useCountUp(state.totalViews);

  // If the total can't be calculated, show a conservative fallback rather than 0.
  const failed = state.status === "error" || (state.status === "done" && state.totalViews <= 0);

  return (
    <section className="px-4 bg-transparent" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl shadow-[0_18px_55px_rgba(0,0,0,0.16)] bg-white text-center"
          style={{ padding: "0.75rem" }}
        >
          <p
            className="text-gray-600 mb-1"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          >
            Watched around the world
          </p>

          <div
            aria-live="polite"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1,
              color: "#E62B1E",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {state.status === "loading" ? (
              <span style={{ opacity: 0.35 }}>—</span>
            ) : failed ? (
              FALLBACK_TOTAL
            ) : (
              displayed.toLocaleString()
            )}
          </div>

          <p className="text-lg text-gray-700" style={{ marginTop: "0.25rem" }}>
            total views across our talks on YouTube
          </p>
        </motion.div>
      </div>
    </section>
  );
}
