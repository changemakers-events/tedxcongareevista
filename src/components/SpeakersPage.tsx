import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import female1 from "../assets/sample-speaker-female1.png";
import female2 from "../assets/sample-speaker-female2.png";
import male from "../assets/sample-speaker-male.png";

import ElisePartin from "../assets/speakers/ElisePartin.jpg"
import TysonKBrown from "../assets/speakers/TysonKBrown.jpg"
import IvanSegura from "../assets/speakers/IvanSegura.jpg"
import ShannonIvey from "../assets/speakers/ShannonIvey.jpg"
import AndrewNye from "../assets/speakers/AndrewNye.jpg"
import KimberlySmith from "../assets/speakers/KimberlySmith.jpg"
import FabioMatta from "../assets/speakers/FabioMatta.jpg"
import MelissaBoylan from "../assets/speakers/MelissaBoylan.jpg"
import AlvinKing from "../assets/speakers/AlvinKing.jpg"
import ChristinaJones from "../assets/speakers/ChristinaJones.jpg"
import RisdonNSlate from "../assets/speakers/RisdonNSlate.jpg"
import MajdAbdallah from "../assets/speakers/MajdAbdallah.jpg"
import KevinWilliams from "../assets/speakers/KevinWilliams.jpg"
import TylerRobertson from "../assets/speakers/TylerRobertson.jpg"
import JordanThomas from "../assets/speakers/JordanThomas.jpg"
import MattVaadi from "../assets/speakers/MattVaadi.jpg"
import { title } from "process";


// If this file lives in src/pages/, change the imports above to:
// import female1 from "../../assets/sample-speaker-female1.png";
// import female2 from "../../assets/sample-speaker-female2.png";
// import male from "../../assets/sample-speaker-male.png";

export function SpeakersPage() {
  const speakers = [
    { name: "Elise Partin, Mayor of Cayce", bio: "Longest-serving mayor in the Midlands; US State Department speaker and advocate for women in leadership.", title: "It benefits us all to have more women in elected office. Let's make it happen", description: "Why communities thrive with more women leaders and the practical approach needed to elect and support them.", image: ElisePartin },
    { name: "Tyson Keon Brown", bio: "Executive Director, project OneWay", title: " ", description: " ", image: TysonKBrown },
    { name: "Ivan Segura", bio: "Director of Multicultural Affairs, SC Commission for Minority Affairs", title: " ", description: " ", image: IvanSegura },
    { name: "Shannon Ivey", bio: "Founder, #whatshesaidproject", title: " ", description: " ", image: ShannonIvey },
    { name: "Andrew Nye", bio: "Founder and CEO, Qatalyst Health", title: " ", description: " ", image: AndrewNye },
    { name: "Kimberly Smith", bio: "CEO, Health Evolve Technologies", title: " ", description: " ", image: KimberlySmith },
    { name: "Fabio Matta", bio: "Associate Professor, Civil and Evironmental Engineering, USC", title: " ", description: " ", image: FabioMatta },
    { name: "Melissa Boylan", bio: "MD, Family Medicine Physician, Noreta Family Medicine", title: " ", description: " ", image: MelissaBoylan },
    { name: "Alvin King", bio: "Founder and Executive Director, Range Fore Hope Foundation", title: " ", description: " ", image: AlvinKing },
    { name: "Christina Jones", bio: "Licensed Professional Counselor, University of South Carolina", title: " ", description: " ", image: ChristinaJones },
    { name: "Risdon Nichols Slate", bio: "Professor Emeritus of Criminology, Florida Southern College", title: " ", description: " ", image: RisdonNSlate },
    { name: "Majd Abdallah", bio: "Founder, Foster Friendz", title: " ", description: " ", image: MajdAbdallah }, 
    { name: "Kevin Williams", bio: "Co-Founder, Drawbridge Solutions", title: " ", description: " ", image: KevinWilliams },
    { name: "Tyler Robertson", bio: "Founder and CEO, Diesel Laptops", title: " ", description: " ", image: TylerRobertson },
    { name: "Jordan Thomas", bio: "Co-Founder, share ONE love", title: " ", description: " ", image: JordanThomas },
    { name: "Matt Vaadi", bio: "CEO, guHRoo Payroll and HR", title: " ", description: " ", image: MattVaadi },
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
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-square mb-4">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <ImageWithFallback src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-lg font-semibold leading-snug line-clamp-2">{speaker.title}</p>
                      <div className="my-3 h-px w-16 bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
                      <p className="pl-4 border-l-2 border-white/40 text-white/90 text-sm leading-relaxed line-clamp-3">{speaker.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {speaker.bio}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
