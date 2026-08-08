// AboutPage.tsx
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import "./AboutPage.css";
import "./NewsPage.css";

// ✅ Move these images into: src/assets/headshots/team/
import Shyam from "../assets/headshots/team/shyam.webp";
import Darssan from "../assets/headshots/team/darssan.webp";
import Luke from "../assets/headshots/team/luke.webp";
import Sai from "../assets/headshots/team/sai.webp";
import Simran from "../assets/headshots/team/simran.webp";
import Vaishali from "../assets/headshots/team/vaishali.webp";
import Mohin from "../assets/headshots/team/mohin.webp";
import Owen from "../assets/headshots/team/owen.webp";
import Amenah from "../assets/headshots/team/amenah.webp";
import Tyler from "../assets/headshots/team/tyler.webp";
import Tim from "../assets/headshots/team/tim.webp";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
};

export function AboutPage() {

  const volunteerFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScFrVyPWl-e2bKzhG4zqqTGjCIn4XrtUKUvkGjOpkvb5qpxUg/viewform?pli=1";

  const teamEmail = "info@tedxcongareevista.com";

  const whyTedxCopy = `TEDxCongaree Vista reflects not just the location of Columbia, but a spirit of connection, creativity, and growth that aligns with the mission of TEDx. Our theme, “ChangeMakers,” showcases local visionaries already making a difference and transforming Columbia through health education, innovative research, tech startups, or grassroots initiatives. We’re spotlighting community-driven ideas that have shown real impact and carry a clear vision for the future.

The name reflects both the cultural identity and geographic heart of Columbia, South Carolina. Together, they symbolize a spirit of connection, progress, and innovation.

TEDxCongaree Vista will expose attendees to new ways of thinking, unique viewpoints, and an interactive atmosphere filled with rich dialogue and activity. We aim to feature thought leaders from diverse fields and foster meaningful exchanges not only between speakers and the audience, but also among community members themselves.

By sharing ideas in this powerful and collaborative format, we will spark local and personal transformation, inspire change across communities, and celebrate how far we’ve come and where we’re going. By supporting us, you become part of a global movement while helping build something deeply local and lasting. You're not just funding a single event, you’re investing in a platform for innovation, inclusion, and impact.

Help us bring the most meaningful TEDx experience to life in the heart of Columbia. TEDxCongaree Vista is more than an event. It’s a reflection of who we are, and who we have the potential to become.

Let’s create something powerful, together.`;

  const teamMembers: TeamMember[] = [
    {
      name: "Shyam Ganesh Babu",
      role: "Lead Organizer",
      photoUrl: Shyam,
      bio: `Shyam Ganesh Babu is a graduate of the University of South Carolina pursuing a career in healthcare. A Columbia native, he takes pride in the incredible people and ideas emerging from the city.
He is the founder of MedElem, a program that delivers hands-on health education to underserved communities, and PhysiLink, a mentorship platform that connects pre-health students with physicians. Shyam’s work is driven by a passion for healthcare education, leadership, and service. He believes in innovation, impact, grassroots action, and breaking barriers.`,
    },
    {
      name: "Darssan Eswaramoorthi",
      role: "Executive Producer (Co-organizer)",
      photoUrl: Darssan,
      bio: `Darssan L. Eswaramoorthi is a graduate of the University of South Carolina with a B.S.E. Computer Engineering, with research spanning Hybrid AI and hardware cybersecurity. Passionate about creating opportunities for others, he leads initiatives that spotlight people’s strengths, from co-organizing TEDxCongaree Vista to founding and growing organizations that connect students with industry, service, and leadership experiences. His work bridges technology, community, and creativity, aiming to empower individuals to share ideas, develop skills, and make a lasting impact.`,
    },
    {
      name: "Luke Jannazzo",
      role: "Event Manager (Co-organizer)",
      photoUrl: Luke,
      bio: `Luke Jannazzo is a senior Computer Engineering student at the University of South Carolina, with professional experience spanning state government, startups, and small businesses. He currently serves as Event Manager for TEDxCongaree Vista, overseeing day-of logistics, ticketing, venue procurement, and catering. He also founded Inspire Columbia, the parent nonprofit organization of TEDxCongaree Vista.
He is an introductory physics teaching assistant, and serves as president of Kappa Theta Pi, an organization connecting nonprofits with students to provide technology consulting free of charge. He is passionate about the intersection of technology, business, finance, and world issues, and strives to have an impact on these areas.`,
    },
    {
      name: "Sai Varun Nallu",
      role: "Sponsorships & Budget Director",
      photoUrl: Sai,
      bio: `Sai Varun Nallu is a Pre-Medical student at the University of South Carolina Honors College and a Neuroscience major. He currently serves as the Sponsorships and Budget Director for TEDxCongaree Vista. Passionate about connecting vision with impact, Sai wants to help bring transformative ideas to life by ensuring the resources behind each TEDx talk match the power of its message.
He is highly involved both on campus, throughout the city of Columbia, and in the state of South Carolina. Sai is committed to building stronger, more informed communities. Through a combination of service, collaboration, and advocacy, he wants to create spaces where voices are amplified and change takes root.`,
    },
    {
      name: "Simran Tippabhatla",
      role: "Marketing Director",
      photoUrl: Simran,
      bio: `Simran Tippabhatla is a Biological Sciences graduate of the University of South Carolina pursuing a career in healthcare. She currently serves as the Marketing and Promotion Director of TEDxCongaree Vista.
On campus, she is a peer leader for the school’s University 101 program, and serves on multiple executive boards for both cultural and healthcare organizations. Passionate about rural healthcare disparities and healthcare education, she hopes to empower others to serve their communities.`,
    },
    {
      name: "Vaishali Allibada",
      role: "Curation Director",
      photoUrl: Vaishali,
      bio: `Vaishali Allibada is a Mechanical Engineering student at the University of South Carolina, with interests spanning engineering, biomedicine, clean energy and integrated systems modeling. A University Scholar and South Carolina STEM Signing Day Honoree, she is passionate about using engineering as a tool to solve complex challenges and create meaningful impact.
Driven by the intersection of innovation, service, and hands-on design, she engages in research and engineering organizations such as the American Society of Mechanical Engineers, where she collaborates on projects that connect technical knowledge with real-world applications. Her work bridges engineering, community, and impact, with the goal of developing solutions that improve lives and inspire others to engage with STEM.`,
    },
    {
      name: "Mohin Amin",
      role: "Sponsorships Manager",
      photoUrl: Mohin,
      bio: `Mohin Amin is a senior at the University of South Carolina Honors College, majoring in Cardiovascular Technology on the pre-med track. As a Sponsorships Manager for TEDxCongaree Vista, Mohin is passionate about building partnerships and securing resources that create a platform where every speaker’s voice can be heard and amplified. Through this work, he hopes to bring about meaningful change within the community and beyond.
He is actively involved in campus leadership through Delta Epsilon Psi Fraternity, Inc., Alpha Epsilon Delta, NMDP, the Indian Cultural Organization, and as an Ambassador for the College of Arts and Sciences. In addition to his leadership roles, he conducts undergraduate research in the Webb Lab, focusing on the effects of hypertension and vascular dysfunction on cardiovascular disease.`,
    },
    {
      name: "Tyler Zolkos",
      role: "Technical Producer",
      photoUrl: Tyler,
      bio: `Tyler Zolkos is a senior at the University of South Carolina majoring in Computer Science with a concentration in Cybersecurity. With years of experience in event production, lighting design, and graphic design, he brings both technical knowledge and creative vision to live events and visual storytelling. Tyler is passionate about using his skills in to create experiences that bring people together in Columbia.`
    },
    {
      name: "Dr. Amenah Salman",
      role: "Mentorship Director",
      photoUrl: Amenah,
      bio: `Amenah Salman is a full-time English professor at Midlands Technical College. She holds a PhD in Linguistics from the University of South Carolina, where she taught a variety of Linguistics and English courses from 2021 to 2025. 
      Her research in sociophonetics and underrepresented languages focuses on dialects that reflect marginalized communities, because she believes diversity isn't just about who's in the room; it's about whose voices we amplify and whose stories we choose to prioritize. She joined the TEDxCongaree Vista curation panel and mentorship team to help drive positive change in her community and beyond.`,
    },
    {
      name: "Owen Coulam",
      role: "Curation Director Emeritus",
      photoUrl: Owen,
      bio: `Owen Coulam is a student at the University of South Carolina, where he is pursuing a career in the tech industry. He formerly served as the Curation Director for TEDxCongaree Vista. Passionate about technology and entrepreneurship, Owen is focused on creating space and support for changemakers who turn bold ideas into real-world impact.
On campus, he founded Kappa Theta Pi, a philanthropic organization that provides tech solutions to nonprofits, helping mission-driven groups expand their reach through innovation and collaboration. He believes changemakers are defined not by titles, but by the problems they choose to solve, and through this TEDx event, he hopes to elevate voices building smarter systems, reimagining industries, and driving meaningful change.`,
    },
    {
      name: "Timothy George",
      role: "Curation Assistant",
      photoUrl: Tim,
      bio: "Tim George is a student at the University of South Carolina pursuing a career in medicine. Passionate about building systems that expand access to care, he is a co-founder of Gamecock EMS, a student-led emergency medical service dedicated to improving response times to on-campus emergencies while providing certified EMTs at USC with opportunities for hands on experience. Furthermore, he is currently developing a peer support mental health hotline aimed at improving student well-being by allowing students in need to connect with peers for accessible, relatable support. Tim also works as an EMT in Columbia, where he serves the community by responding to medical emergencies across the city. His academic work spans multiple disciplines, including cardiovascular research at the Cardiovascular Translational Research Center, immunology research at the Georgia Cancer Center, and public health research exploring how temporal framing in nicotine warning labels influences perception among smokers. Tim served as a curation assistant for TEDxCongaree Vista 2026, where he helped review over 200 speaker applications and played a key role in shaping a final cohort of 16 speakers. His work is driven by a belief in thoughtful storytelling and community impact.",

    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* HERO / WHY TEDX */}
      <section className="about-hero news-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="about-hero-title">
              Why TEDxCongaree Vista?
            </h1>
            <p className="about-hero-subtitle">
              A locally organized event bringing together our community to share ideas worth spreading
            </p>

            <div className="about-hero-divider" />

            <div className="about-hero-copy">
              {whyTedxCopy}
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl mb-6 text-black">Our Organizing Team</h2>
          </motion.div>

          <TeamGridSpeakerStyle teamMembers={teamMembers} />
        </div>
      </section>

      {/* Volunteers CTA + Nonprofit Info */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="volunteer-section"
          >
            <div className="volunteer-card rounded-2xl border border-gray-200 bg-white">
              <h2 className="text-3xl md:text-4xl mb-4 text-black">
                Join us as a <span className="text-[#E62B1E]">Volunteer</span> or <span className="text-[#E62B1E]">Emcee</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are looking for additional volunteers and emcees to join our team for the day of the event!
                If you are interested in either of these, please fill out this form.
              </p>

              <div className="button-group">
                <a
                  href={volunteerFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="volunteer-form-btn bg-[#E62B1E] text-white"
                >
                  Volunteer / Emcee Form <ArrowRight size={18} />
                </a>
                <a
                  href={`mailto:${teamEmail}`}
                  className="email-btn border-gray-200 text-black hover:bg-gray-50"
                >
                  <Mail size={18} /> Email Us
                </a>
              </div>

              <p className="email-text text-base text-gray-600">
                With questions, please email{" "}
                <a className="text-[#E62B1E] font-semibold" href={`mailto:${teamEmail}`}>
                  {teamEmail}
                </a>
                .
              </p>
            </div>

            <div className="nonprofit-card rounded-2xl border border-gray-200 bg-white">
              <h3 className="text-2xl md:text-3xl mb-4 text-black">A 100% volunteer-driven nonprofit</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                TEDxCongaree Vista was operated by Inspire Columbia, a South Carolina 501(c)3 nonprofit and 100% volunteer-driven
                organization. Our team dedicates time, energy, and creativity to build a platform that brings people together
                through the power of change. Funds raised through sponsorships and ticket sales stay right here in the local
                community, helping cover essential costs like printing, signage, promotion, audio/visual needs, food, and venue
                expenses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TED Info */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center text-black">
            About <span className="text-[#E62B1E]">TEDx</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together
              to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion
              and connection.
            </p>
            <p>
              These local, self-organized events are branded TEDx, where x = independently organized TED event.
                The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
            </p>
            <p className="text-center pt-6">
              <span className="text-black">
                TED is a nonprofit organization devoted to Ideas Worth Spreading, usually in the form of short, powerful talks
                (18 minutes or fewer).
              </span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/**
 * Team grid styled like SpeakersPage:
 * - Large square photo cards
 * - Hover overlay treatment
 * - Click to expand bio below card (push mode)
 */
function TeamGridSpeakerStyle({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const columns = useMemo(() => {
    const cols: TeamMember[][] = [[], [], []];
    teamMembers.forEach((m, i) => cols[i % 3].push(m));
    return cols;
  }, [teamMembers]);

  const absIndexMap = useMemo(() => {
    const colBuckets: number[][] = [[], [], []];
    for (let i = 0; i < teamMembers.length; i++) colBuckets[i % 3].push(i);
    return colBuckets;
  }, [teamMembers]);

  const getAbsoluteIndex = (colIndex: number, rowIndex: number) => absIndexMap[colIndex][rowIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-8 relative">
          {col.map((member, rowIndex) => {
            const absoluteIndex = getAbsoluteIndex(colIndex, rowIndex);
            const isActive = activeIdx === absoluteIndex;

            return (
              <div key={member.name} className="group">
                {/* Card */}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setActiveIdx(isActive ? null : absoluteIndex)}
                  className="w-full text-left outline-none"
                  aria-expanded={isActive}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full rounded-xl overflow-hidden"
                    >
                      <ImageWithFallback
                        src={member.photoUrl || ""}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-lg font-bold leading-snug line-clamp-2">{member.name}</p>
                        <div className="my-3 h-px w-16 bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
                        <p className="pl-4 border-l-2 border-white/40 text-white/90 text-sm leading-relaxed line-clamp-2">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{member.role}</p>
                </motion.button>

                {/* Inline Bio (push) */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 10 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-black">{member.name}</h4>
                    <p className="text-[#E62B1E] font-medium mb-3">{member.role}</p>
                    <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}