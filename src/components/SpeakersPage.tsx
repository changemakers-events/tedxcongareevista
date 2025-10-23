import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ✅ Import images so Vite resolves correct URLs
import female1 from "../assets/sample-speaker-female1.png";
import female2 from "../assets/sample-speaker-female2.png";
import male from "../assets/sample-speaker-male.png";

// If this file lives in src/pages/, change the imports above to:
// import female1 from "../../assets/sample-speaker-female1.png";
// import female2 from "../../assets/sample-speaker-female2.png";
// import male from "../../assets/sample-speaker-male.png";

export function SpeakersPage() {
  const speakers = [
    { name: "Kimberly Smith", title: "Founder, Health Evolve", topic: "From Hospital to Home: Reclaiming Americas Maternal Health Story", image: female1 },
    { name: "Melissa Boylan", title: "Family Physician, Direct Primary Care", topic: "The Doctor Will See You Now, For Real This Time", image: female2 },
    { name: "Andrew Nye", title: "Healthcare Operator", topic: "Nowhere to Go: The Coming Nursing Home Crisis", image: male },
    { name: "Risdon Nichols Slate", title: "Criminal Justice and Mental Health Advocate", topic: "Behind Bars and Beyond Stigma: Mental Health and Justice Reform", image: male },
    { name: "Kevin Williams", title: "Founder, Drawbridge Solutions", topic: "The Irreplaceable Spark: Why Wild Ideas Still Matter", image: male },
    { name: "Fabio Matta", title: "Structural Engineer and Researcher", topic: "Earthbound Innovation: Building Homes from the Ground Up", image: male },
    { name: "Christina Jones", title: "Designer and Neurodiversity Advocate", topic: "Rethinking Spaces Through Neurodivergent Eyes", image: female1 },
    { name: "Tyler Robertson", title: "CEO, Diesel Laptops", topic: "Leading When You Are Not in Charge", image: male },
    { name: "Tyson Keon Brown", title: "Community Builder, Project Oneway", topic: "Grow Up and Grow Old: Creating Cities of Lifelong Belonging", image: male },
    { name: "Alvin King", title: "Founder, Range Fore Hope", topic: "Teeing Off Trauma: Healing Veterans Through Golf", image: male },
    { name: "Jordan Thomas", title: "Youth Sports Advocate", topic: "The Sport Remedy: How Play Heals Youth", image: male },
    { name: "Majd Abdallah", title: "Founder, Foster Friendz", topic: "From Foster Child to Changemaker: A Blue Bears Story", image: male },
    { name: "Elise Partin", title: "Civic Leader", topic: "When Women Lead, Communities Flourish", image: female2 },
    { name: "Shannon Ivey", title: "Storyteller and Advocate", topic: "Elephants Care Better", image: female1 },
    { name: "Matt Vaadi", title: "Entrepreneur, guhroo", topic: "Mission Over Margin: The Ripple Effect of Generosity", image: male },
    { name: "Ivan Segura", title: "Community Advocate", topic: "Find Your Passion, Become a Pioneer", image: male },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl mb-6 text-black dark:text-white">
              Our <span className="text-[#E62B1E]">Speakers</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries, innovators, and changemakers who will share their groundbreaking ideas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[3/4] mb-4">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <ImageWithFallback src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/90 text-sm">{speaker.topic}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl mb-1 text-black dark:text-white">{speaker.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{speaker.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
