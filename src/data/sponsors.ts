const A = "https://www.tedxcongareevista.com/assets/";

export type Sponsor = { name: string; logo: string; url: string };
export type SponsorTier = { tier: string; sponsors: Sponsor[] };

export const sponsorTiers: SponsorTier[] = [
  {
    tier: "ChangeMaker Sponsors",
    sponsors: [
      { name: "The Design Studio", logo: `${A}theDesignStudio-i7FNj2vc.webp`, url: "https://sc.edu/study/colleges_schools/artsandsciences/visual_art_and_design/study/undergraduate/studio_art/graphics/course_experience/design_studio/" },
      { name: "LFTED Marketing Management", logo: `${A}lfted-BQie8wF-.webp`, url: "https://getlfted.com/" },
      { name: "USC Career Center", logo: `${A}careerCenter-BCDkgNee.webp`, url: "https://www.sc.edu/career" },
      { name: "Grace Outdoor", logo: `${A}grace-BULfU1g2.webp`, url: "https://graceoutdoor.com/" },
    ],
  },
  {
    tier: "Platinum Sponsors",
    sponsors: [
      { name: "Bethea Family Dentistry", logo: `${A}betheaFamilyDentistry-BcHGGGIn.webp`, url: "https://betheafamilydentistry.com/" },
      { name: "Dominion Energy", logo: `${A}dominionEnergy-Dqn4rX4Z.webp`, url: "https://www.dominionenergy.com/south-carolina" },
      { name: "Carolinas AAPI Business Alliance", logo: `${A}caba-ChEu733v.webp`, url: "https://www.cabausa.org/" },
    ],
  },
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "Venture X", logo: `${A}venture-HweaFdVK.webp`, url: "https://venturex.com/locations/usa/sc/downtown-columbia-sc/" },
    ],
  },
  {
    tier: "Silver Sponsors",
    sponsors: [
      { name: "Beyond The", logo: `${A}beyondThe-DVPMAnWK.webp`, url: "https://www.tedxcongareevista.com/sponsors" },
      { name: "Snaply Sites", logo: `${A}snaplySites-B5vcl-jg.webp`, url: "https://snaplysites.com/" },
      { name: "D. Nichole Davis", logo: `${A}dnd-DBLIJae3.webp`, url: "https://www.dnicholedavis.com/" },
      { name: "Carolina Screen Printers", logo: `${A}carolinaScreenPrinters-Kp8oizt9.webp`, url: "https://www.carolinascreenprinters.com/" },
      { name: "Cyberwoven", logo: `${A}cyberwoven-DVWzXXLc.webp`, url: "https://www.cyberwoven.com/" },
      { name: "SC Tamil Sangam", logo: `${A}scTamilSangam-B7Whzx5w.webp`, url: "https://www.sctamilsangam.org/" },
      { name: "Colorectal Cancer Prevention Network", logo: `${A}colorectalCancer-DfE9aEfF.webp`, url: "https://www.crcfacts.com/" },
      { name: "QC Kinetix", logo: `${A}qcKinetix-Yf80IpCU.webp`, url: "https://qckinetix.com/" },
    ],
  },
  {
    tier: "Bronze Sponsors",
    sponsors: [
      { name: "Villa Tronco", logo: `${A}villaTronco-B--kJo4R.webp`, url: "https://www.villatronco.com/" },
      { name: "Break Point", logo: `${A}breakPoint-DiJxEuEL.webp`, url: "https://www.breakpointcola.com/" },
      { name: "Palmetto Proactive Healthcare", logo: `${A}palmettoProactive-BqRiithD.webp`, url: "https://palmettoproactive.com/" },
      { name: "Metro Ramji", logo: `${A}ramji-CmWWtHT6.webp`, url: "https://metrorealtyllc.com/" },
      { name: "Sweetwaters Coffee & Tea", logo: `${A}sweetWaters-D84oNbgw.webp`, url: "https://www.sweetwaterscafe.com/sc-columbia-park-st/" },
    ],
  },
  {
    tier: "Production Sponsors",
    sponsors: [
      { name: "Synergymill", logo: `${A}synergyMill-2iIvBPjm.webp`, url: "https://www.synergymill.com/" },
      { name: "Cinematic Technologies", logo: `${A}cinematicTech-DpyBcecP.webp`, url: "https://www.cinematictechnologies.com/" },
      { name: "Ambient Media", logo: `${A}ambientMedia-DqitcN_8.webp`, url: "https://ambientmediasc.com/" },
      { name: "Outsourced", logo: `${A}outsourced-9rTkm99R.webp`, url: "https://www.outsourcedscale.com/" },
      { name: "Noreta", logo: `${A}noreta-zKfKBQjk.webp`, url: "https://www.noreta.com/" },
      { name: "Diesel Laptops", logo: `${A}dieselLaptops-D7IpH1tK.webp`, url: "https://www.diesellaptops.com/" },
    ],
  },
  {
    tier: "Premium Partners",
    sponsors: [
      { name: "Boyd Innovation", logo: `${A}boydInnovation-CqzJtxL_.webp`, url: "https://www.boydinnovation.org/" },
      { name: "Columbia OBO", logo: `${A}colaOBO-Cmh8sNwR.webp`, url: "https://www.obo.columbiasc.gov/" },
      { name: "ASME Columbia Section", logo: `${A}asmeStudentSection-BpDENhKt.webp`, url: "https://www.asme.org/communities/sections/columbia-sc" },
    ],
  },
  {
    tier: "City Partners",
    sponsors: [
      { name: "City of Columbia", logo: `${A}cityOfColumbia-DrZg7-W5.webp`, url: "https://www.columbiasc.gov/" },
      { name: "City of Cayce", logo: `${A}cayce-DluP6At0.webp`, url: "https://www.caycesc.gov/" },
    ],
  },
  {
    tier: "Promotional Partners",
    sponsors: [
      { name: "Columbia Connectors", logo: `${A}columbiaConnectors-DAJnOtz9.webp`, url: "https://www.columbiaconnectors.com/" },
      { name: "COR", logo: `${A}cor-BQ2rQaUX.webp`, url: "https://www.ourcor.org/" },
      { name: "Columbia Chamber", logo: `${A}columbiaChamber-Nu3LwF0L.webp`, url: "https://www.columbiachamber.com/" },
      { name: "South Carolina Humanities", logo: `${A}scHumanities-CteV0jpX.webp`, url: "https://schumanities.org/" },
      { name: "Cola Daily", logo: `${A}colaDaily-BRnZ-bjC.webp`, url: "https://www.coladaily.com/" },
    ],
  },
];
