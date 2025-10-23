import { motion } from "motion/react";
import { Building2, Sparkles, Star } from "lucide-react";

export function SponsorsPage() {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      icon: Sparkles,
      color: "bg-gradient-to-br from-gray-100 to-gray-200",
      sponsors: ["Innovation Partners", "Tech Futures Group"],
    },
    {
      tier: "Gold Sponsors",
      icon: Star,
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      sponsors: ["Creative Solutions Inc", "Vista Development", "Future Minds Foundation"],
    },
    {
      tier: "Silver Sponsors",
      icon: Building2,
      color: "bg-gradient-to-br from-slate-50 to-slate-100",
      sponsors: [
        "Local Business Alliance",
        "Community First Bank",
        "Green Energy Solutions",
        "Digital Marketing Pro",
      ],
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
              Our <span className="text-[#E62B1E]">Sponsors</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thank you to our generous partners who make TEDxCongaree Vista possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * tierIndex, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <tier.icon className="text-[#E62B1E]" size={32} />
                <h2 className="text-3xl md:text-4xl text-center text-black dark:text-white">{tier.tier}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${tier.color} dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl flex items-center justify-center min-h-[160px] cursor-pointer shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <h3 className="text-xl text-center text-gray-800 dark:text-gray-200">{sponsor}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">
            Become a <span className="text-[#E62B1E]">Sponsor</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Partner with us to amplify ideas worth spreading and make a lasting impact in our community
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors"
          >
            Sponsorship Opportunities
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}