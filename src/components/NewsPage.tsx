// NewsPage.tsx
import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";
import "./AboutPage.css";
import "./NewsPage.css";

const VIDEOS = [
  { href: "https://youtu.be/nfvWXBNgobg", id: "nfvWXBNgobg", title: "Meet the Team!" },
  { href: "https://www.youtube.com/watch?v=dLq_kUdfb9M", id: "dLq_kUdfb9M", title: "Do people in Columbia, SC know about TEDx? | Part 1" },
  { href: "https://www.youtube.com/watch?v=AwS1o-OA_-s", id: "AwS1o-OA_-s", title: "Live on Wis 10!" },
  { href: "https://www.youtube.com/watch?v=6Yj4aHgXcKE", id: "6Yj4aHgXcKE", title: "Do people in Columbia, SC know about TEDx? | Part 2" },
  { href: "https://www.youtube.com/watch?v=PYfPmI1uQdo", id: "PYfPmI1uQdo", title: "Speaker meet & greet!" },
];

// Sample press coverage — replace title/publication/date/excerpt/url with real
// articles as they are published.
const PRESS_ARTICLES = [
    {
        title: "USC Students Bring TEDxCongaree Vista to Columbia",
        publication: "WLTX",
        date: "March 9, 2026",
        excerpt: "USC students are organizing TEDxCongaree Vista, bringing changemakers and powerful ideas to Columbia for the first time in more than a decade.",
        url: "https://www.wltx.com/video/news/community/usc-students-bring-tedxcongaree-vista-to-columbia/101-dad372f2-dc6d-4d24-970a-53d1979a9b36",
    },
    {
        title: "TEDx Congaree Vista draws entrepreneurs and advocates Saturday in Columbia's Vista",
        publication: "WACH",
        date: "March 15, 2026",
        excerpt: "The inaugural TEDx Congaree Vista event drew local entrepreneurs, advocates, and community members to Columbia's Vista for a day of inspiring talks.",
        url: "https://wach.com/news/local/tedx-congaree-vista-draws-entrepreneurs-and-advocates-saturday-in-columbias-vista",
    },
    {
        title: "TEDx returns to Columbia, SC after 10-year absence",
        publication: "South Carolina Public Radio",
        date: "March 4, 2026",
        excerpt: "USC scholar Shyam Ganesh Babu and an organizing team are bringing TEDx back to Columbia after a ten-year absence to highlight local changemakers.",
        url: "https://www.southcarolinapublicradio.org/show/south-carolina-business-review/2026-03-04/tedx-returns-to-columbia-sc-after-10-year-absence",
    },
    {
        title: "TEDxCongaree Vista set for March 14",
        publication: "USC News & Events",
        date: "January 21, 2026",
        excerpt: "An undergraduate student team is planning and organizing TEDxCongaree Vista, a sold-out event taking place at the Columbia Metropolitan Convention Center.",
        url: "https://sc.edu/uofsc/posts/2026/01/tedx-student-organized-event-set-for-march.php",
    },
    {
        title: "Alumna and campus counselor will focus on sensory sensitivity in inaugural TEDxCongaree Vista",
        publication: "Floyd School of Medicine",
        date: "March 11, 2026",
        excerpt: "Christina Jones, a licensed counselor for Student Health and Well-Being, will present her lecture 'When the World is Too Loud: Creating Spaces for Belonging' to highlight support for neurodivergent individuals.",
        url: "https://sc.edu/study/colleges_schools/medicine/about_the_school/news/2026/c_r_alum_tedx.php",
    },
    {
        title: "Speaker applications now open for 2026 TEDxCongaree Vista inaugural event",
        publication: "Cola Daily",
        date: "August 15, 2025",
        excerpt: "Organizers have officially opened speaker applications for the 2026 inaugural TEDxCongaree Vista, seeking diverse voices and local changemakers.",
        url: "https://www.coladaily.com/communities/speaker-applications-now-open-for-2026-tedxcongaree-vista-inaugural-event/article_4885a099-e285-4ba0-a846-d4440f9eddaa.html",
    },
    {
        title: "TEDxCongaree Vista announces lineup",
        publication: "Cola Daily",
        date: "November 5, 2025",
        excerpt: "TEDxCongaree Vista organizers have officially announced the speaker lineup for their highly anticipated inaugural event in Columbia.",
        url: "https://www.coladaily.com/communities/tedxcongaree-vista-annouces-lineup/article_5e54d91d-9013-4532-a917-ce8bf7543e70.html",
    }
];

