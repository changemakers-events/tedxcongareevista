import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

// Dev-only: `vite dev` doesn't run the Vercel /api function, so serve
// /api/youtube-views locally using YT_API_KEY from .env. This runs ONLY under
// `vite dev` (apply: 'serve') — production still uses api/youtube-views.js.
const PLAYLIST_ID = 'PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Sum view counts across every video in the playlist. Throws on any failure so
// the caller can map it to a 502.
async function fetchTotalViews(apiKey: string): Promise<number> {
  if (!apiKey) throw new Error('YT_API_KEY missing from .env');

  const ids: string[] = [];
  let pageToken = '';
  do {
    const u = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    u.search = new URLSearchParams({
      part: 'contentDetails',
      playlistId: PLAYLIST_ID,
      maxResults: '50',
      pageToken,
      key: apiKey,
    }).toString();
    const r = await fetch(u);
    if (!r.ok) throw new Error(`playlistItems ${r.status}`);
    const d = await r.json();
    for (const it of d.items ?? []) ids.push(it.contentDetails.videoId);
    pageToken = d.nextPageToken ?? '';
  } while (pageToken);

  let totalViews = 0;
  for (let i = 0; i < ids.length; i += 50) {
    const u = new URL('https://www.googleapis.com/youtube/v3/videos');
    u.search = new URLSearchParams({
      part: 'statistics',
      id: ids.slice(i, i + 50).join(','),
      key: apiKey,
    }).toString();
    const r = await fetch(u);
    if (!r.ok) throw new Error(`videos ${r.status}`);
    const d = await r.json();
    for (const v of d.items ?? []) totalViews += Number(v.statistics?.viewCount ?? 0);
  }

  return totalViews;
}

function youtubeViewsDev(apiKey: string): Plugin {
  return {
    name: 'dev-youtube-views',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/youtube-views', async (_req, res) => {
        res.setHeader('Content-Type', 'application/json');
        try {
          const totalViews = await fetchTotalViews(apiKey);
          res.end(JSON.stringify({ totalViews }));
        } catch (err) {
          console.error('dev /api/youtube-views failed:', err);
          res.statusCode = 502;
          res.end(JSON.stringify({ error: 'fetch_failed' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Read the (server-only) key from .env; only passed to the dev middleware,
  // never into the client bundle.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), youtubeViewsDev(env.YT_API_KEY)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
