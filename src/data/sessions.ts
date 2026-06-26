import ElisePartin from "../assets/speakers/ElisePartin.webp";
import TysonKBrown from "../assets/speakers/TysonKBrown.webp";
import IvanSegura from "../assets/speakers/IvanSegura.webp";
import ShannonIvey from "../assets/speakers/ShannonIvey.webp";
import AndrewNye from "../assets/speakers/AndrewNye.webp";
import KimberlySmith from "../assets/speakers/KimberlySmith.webp";
import FabioMatta from "../assets/speakers/FabioMatta.webp";
import MelissaBoylan from "../assets/speakers/MelissaBoylan.webp";
import AlvinKing from "../assets/speakers/AlvinKing.webp";
import ChristinaJones from "../assets/speakers/ChristinaJones.webp";
import RisdonNSlate from "../assets/speakers/RisdonNSlate.webp";
import MajdAbdallah from "../assets/speakers/MajdAbdallah.webp";
import KevinWilliams from "../assets/speakers/KevinWilliams.webp";
import TylerRobertson from "../assets/speakers/TylerRobertson.webp";
import JordanThomas from "../assets/speakers/JordanThomas.webp";
import MattVaadi from "../assets/speakers/MattVaadi.webp";

export type Speaker = {
  name: string;
  jobTitle: string;
  bio: string;
  title: string;
  description: string;
  image: string;
  youtubeUrl: string;
};

export type Session = {
  label: string;
  speakers: Speaker[];
};

export const sessions: Session[] = [
  {
    label: "Session 1: Laying the Groundwork",
    speakers: [
      { name: "Elise Partin",
        jobTitle: "Mayor of Cayce",
        bio: "Longest-serving mayor in the Midlands; U.S. State Department speaker and advocate for women in leadership.",
        title: "Are Women in Elected Office the Secret to Fixing Politics?",
        description: "Why communities thrive with more women leaders and the practical approach needed to elect and support them.",
        image: ElisePartin,
        youtubeUrl: "https://www.youtube.com/watch?v=z6DKJgM1Qzo" },

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

/** Flat list of every speaker across all sessions. */
export const allSpeakers: Speaker[] = sessions.flatMap((session) => session.speakers);

/** Extract a YouTube video id from a watch or youtu.be URL. */
export function getYouTubeId(url: string): string | null {
  return url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1] ?? null;
}
