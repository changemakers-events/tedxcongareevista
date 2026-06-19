export type NewsVideo = { title: string; url: string; id: string };

const id = (url: string) =>
  (url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/) || [, ""])[1];

const raw = [
  { title: "Meet the Team!", url: "https://youtu.be/nfvWXBNgobg" },
  { title: "Do people in Columbia, SC know about TEDx? | Part 1", url: "https://www.youtube.com/watch?v=dLq_kUdfb9M" },
  { title: "Live on WIS 10!", url: "https://www.youtube.com/watch?v=AwS1o-OA_-s" },
  { title: "Do people in Columbia, SC know about TEDx? | Part 2", url: "https://www.youtube.com/watch?v=6Yj4aHgXcKE" },
  { title: "Speaker Meet & Greet!", url: "https://www.youtube.com/watch?v=PYfPmI1uQdo" },
];

export const newsVideos: NewsVideo[] = raw.map((v) => ({ ...v, id: id(v.url) }));
