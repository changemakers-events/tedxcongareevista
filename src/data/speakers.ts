export type Session =
  | "Session 1: Laying the Groundwork"
  | "Session 2: Challenging the Status Quo"
  | "Session 3: Building Belonging"
  | "Session 4: Staying Aligned With Your Mission";

export type Speaker = {
  slug: string;
  name: string;
  title: string;
  talkTitle: string;
  talkDescription: string;
  session: Session;
  youtubeUrl: string;
  image: string;
};

const A = "https://www.tedxcongareevista.com/assets/";

export const speakers: Speaker[] = [
  // Session 1
  {
    slug: "elise-partin",
    name: "Elise Partin",
    title: "Mayor of Cayce",
    talkTitle: "One Thing That Can Make All Cities and Towns Better",
    talkDescription:
      "Why communities thrive with more women leaders and the practical approach needed to elect and support them.",
    session: "Session 1: Laying the Groundwork",
    youtubeUrl: "https://www.youtube.com/watch?v=z6DKJgM1Qzo",
    image: `${A}ElisePartin-B_fd4G3k.webp`,
  },
  {
    slug: "tyson-keon-brown",
    name: "Tyson Keon Brown",
    title: "Executive Director, Project OneWay",
    talkTitle: "Grow Up and Grow Old: Creating Cities of Lifelong Belonging",
    talkDescription:
      "Transforming cities by connecting young talent to real opportunities so they build and stay in the community long-term.",
    session: "Session 1: Laying the Groundwork",
    youtubeUrl: "https://www.youtube.com/watch?v=RmEnt9cTTFs",
    image: `${A}TysonKBrown-Przbv2En.webp`,
  },
  {
    slug: "ivan-segura",
    name: "Ivan Segura",
    title: "Director of Multicultural Affairs, SC Commission for Minority Affairs",
    talkTitle: "Find Your Passion: Become a Pioneer",
    talkDescription:
      "Inspiring Latinos to use passion for advocacy to build stronger communities and expand representation.",
    session: "Session 1: Laying the Groundwork",
    youtubeUrl: "https://www.youtube.com/watch?v=o_kDQlpO1fM",
    image: `${A}IvanSegura-3K5uJ72O.webp`,
  },
  {
    slug: "shannon-ivey",
    name: "Shannon Ivey",
    title: "Author, Founder of #whatshesaidproject",
    talkTitle: "Elephants Don't Ghost: What Colorectal Cancer Taught Me About Care",
    talkDescription:
      "What elephants and ring theory teach about centering and protecting vulnerable people and building stronger caring cultures.",
    session: "Session 1: Laying the Groundwork",
    youtubeUrl: "https://www.youtube.com/watch?v=SloEhSgZOQ4",
    image: `${A}ShannonIvey-CeCxvEFd.webp`,
  },
  // Session 2
  {
    slug: "andrew-nye",
    name: "Andrew Nye",
    title: "Founder and CEO, Qatalyst Health",
    talkTitle: "Nowhere to Go: The Coming Nursing Home Crisis",
    talkDescription:
      "The looming workforce shortage in long-term care and how tech and policy must work together to protect aging Americans.",
    session: "Session 2: Challenging the Status Quo",
    youtubeUrl: "https://www.youtube.com/watch?v=NIlRnd9zOAw",
    image: `${A}AndrewNye-BcwREMFG.webp`,
  },
  {
    slug: "kimberly-smith",
    name: "Kimberly Smith",
    title: "CEO, Health Evolve Technologies",
    talkTitle: "Reclaiming America's Birth Story",
    talkDescription:
      "Why maternal health outcomes improve when care moves beyond hospital walls into homes by blending devices, digital navigation, and social supports to close deadly gaps.",
    session: "Session 2: Challenging the Status Quo",
    youtubeUrl: "https://www.youtube.com/watch?v=1feskxwL3Q8",
    image: `${A}KimberlySmith-eqeng_-P.webp`,
  },
  {
    slug: "fabio-matta",
    name: "Fabio Matta",
    title: "Associate Professor, Civil and Environmental Engineering, USC",
    talkTitle: "From the Ground Up: Hazard-Resistant Homebuilding with Dirt",
    talkDescription:
      "Using reinforced local soil to create affordable, sustainable homes that outperform traditional structures in extreme weather.",
    session: "Session 2: Challenging the Status Quo",
    youtubeUrl: "https://www.youtube.com/watch?v=5S9-CGvSGJ8",
    image: `${A}FabioMatta-Dr9O4ADN.webp`,
  },
  {
    slug: "melissa-boylan",
    name: "Melissa Boylan, MD",
    title: "Family Medicine Physician, Noreta Family Medicine",
    talkTitle: "The Doctor Will See You Now, For Real This Time",
    talkDescription:
      "Why direct primary care strengthens doctor-patient trust, improves access, and reduces system burnout.",
    session: "Session 2: Challenging the Status Quo",
    youtubeUrl: "https://www.youtube.com/watch?v=dmNyUL71i0M",
    image: `${A}MelissaBoylan-BBzsqTwu.webp`,
  },
  // Session 3
  {
    slug: "alvin-king",
    name: "Alvin King",
    title: "Founder & Executive Director, Range Fore Hope Foundation",
    talkTitle: "FORE! Changing the Course of Community Healing",
    talkDescription:
      "How golf builds connection, restores identity, and supports healing for veterans and loved ones.",
    session: "Session 3: Building Belonging",
    youtubeUrl: "https://www.youtube.com/watch?v=lxLXdlaCLg8",
    image: `${A}AlvinKing-BCs6YgxO.webp`,
  },
  {
    slug: "christina-jones",
    name: "Christina Jones",
    title: "Licensed Professional Counselor, University of South Carolina",
    talkTitle: "When the World is Too Loud, Creating Spaces for Belonging",
    talkDescription:
      "Practical sensory environment changes — sound, light, and layout — that transform exclusion into belonging for neurodivergent people and everyone.",
    session: "Session 3: Building Belonging",
    youtubeUrl: "https://www.youtube.com/watch?v=j2Vgd4HUGn0",
    image: `${A}ChristinaJones-CRPU7yg4.webp`,
  },
  {
    slug: "risdon-slate",
    name: "Risdon Nichols Slate",
    title: "Professor Emeritus of Criminology, Florida Southern College",
    talkTitle: "The Criminalization of Mental Illness",
    talkDescription:
      "Personal disclosure and systemic reform to reduce stigma and divert individuals with mental illness from incarceration toward treatment.",
    session: "Session 3: Building Belonging",
    youtubeUrl: "https://www.youtube.com/watch?v=8EAYB0Ks1_A",
    image: `${A}RisdonNSlate-DJhZfjZt.webp`,
  },
  {
    slug: "majd-abdallah",
    name: "Majd Abdallah",
    title: "Founder, Foster Friendz",
    talkTitle: "Are We Doing Enough for Kids in Foster Care?",
    talkDescription:
      "A simple blue stuffed bear as a tool to raise awareness, ignite empathy, and mobilize community support for foster youth.",
    session: "Session 3: Building Belonging",
    youtubeUrl: "https://www.youtube.com/watch?v=-Hx-RFajucg",
    image: `${A}MajdAbdallah-BKsP_mDI.webp`,
  },
  // Session 4
  {
    slug: "kevin-williams",
    name: "Kevin Williams",
    title: "Co-Founder, Drawbridge Solutions",
    talkTitle: "The Struggle is The Cure",
    talkDescription:
      "Generative AI is derivative, which is why human creativity is more crucial than ever for original solutions and careers.",
    session: "Session 4: Staying Aligned With Your Mission",
    youtubeUrl: "https://www.youtube.com/watch?v=93Xr99du_IQ",
    image: `${A}KevinWilliams-SX8RCYp8.webp`,
  },
  {
    slug: "tyler-robertson",
    name: "Tyler Robertson",
    title: "Founder and CEO, Diesel Laptops",
    talkTitle: "Leading When You Are Not in Charge",
    talkDescription:
      "A practical leadership formula built on clarity, competence, character, and connection for influence without authority.",
    session: "Session 4: Staying Aligned With Your Mission",
    youtubeUrl: "https://www.youtube.com/watch?v=kCvdNUZ9d4w",
    image: `${A}TylerRobertson-G9n8fEiJ.webp`,
  },
  {
    slug: "jordan-thomas",
    name: "Jordan Thomas",
    title: "Co-Founder, share ONE love",
    talkTitle: "The Sport Remedy",
    talkDescription:
      "How sport biology and rhythm build regulation, connection, and resilience for youth on the margins.",
    session: "Session 4: Staying Aligned With Your Mission",
    youtubeUrl: "https://www.youtube.com/watch?v=BWs_jzqLK_0",
    image: `${A}JordanThomas-BJjrSvse.webp`,
  },
  {
    slug: "matt-vaadi",
    name: "Matt Vaadi",
    title: "CEO, guHRoo Payroll and HR",
    talkTitle: "Giving is the Most Selfish Thing You Can Do",
    talkDescription:
      "Giving early and often builds stronger companies, loyalty, and community impact.",
    session: "Session 4: Staying Aligned With Your Mission",
    youtubeUrl: "https://www.youtube.com/watch?v=STpMxUZo2Dc",
    image: `${A}MattVaadi-C7gO8O9X.webp`,
  },
];

export const sessions: Session[] = [
  "Session 1: Laying the Groundwork",
  "Session 2: Challenging the Status Quo",
  "Session 3: Building Belonging",
  "Session 4: Staying Aligned With Your Mission",
];

export function youtubeId(url: string): string {
  const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
  return m ? m[1] : "";
}

export function youtubeThumb(url: string): string {
  return `https://img.youtube.com/vi/${youtubeId(url)}/hqdefault.jpg`;
}
