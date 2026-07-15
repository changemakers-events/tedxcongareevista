// Vercel serverless function — returns the total YouTube view count across the
// TEDxCongaree Vista playlist.
//
// The API key stays on the server: set YT_API_KEY (NOT VITE_YT_API_KEY) in the
// Vercel project's Environment Variables. Because the key never ships to the
// browser, it does NOT need HTTP-referrer/website restrictions.
//
// Runs on Vercel's Node runtime (global fetch is available on Node 18+).

const PLAYLIST_ID = "PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I";

/**
 * Fetches every video ID in the playlist (paginated), then sums their view
 * counts in batched calls (videos.list accepts up to 50 IDs per request).
 */
async function fetchPlaylistViews(apiKey) {
  const videoIds = [];
  let pageToken = "";

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.search = new URLSearchParams({
      part: "contentDetails",
      playlistId: PLAYLIST_ID,
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

  let totalViews = 0;
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50);
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.search = new URLSearchParams({
      part: "statistics",
      id: batch.join(","),
      key: apiKey,
    }).toString();

    const res = await fetch(url);
    if (!res.ok) throw new Error(`videos request failed: ${res.status}`);
    const data = await res.json();

    for (const v of data.items ?? []) {
      totalViews += Number(v.statistics?.viewCount ?? 0);
    }
  }

  return totalViews;
}

module.exports = async function handler(_req, res) {
  const apiKey = process.env.YT_API_KEY;
  if (!apiKey) {
    console.error("youtube-views: YT_API_KEY is not set");
    res.status(500).json({ error: "missing_key" });
    return;
  }

  try {
    const totalViews = await fetchPlaylistViews(apiKey);
    // Cache at Vercel's edge so we hit the YouTube API at most ~once/hour no
    // matter how much traffic the page gets (protects the daily quota).
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ totalViews });
  } catch (err) {
    console.error("youtube-views failed:", err);
    res.status(502).json({ error: "fetch_failed" });
  }
};
