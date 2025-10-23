import { motion } from "motion/react";
import { Lightbulb, Target, Users, Heart } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We celebrate bold ideas and creative thinking that challenge the status quo",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We're committed to ideas that create meaningful change in our community",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We believe diverse perspectives lead to richer conversations and better solutions",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're driven by genuine enthusiasm for ideas that inspire and transform",
    },
  ];

  const teamMembers = [
    { name: "Alex Thompson", role: "Event Director" },
    { name: "Jordan Lee", role: "Speaker Curator" },
    { name: "Casey Martinez", role: "Community Outreach" },
    { name: "Sam Parker", role: "Marketing & Communications" },
    { name: "Riley Chen", role: "Volunteer Coordinator" },
    { name: "Morgan Davis", role: "Sponsorship Director" },
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
              <span className="text-[#E62B1E]">About</span> TEDxCongaree Vista
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A locally organized event bringing together our community to share ideas worth spreading
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-black dark:text-white">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              TEDxCongaree Vista is an independently organized TED event that brings together thought leaders, innovators, and community members to share transformative ideas.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              In the spirit of "ideas worth spreading," we create a platform for deep discussions, meaningful connections, and inspiration that extends far beyond our event day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#E62B1E] rounded-full mb-6"
                >
                  <value.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl mb-3 text-black dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the passionate individuals making TEDxCongaree Vista possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#E62B1E] to-[#CC2619] rounded-full mx-auto mb-4" />
                <h3 className="text-xl mb-1 text-black dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TED Info */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center text-black dark:text-white">
            About <span className="text-[#E62B1E]">TEDx</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.
            </p>
            <p>
              These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
            </p>
            <p className="text-center pt-6">
              <span className="text-black dark:text-white">TED is a nonprofit organization devoted to Ideas Worth Spreading, usually in the form of short, powerful talks (18 minutes or fewer).</span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}