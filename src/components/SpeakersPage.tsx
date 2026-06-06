import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import "./AboutPage.css";
import "./NewsPage.css"

import ElisePartin from "../assets/speakers/ElisePartin.webp"
import TysonKBrown from "../assets/speakers/TysonKBrown.webp"
import IvanSegura from "../assets/speakers/IvanSegura.webp"
import ShannonIvey from "../assets/speakers/ShannonIvey.webp"
import AndrewNye from "../assets/speakers/AndrewNye.webp"
import KimberlySmith from "../assets/speakers/KimberlySmith.webp"
import FabioMatta from "../assets/speakers/FabioMatta.webp"
import MelissaBoylan from "../assets/speakers/MelissaBoylan.webp"
import AlvinKing from "../assets/speakers/AlvinKing.webp"
import ChristinaJones from "../assets/speakers/ChristinaJones.webp"
import RisdonNSlate from "../assets/speakers/RisdonNSlate.webp"
import MajdAbdallah from "../assets/speakers/MajdAbdallah.webp"
import KevinWilliams from "../assets/speakers/KevinWilliams.webp"
import TylerRobertson from "../assets/speakers/TylerRobertson.webp"
import JordanThomas from "../assets/speakers/JordanThomas.webp"
import MattVaadi from "../assets/speakers/MattVaadi.webp"


// If this file lives in src/pages/, change the imports above to:
// import female1 from "../../assets/sample-speaker-female1.webp";
// import female2 from "../../assets/sample-speaker-female2.webp";
// import male from "../../assets/sample-speaker-male.webp";

