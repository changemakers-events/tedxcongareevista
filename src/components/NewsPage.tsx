import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewsPage() {
  const newsItems = [
    {
      title: "TEDxCongaree Vista 2025 Announced",
      date: "October 15, 2025",
      excerpt: "We're thrilled to announce the launch of TEDxCongaree Vista, bringing world-class ideas to our community.",
      image: "https://images.unsplash.com/photo-1560439514-e960a3ef5019",
      featured: true,
    },
    {
      title: "First Wave of Speakers Revealed",
      date: "October 10, 2025",
      excerpt: "Meet the incredible thinkers and innovators who will grace our stage with transformative ideas.",
      image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49",
      featured: false,
    },
    {
      title: "Volunteer Applications Now Open",
      date: "October 5, 2025",
      excerpt: "Join our passionate team and help create an unforgettable experience for attendees and speakers alike.",
      image: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69",
      featured: false,
    },
    {
      title: "Partnership with Local Innovators",
      date: "September 28, 2025",
      excerpt: "We're proud to partner with leading organizations committed to spreading ideas that matter.",
      image: "https://images.unsplash.com/photo-1529115253139-1510ae6b71b9",
      featured: false,
    },
    {
      title: "Early Bird Tickets Available",
      date: "September 20, 2025",
      excerpt: "Secure your spot at TEDxCongaree Vista with our limited early bird ticket release.",
      image: "https://images.unsplash.com/photo-1560439514-e960a3ef5019",
      featured: false,
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Latest <span className="text-[#E62B1E]">News</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with announcements, speaker reveals, and event updates
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-80 md:h-auto overflow-hidden"
                >
                  <ImageWithFallback
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </motion.div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-[#E62B1E] mb-4">
                    <Calendar size={18} />
                    <span>{newsItems[0].date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    {newsItems[0].excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#E62B1E] group-hover:gap-4 transition-all">
                    Read More <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[16/10] mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="inline-flex items-center gap-2 text-[#E62B1E] text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl mb-2 text-black dark:text-white group-hover:text-[#E62B1E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{item.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-[#E62B1E] text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">
            Stay <span className="text-[#E62B1E]">Informed</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Subscribe to our newsletter for the latest updates, speaker announcements, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-[#E62B1E] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}