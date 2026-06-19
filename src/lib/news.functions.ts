import { createServerFn } from "@tanstack/react-start";

export type NewsPost = {
  id: number;
  title: string;
  url: string;
  publishedAt: string;
  timeAgo: string;
  thumbnailUrl: string;
  introContent: string;
  readingTime: number;
};

export const getNewsPosts = createServerFn({ method: "GET" }).handler(async (): Promise<NewsPost[]> => {
  try {
    const res = await fetch("https://news.tedxcongareevista.com/", {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const html = await res.text();
    const m = html.match(/window\.__PROPS__\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
    if (!m) return [];
    const props = JSON.parse(m[1]);
    const posts = (props.recentPosts ?? []) as any[];
    return posts.map((p) => ({
      id: p.id,
      title: p.title,
      url: p.url,
      publishedAt: p.publishedAt,
      timeAgo: p.timeAgo,
      thumbnailUrl: p.thumbnailUrl,
      introContent: p.introContent,
      readingTime: p.readingTime,
    }));
  } catch (e) {
    return [];
  }
});