export function SpeakersPage() {
  const sessions = [
    {
      label: "Session 1: Laying the Groundwork",
      speakers: [
        { name: "Elise Partin",
          jobTitle: "Mayor of Cayce",
          bio: "Longest-serving mayor in the Midlands; U.S. State Department speaker and advocate for women in leadership.",
          title: "One Thing That Can Make All Cities and Towns Better",
          description: "Why communities thrive with more women leaders and the practical approach needed to elect and support them.",
          image: ElisePartin,
          youtubeUrl: "#" },

        { name: "Tyson Keon Brown",
          jobTitle: "Executive Director, Project OneWay",
          bio: "Youth and culture leader; consultant to the City of Columbia on generational inclusion and small business development.",
          title: "Grow Up and Grow Old: Creating Cities of Lifelong Belonging",
          description: "Transforming cities by connecting young talent to real opportunities so they build and stay in the community long-term.",
          image: TysonKBrown,
          youtubeUrl: "https://www.youtube.com/watch?v=RmEnt9cTTFs" },

        { name: "Ivan Segura",
          jobTitle: "Director of Multicultural Affairs, SC Commission for Minority Affairs",
          bio: "Latino advocate with 20 years of grassroots leadership; founder of Palmetto Luna Arts; ACLU National Board member.",
          title: "Find Your Passion: Become a Pioneer",
          description: "Inspiring Latinos to use passion for advocacy to build stronger communities and expand representation.",
          image: IvanSegura,
          youtubeUrl: "https://www.youtube.com/watch?v=o_kDQlpO1fM" },

        { name: "Shannon Ivey",
          jobTitle: "Author, Founder of #whatshesaidproject",
          bio: "Actor, director, TEDx alum, professional coach, founder of #whatshesaidproject, and stage III colorectal cancer survivor.",
          title: "Elephants Don’t Ghost: What Colorectal Cancer Taught Me About Care",
          description: "What elephants and ring theory teach about centering and protecting vulnerable people and building stronger caring cultures.",
          image: ShannonIvey,
          youtubeUrl: "https://www.youtube.com/watch?v=SloEhSgZOQ4" },
      ],
    },
    {
      label: "Session 2: Challenging the Status Quo",
      speakers: [
        { name: "Andrew Nye",
          jobTitle: "Founder and CEO, Qatalyst Health",
          bio: "Founder of Qatalyst Health; USC alumnus working to reduce nursing home administrative burden through AI.",
          title: "Nowhere to Go: The Coming Nursing Home Crisis",
          description: "The looming workforce shortage in long-term care and how tech and policy must work together to protect aging Americans.",
          image: AndrewNye,
          youtubeUrl: "https://www.youtube.com/watch?v=NIlRnd9zOAw" },

        { name: "Kimberly Smith",
          jobTitle: "CEO, Health Evolve Technologies",
          bio: "CEO of Health Evolve Technologies; former hospital system executive and past Board Chair of the Preeclampsia Foundation; PhD student in Global Health Equity.",
          title: "Reclaiming America's Birth Story",
          description: "Why maternal health outcomes improve when care moves beyond hospital walls into homes by blending devices, digital navigation, and social supports to close deadly gaps.",
          image: KimberlySmith,
          youtubeUrl: "https://www.youtube.com/watch?v=1feskxwL3Q8" },

        { name: "Fabio Matta",
          jobTitle: "Associate Professor, Civil and Environmental Engineering, USC",
          bio: "USC engineering professor researching hazard-resistant earth masonry.",
          title: "From the ground up: Hazard-resistant homebuilding with dirt",
          description: "Using reinforced local soil to create affordable, sustainable homes that outperform traditional structures in extreme weather.",
          image: FabioMatta,
          youtubeUrl: "https://www.youtube.com/watch?v=5S9-CGvSGJ8" },

        { name: "Melissa Boylan, MD",
          jobTitle: "Family Medicine Physician, Noreta Family Medicine",
          bio: "Family physician and founder of Noreta Family Medicine, using the direct primary care model.",
          title: "The Doctor Will See You Now, For Real This Time",
          description: "Why direct primary care strengthens doctor-patient trust, improves access, and reduces system burnout.",
          image: MelissaBoylan,
          youtubeUrl: "https://www.youtube.com/watch?v=dmNyUL71i0M" },
      ],
    },
    {
      label: "Session 3: Building Belonging",
      speakers: [
        { name: "Alvin King",
          jobTitle: "Founder and Executive Director, Range Fore Hope Foundation",
          bio: "Retired U.S. Army First Sergeant; founder of Range Fore Hope Foundation supporting veterans and families.",
          title: "FORE! Changing the Course of Community Healing",
          description: "How golf builds connection, restores identity, and supports healing for veterans and loved ones.",
          image: AlvinKing,
          youtubeUrl: "https://www.youtube.com/watch?v=lxLXdlaCLg8" },

        { name: "Christina Jones",
          jobTitle: "Licensed Professional Counselor, University of South Carolina",
          bio: "Licensed Professional Counselor and Supervisor at USC; neurodivergent advocate and trainer.",
          title: "When the World is Too Loud, Creating Spaces for Belonging",
          description: "Practical sensory environment changes, such as sound, light, and layout, that transform exclusion into belonging for neurodivergent people and everyone.",
          image: ChristinaJones,
          youtubeUrl: "https://www.youtube.com/watch?v=j2Vgd4HUGn0" },

        { name: "Risdon Nichols Slate",
          jobTitle: "Professor Emeritus of Criminology, Florida Southern College",
          bio: "Professor Emeritus of Criminology; national expert on mental illness and criminal justice; congressional witness and CIT trainer.",
          title: "The Criminalization of Mental Illness",
          description: "Personal disclosure and systemic reform to reduce stigma and divert individuals with mental illness from incarceration toward treatment.",
          image: RisdonNSlate,
          youtubeUrl: "https://www.youtube.com/watch?v=8EAYB0Ks1_A" },

        { name: "Majd Abdallah",
          jobTitle: "Founder, Foster Friendz",
          bio: "Foster care advocate; Clemson graduate; foster family recruiter; founder of Foster Friendz.",
          title: "Are We Doing Enough for Kids in Foster Care?",
          description: "A simple blue stuffed bear as a tool to raise awareness, ignite empathy, and mobilize community support for foster youth.",
          image: MajdAbdallah,
          youtubeUrl: "https://www.youtube.com/watch?v=-Hx-RFajucg" },
      ],
    },
    {
      label: "Session 4: Staying Aligned With Your Mission",
      speakers: [
        { name: "Kevin Williams",
          jobTitle: "Co-Founder, Drawbridge Solutions",
          bio: "Vistage Chair and tech leader; founder of Drawbridge Solutions and owner of Escapology Columbia.",
          title: "The Struggle is The Cure",
          description: "Generative AI is derivative, which is why human creativity is more crucial than ever for original solutions and careers.",
          image: KevinWilliams,
          youtubeUrl: "https://www.youtube.com/watch?v=93Xr99du_IQ" },

        { name: "Tyler Robertson",
          jobTitle: "Founder and CEO, Diesel Laptops",
          bio: "Founder who scaled Diesel Laptops from a $1,000 idea to a $100M+ company; blue-collar tech innovator.",
          title: "Leading When You Are Not in Charge",
          description: "A practical leadership formula built on clarity, competence, character, and connection for influence without authority.",
          image: TylerRobertson,
          youtubeUrl: "https://www.youtube.com/watch?v=kCvdNUZ9d4w" },

        { name: "Jordan Thomas",
          jobTitle: "Co-Founder, share ONE love",
          bio: "Youth justice and peacebuilding practitioner working with SCDJJ and Global Unities.",
          title: "The Sport Remedy",
          description: "How sport biology and rhythm build regulation, connection, and resilience for youth on the margins.",
          image: JordanThomas,
          youtubeUrl: "https://www.youtube.com/watch?v=BWs_jzqLK_0" },

        { name: "Matt Vaadi",
          jobTitle: "CEO, guHRoo Payroll and HR",
          bio: "Social entrepreneur; CEO of guHRoo; co-founder of GrowCo supporting responsible entrepreneurial growth.",
          title: "Giving is the Most Selfish Thing You Can Do",
          description: "Giving early and often builds stronger companies, loyalty, and community impact.",
          image: MattVaadi,
          youtubeUrl: "https://www.youtube.com/watch?v=STpMxUZo2Dc" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <section className="about-hero news-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="about-hero-title">
              Our Speakers
            </h1>
            <p className="about-hero-subtitle" style={{ marginBottom: '1.5rem' }}>
              Meet the visionaries, innovators, and changemakers who shared their groundbreaking ideas
            </p>
            <div className="flex justify-center" style={{ marginTop: '1.25rem' }}>
              <motion.a
                href="https://www.youtube.com/playlist?list=PL4tc6u_lEThgWNhC2UyfEtR5dPA-wCd1I"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  relative inline-flex items-center justify-center
                  px-10 sm:px-12 py-4
                  rounded-full
                  text-base sm:text-lg font-semibold tracking-wide
                  text-black
                  bg-white
                  border border-white/20
                  backdrop-blur-md
                  shadow-[0_18px_55px_rgba(0,0,0,0.35)]
                  hover:border-white/35
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                  transition-all duration-300
                "
              >
                {/* subtle inner gradient sheen */}
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-full
                    bg-gradient-to-r from-[#E62B1E]/35 via-white/10 to-[#8B1230]/30
                    opacity-70
                  "
                />
                <span className="relative flex items-center gap-2">
                  📹 Watch all talks on YouTube
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {sessions.map((session, sessionIndex) => (
            <div key={session.label}>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * sessionIndex, duration: 0.5 }}
                className="text-3xl font-bold text-center text-black mb-8"
              >
                {session.label}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {session.speakers.map((speaker, index) => {
                  const hasLink = speaker.youtubeUrl && speaker.youtubeUrl !== "#";

                  return (
                  <motion.div
                    key={speaker.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (sessionIndex * 4 + index), duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className={`group ${hasLink ? 'cursor-pointer' : ''}`}
                  >
                    <motion.a
                      href={hasLink ? speaker.youtubeUrl : undefined}
                      target={hasLink ? "_blank" : undefined}
                      rel={hasLink ? "noreferrer" : undefined}
                      aria-label={hasLink ? `Watch ${speaker.name}'s talk on YouTube` : undefined}
                      className={`relative block overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4 ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}
                      whileHover={hasLink ? { scale: 1.05 } : { }}
                      transition={{ duration: 0.6 }}
                      onClick={(e) => {
                        if (!hasLink) e.preventDefault();
                      }}
                    >
                      <motion.div
                          className="h-full w-full"
                        >
                          <ImageWithFallback src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white text-lg font-bold leading-snug line-clamp-2">{speaker.title}</p>
                            <div className="my-3 h-px w-16 bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
                            <p className="pl-4 border-l-2 border-white/40 text-white/90 text-sm leading-relaxed line-clamp-3">{speaker.description}</p>
                          </div>
                        </div>
                    </motion.a>
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                      {hasLink ? (
                        <a
                          href={speaker.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Watch ${speaker.name}'s talk on YouTube`}
                          className="inline-block hover:underline"
                        >
                          {speaker.name}
                        </a>
                      ) : (
                        <span className="inline-block">{speaker.name}</span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-500 text-center line-clamp-2">
                      {speaker.jobTitle}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {speaker.bio}
                    </p>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
