import { motion } from "motion/react";
import { Heart, Users, MessageSquare, Calendar } from "lucide-react";

export function SupportPage() {
  const supportWays = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of passionate volunteers and help create an unforgettable experience",
      action: "Sign Up to Volunteer",
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Your generous donation helps us continue spreading ideas that matter",
      action: "Make a Donation",
    },
    {
      icon: MessageSquare,
      title: "Spread the Word",
      description: "Share TEDxCongaree Vista with your network and help us reach more people",
      action: "Share Event",
    },
    {
      icon: Calendar,
      title: "Attend",
      description: "Be part of the live audience and experience the power of ideas firsthand",
      action: "Get Tickets",
    },
  ];

  const volunteerRoles = [
    "Event Day Coordination",
    "Speaker Support",
    "Registration & Guest Services",
    "Social Media & Marketing",
    "Photography & Videography",
    "Technical Support",
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
              <span className="text-[#E62B1E]">Support</span> Our Mission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Help us create a platform for ideas worth spreading in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Ways */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportWays.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#E62B1E] rounded-full mb-6"
                >
                  <way.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl mb-3 text-black dark:text-white">{way.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{way.description}</p>
                <button className="text-[#E62B1E] group-hover:underline">
                  {way.action} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">
              Volunteer <span className="text-[#E62B1E]">Roles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore opportunities to contribute your skills and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#E62B1E] transition-colors text-center cursor-pointer"
              >
                <p className="text-lg text-black dark:text-white">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">
            Your Impact <span className="text-[#E62B1E]">Matters</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Every contribution, whether time, resources, or advocacy, helps us create a space where innovative ideas can flourish and inspire positive change in our community. Together, we're building something extraordinary.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors"
          >
            Get Involved Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}