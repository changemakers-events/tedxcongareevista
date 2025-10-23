import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Lightbulb, Target, Users, Heart } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photoUrl?: string; // optional headshot
};

export function AboutPage() {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "We celebrate bold ideas and creative thinking that challenge the status quo" },
    { icon: Target, title: "Impact", description: "We're committed to ideas that create meaningful change in our community" },
    { icon: Users, title: "Inclusivity", description: "We believe diverse perspectives lead to richer conversations and better solutions" },
    { icon: Heart, title: "Passion", description: "We're driven by genuine enthusiasm for ideas that inspire and transform" },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Shyam Ganesh Babu",
      role: "Lead Organizer",
      bio: `Shyam Ganesh Babu is a student at the University of South Carolina pursuing a career in healthcare. A Columbia native, he takes pride in the incredible people and ideas emerging from the city.
He is the founder of MedElem, a program that delivers hands-on health education to underserved communities, and PhysiLink, a mentorship platform that connects pre-health students with physicians. Shyam’s work is driven by a passion for healthcare education, leadership, and service. He believes in innovation, impact, grassroots action, and breaking barriers.`,
    },
    {
      name: "Darssan Eswaramoorthi",
      role: "Executive Producer",
      bio: `Darssan L. Eswaramoorthi is a senior at the University of South Carolina majoring in Computer Engineering, with research spanning Hybrid AI and hardware cybersecurity. Passionate about creating opportunities for others, he leads initiatives that spotlight people’s strengths, from co-organizing TEDxCongaree Vista to founding and growing organizations that connect students with industry, service, and leadership experiences. His work bridges technology, community, and creativity, aiming to empower individuals to share ideas, develop skills, and make a lasting impact.`,
    },
    {
      name: "Luke Jannazzo",
      role: "Event Manager",
      bio: `Luke Jannazzo is a junior Computer Engineering student at the University of South Carolina, with professional experience spanning state government, startups, and small businesses. He currently serves as Event Manager for TEDxCongaree Vista, overseeing day-of logistics, ticketing, venue procurement, and catering.
He is an introductory physics teaching assistant, and serves on the executive board of Kappa Theta Pi, connecting nonprofits with students to provide technology consulting free of charge. He is passionate about the intersection of technology, business, finance, and world issues, and strives to have an impact on these areas.`,
    },
    {
      name: "Sai Varun Nallu",
      role: "Sponsorships & Budget Director",
      bio: `Sai Varun Nallu is a Pre-Medical student at the University of South Carolina Honors College and a Neuroscience major. He currently serves as the Sponsorships and Budget Director for TEDxCongaree Vista. Passionate about connecting vision with impact, Sai wants to help bring transformative ideas to life by ensuring the resources behind each TEDx talk match the power of its message.
He is highly involved both on campus, throughout the city of Columbia, and in the state of South Carolina. Sai is committed to building stronger, more informed communities. Through a combination of service, collaboration, and advocacy, he wants to create spaces where voices are amplified and change takes root.`,
    },
    {
      name: "Simran Tippabhatla",
      role: "Marketing Director",
      bio: `Simran Tippabhatla is a senior Biological Sciences student at the University of South Carolina pursuing a career in healthcare. She currently serves as the Marketing and Promotion Director of TEDxCongaree Vista.
On campus, she is a peer leader for the school’s University 101 program, and serves on multiple executive boards for both cultural and healthcare organizations. Passionate about rural healthcare disparities and healthcare education, she hopes to empower others to serve their communities.`,
    },
    {
      name: "Owen Coulam",
      role: "Curation Director",
      bio: `Owen Coulam is a student at the University of South Carolina, where he is pursuing a career in the tech industry. He currently serves as the Editorial and Communications Director for TEDxCongaree Vista. Passionate about technology and entrepreneurship, Owen is focused on creating space and support for changemakers who turn bold ideas into real-world impact.
On campus, he leads Kappa Theta Pi, a philanthropic organization that provides tech solutions to nonprofits, helping mission-driven groups expand their reach through innovation and collaboration. He believes changemakers are defined not by titles, but by the problems they choose to solve, and through this TEDx event, he hopes to elevate voices building smarter systems, reimagining industries, and driving meaningful change.`,
    },
    {
      name: "Vaishali Allibada",
      role: "Associate Curation Director",
      bio: `Vaishali Allibada is a freshman Engineering student at the University of South Carolina – Columbia. She serves as the Associate Director of Curation and Sponsorships & Partnerships Manager for TEDxCongaree Vista, where she helps spotlight innovative voices in STEM and create platforms for students and changemakers to share their work.
On campus, Vaishali is a STEM Signing Day Honoree, University Scholar, and undergraduate researcher in the ARTS-Lab. She is active in the Society of Women Engineers (SWE) and Engineers Without Borders, contributing to projects that apply engineering to real-world challenges. Passionate about using technology to drive innovation, she seeks to empower others to think creatively, solve problems, and make meaningful contributions to STEM and the wider Columbia community.`,
    },
    {
      name: "Mohin Amin",
      role: "Sponsorships Manager",
      bio: `Mohin Amin is a junior at the University of South Carolina Honors College, majoring in Cardiovascular Technology on the pre-med track. As a Sponsorships Manager for TEDxCongaree Vista, Mohin is passionate about building partnerships and securing resources that create a platform where every speaker’s voice can be heard and amplified. Through this work, he hopes to bring about meaningful change within the community and beyond.
He is actively involved in campus leadership through Delta Epsilon Psi Fraternity, Inc., Alpha Epsilon Delta, NMDP, the Indian Cultural Organization, and as an Ambassador for the College of Arts and Sciences. In addition to his leadership roles, he conducts undergraduate research in the Webb Lab, focusing on the effects of hypertension and vascular dysfunction on cardiovascular disease.`,
    },
    {
      name: "Zayd Kidwai",
      role: "Sponsorships Manager",
      bio: `Zayd Kidwai is a freshman at the University of South Carolina Honors College and a BARSC-M.D. major. He currently works in sponsorship outreach within TEDxCongaree Vista. Having directed his own TEDx Youth event last year in Greenville, Zayd is passionate about bringing “ideas worth spreading” to the broader Columbia community.
Beyond that, Zayd serves as the Health and Safety Committee Chair in USC Student Government and as a research assistant in the NeuroSyntax Lab at the Arnold School of Public Health. He believes that advocacy is the core of creating change in our communities, and it is through this value that he hopes to encourage others to do the same.`,
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
            <p className="text-xl text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
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
        <div className="max-w-7xl mx-auto">
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

          <TeamGridInlineBio teamMembers={teamMembers} />
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
              <span className="text-black dark:text-white">
                TED is a nonprofit organization devoted to Ideas Worth Spreading, usually in the form of short, powerful talks (18 minutes or fewer).
              </span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/**
 * Renders 3 columns (lg+) of cards. When a card is active, its bio is inserted
 * directly under that card in the SAME column (pushes items below in that column).
 * On small screens it's a single column, so it appears under the card naturally.
 *
 * Flip `mode` to "overlay" if you prefer the bio to float over items below.
 */
function TeamGridInlineBio({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Change this to "overlay" if you want the bio to overlap items below instead of pushing them down.
  const mode: "push" | "overlay" = "push";

  // Distribute into 3 columns by index % 3 (works well for lg+).
  // On mobile (1 column), columns stack vertically so it still reads fine.
  const columns = useMemo(() => {
    const cols: TeamMember[][] = [[], [], []];
    teamMembers.forEach((m, i) => cols[i % 3].push(m));
    return cols;
  }, [teamMembers]);

  // Helper to recover the absolute index from column/row to compare with activeIdx
  const getAbsoluteIndex = (colIndex: number, rowIndex: number) => {
    // absoluteIndex is the position in the original teamMembers array
    // Walk through previous columns taking their lengths into account at each modulo position
    // Simpler: rebuild mapping once.
    const order: number[] = [];
    for (let i = 0; i < teamMembers.length; i++) order.push(i);
    const colBuckets: number[][] = [[], [], []];
    order.forEach((abs, i) => colBuckets[i % 3].push(abs));
    return colBuckets[colIndex][rowIndex];
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-6 relative">
          {col.map((member, rowIndex) => {
            const absoluteIndex = getAbsoluteIndex(colIndex, rowIndex);
            const isActive = activeIdx === absoluteIndex;

            return (
              <div key={member.name} className="relative">
                {/* Card */}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group w-full text-left rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer p-6 outline-none focus:ring-2 focus:ring-[#E62B1E]/60"
                  onMouseEnter={() => setActiveIdx(absoluteIndex)}
                  onFocus={() => setActiveIdx(absoluteIndex)}
                  onClick={() => setActiveIdx(isActive ? null : absoluteIndex)}
                  aria-expanded={isActive}
                >
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={`${member.name} headshot`}
                      className="w-20 h-20 rounded-full mb-4 object-cover ring-2 ring-[#E62B1E]/70"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full mb-4 bg-[#E62B1E]" />
                  )}
                  <h3 className="text-xl mb-1 text-black dark:text-white">{member.name}</h3>
                  <p className="text-[#E62B1E] font-medium">{member.role}</p>
                </motion.button>

                {/* Inline Bio (push or overlay) */}
                {mode === "push" ? (
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 8 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {isActive && (
                      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6">
                        <h4 className="text-lg font-semibold text-black dark:text-white">{member.name}</h4>
                        <p className="text-[#E62B1E] font-medium mb-3">{member.role}</p>
                        <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  // overlay mode: floats above items below, doesn't push
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : -6,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="pointer-events-none absolute left-0 right-0"
                    style={{ top: "100%", marginTop: "0.5rem", zIndex: 20 }}
                  >
                    {isActive && (
                      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 shadow-lg">
                        <h4 className="text-lg font-semibold text-black dark:text-white">{member.name}</h4>
                        <p className="text-[#E62B1E] font-medium mb-3">{member.role}</p>
                        <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
