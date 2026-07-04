/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public (browser-restricted) YouTube Data API v3 key — see ViewCounter.tsx */
  readonly VITE_YT_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
