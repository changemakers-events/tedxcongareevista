import { motion } from "motion/react";
import { Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../assets/2017ColumbiaSkylineTEDx.jpg";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: Calendar, label: "Date", value: "March 14, 2025", type: "text" },
    { icon: MapPin, label: "Location", value: "Columbia Metropolitan Convention Center", type: "link", link: "https://www.google.com/maps/search/?api=1&query=1101+Lincoln+St,+Columbia,+SC+29201" },
    { icon: Users, label: "Speakers", value: "16 Inspiring Voices", type: "button" },
  ];

  const handleStatClick = (stat: typeof stats[0]) => {
    if (stat.type === "link" && stat.link) {
      window.open(stat.link, "_blank");
    } else if (stat.type === "button" && stat.label === "Speakers" && onNavigate) {
      onNavigate("speakers");
    }
  };

  return (
    <div>
      {/* Hero Section with Sky View */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroImg}
            alt="Congaree Vista Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white dark:to-gray-900" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-white"
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl mb-6"
              style={{
                // heavier layered text-shadow for stronger contrast on hero image
                textShadow:
                  '0 4px 8px rgba(0,0,0,0.75), 0 10px 20px rgba(0,0,0,0.6), 0 2px 0 rgba(0,0,0,0.35)'
              }}
            >
              Ideas That <span className="text-[#E62B1E]">Transform</span>
            </h1>
            <p
              className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.65)' }}
            >
              Join us for an unforgettable journey through innovation, creativity, and inspiration
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                onClick={() => handleStatClick(stat)}
                className={`text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${stat.type !== "text" ? "cursor-pointer" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#E62B1E] rounded-full mb-4"
                >
                  <stat.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-gray-600 dark:text-gray-400 mb-2">{stat.label}</h3>
                <p className="text-2xl text-black dark:text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-black dark:text-white">
              Columbia's Premier <span className="text-[#E62B1E]">TEDx Event</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Help us bring a standard TEDx event back to Columbia, SC after 10 years!
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Fill out the interest form to register your interest in attending, sponsoring, or helping with our event. Completing the form will also subscribe you to our mailing list to get updates on the event, and be the first to know when tickets go on sale on November 1st.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Be sure to also follow us on social media to stay in the loop!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}