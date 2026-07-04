import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * TEDxCongaree Vista — total YouTube playlist view counter.
 *
 * Sums the view counts of every talk in our playlist and renders the total as
 * one large, bold number.
 *
 * SETUP (one time):
 * 1. Google Cloud console → create/select a project.
 * 2. Enable "YouTube Data API v3" (APIs & Services → Library).
 * 3. Create an API key (APIs & Services → Credentials).
 * 4. Because this key ships to the browser, restrict it:
 *      - Application restriction: "Websites" → add your domain(s).
 *      - API restriction: YouTube Data API v3 only.
 * 5. Put the key in a .env file at the repo root as:
 *      VITE_YT_API_KEY=your_key_here
 *    Without it, this section renders nothing.
 *
 * Quota cost: ~2 units per page load, out of a 10,000/day free quota.
 */

const PLAYLIST_ID = "PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I";
const API_KEY = import.meta.env.VITE_YT_API_KEY;

// Shown when the view total can't be fetched/calculated (no key, API error, empty result).
const FALLBACK_TOTAL = "100,000+";

type Video = { id: string; title: string; views: number };

/**
 * Fetches every video ID in the playlist (paginated, so it keeps working past
 * 50 talks), then fetches statistics for all of them in batched calls.
 */
export async function fetchPlaylistViews(
  playlistId = PLAYLIST_ID,
  apiKey = API_KEY,
): Promise<{ totalViews: number; videos: Video[] }> {
  // --- Step 1: get all video IDs in the playlist ---
  const videoIds: string[] = [];
  let pageToken = "";

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.search = new URLSearchParams({
      part: "contentDetails",
      playlistId,
      maxResults: "50",
      pageToken,
      key: apiKey,
    }).toString();

    const res = await fetch(url);
    if (!res.ok) throw new Error(`playlistItems request failed: ${res.status}`);
    const data = await res.json();

    for (const item of data.items ?? []) {
      videoIds.push(item.contentDetails.videoId);
    }
    pageToken = data.nextPageToken ?? "";
  } while (pageToken);

  // --- Step 2: get view counts (videos.list accepts up to 50 IDs per call) ---
  const videos: Video[] = [];
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50);
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.search = new URLSearchParams({
      part: "statistics,snippet",
      id: batch.join(","),
      key: apiKey,
    }).toString();

    const res = await fetch(url);
    if (!res.ok) throw new Error(`videos request failed: ${res.status}`);
    const data = await res.json();

    for (const v of data.items ?? []) {
      videos.push({
        id: v.id,
        title: v.snippet.title,
        views: Number(v.statistics.viewCount ?? 0),
      });
    }
  }

  const totalViews = videos.reduce((sum, v) => sum + v.views, 0);
  return { totalViews, videos };
}

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
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export function ViewCounter() {
  const [state, setState] = useState<{
    status: "loading" | "done" | "error";
    totalViews: number;
  }>({ status: "loading", totalViews: 0 });

  useEffect(() => {
    if (!API_KEY) {
      console.warn("ViewCounter: VITE_YT_API_KEY is not set — hiding the view counter.");
      setState({ status: "error", totalViews: 0 });
      return;
    }
    let cancelled = false;
    fetchPlaylistViews()
      .then(({ totalViews }) => {
        if (!cancelled) setState({ status: "done", totalViews });
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