export function NewsPage() {
  const NEWS_URL = "https://news.tedxcongareevista.com";

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header (match AboutPage style) */}
      <section className="about-hero news-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="about-hero-title">
              Latest News
            </h1>
            <p className="about-hero-subtitle">
              Updates and announcements from the TEDxCongaree Vista team
            </p>
          </motion.div>
        </div>
      </section>


        {/* In the Press */}
        <section className="pt-20 pb-14 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="press-heading">In the Press</h2>
                    <p className="press-subheading">
                        Coverage of TEDxCongaree Vista from around the Midlands and beyond.
                    </p>

                    <div className="press-grid">
                        {PRESS_ARTICLES.map((article) => {
                            const isExternal = article.url.startsWith("http");
                            const linkProps = isExternal
                                ? { target: "_blank", rel: "noreferrer" }
                                : {};

                            return (
                                <article key={article.title} className="press-card">
                                    <p className="press-pub">{article.publication}</p>
                                    <a href={article.url} {...linkProps} className="press-title">
                                        {article.title}
                                    </a>
                                    <p className="press-date">{article.date}</p>
                                    <p className="press-excerpt">{article.excerpt}</p>
                                    <a href={article.url} {...linkProps} className="press-read">
                                        Read Article <ExternalLink size={14} />
                                    </a>
                                </article>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>

      {/* Body */}
      <section className="pt-20 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="news-layout">
            {/* LEFT: News Feed */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="news-left"
            >
              <div className="news-card rounded-2xl border border-gray-200 bg-transparent">
                <div className="news-card-header">
                  <div className="min-w-0">
                    <p className="news-card-title text-black">
                      News Feed
                    </p>
                    <p className="news-card-subtitle text-gray-600 truncate">
                      Latest posts from our newsletter site.
                    </p>
                  </div>

                  <a
                    href={NEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="news-open-link"
                  >
                    Open <ExternalLink size={16} />
                  </a>
                </div>

                <div className="news-iframe-wrap">
                  {/* No sandbox: the embedded Kit (ConvertKit) page is a first-party
                      JS app that needs full origin access to render and navigate;
                      a restrictive sandbox left it blank/white. */}
                  <iframe
                    title="TEDxCongaree Vista News"
                    src={NEWS_URL}
                    className="news-iframe"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Videos */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="news-right"
            >
              <div className="video-card border border-gray-200 bg-transparent">
                <div className="video-card-header">
                  <div className="min-w-0">
                    <p className="video-card-title text-black">
                      Videos
                    </p>
                    <p className="video-card-subtitle text-gray-600">
                      Watch & share.
                    </p>
                  </div>
                </div>

                <div className="video-list">
                  {VIDEOS.map((v) => (
                    <a
                      key={v.id}
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                      className="video-item"
                    >
                      <div className="video-thumb">
                        <img
                          src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                          alt={v.title}
                          loading="lazy"
                        />
                        <div className="video-thumb-overlay" />
                        <span className="video-play" aria-hidden="true">
                          <Play size={16} />
                        </span>
                      </div>

                      <div className="video-meta">
                        <div className="video-title text-black">
                          {v.title}
                        </div>
                        <div className="video-action text-gray-700">
                          Watch on YouTube <ExternalLink size={14} />
                        </div>
                      </div>
                    </a>
                  ))}

                  {VIDEOS.length === 0 && (
                    <div className="video-empty text-gray-700">
                      No videos yet.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}