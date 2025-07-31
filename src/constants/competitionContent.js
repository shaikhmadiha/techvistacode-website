import pythonShowdown from "../../public/python-showdown.webp";

import smartPhone from "../../public/reward-phone.webp";
import tablet from "../../public/reward-tablet.webp";
import smartWatch from "../../public/reward-smart-watch.webp";
import money from "../../public/reward-money.webp";
import certificate from "../../public/reward-certificate.webp";

export const liveCodingArenaCards = [
  {
    poster: "/python-showdown.webp",
    posterAlt: "A green snake with python showdown title",
    eventDate: "2025-08-02",
    eventTitle: "Python Showdown",
    eventDescription: "Advanced scripting challenges.",
  },
  {
    poster: "/cybersecurity-clash.webp",
    posterAlt: "Shield with lock and a title cyber security clash",
    eventDate: "2025-09-09",
    eventTitle: "Cybersecurity Clash",
    eventDescription: "Pen-test puzzles & capture-the-flag.",
  },
  {
    poster: "/ai-ml-marathon.webp",
    posterAlt: "A robot running and ai ml marathon as title",
    eventDate: "2025-10-02",
    eventTitle: "AI/ML Marathon",
    eventDescription: "Model building under the clock.",
  },
];

export const trackOptionsCompetitionsRegister = [
  {
    value: "python-showdown",
    label: "Python Showdown",
  },
  {
    value: "cybersecurity-clash",
    label: "Cybersecurity Clash",
  },
  {
    value: "ai-ml-marathon",
    label: "AI/ML Marathon",
  },
];

export const flashCodingArenaPageContent = {
  pageHeroTitle: "Flash Coding Arena: Monthly Live Coding Battles",
  pageHeroSubTitle:
    "Test your skills in Python, Cybersecurity, and AI/ML challenges. Win exciting gadgets, cash prizes, and prestige. Next battle starts in",

  upcomingEventTitle: "Python Showdown",
  upcomingEventDate: "2025-08-02",
  upcomingEventPoster: pythonShowdown,
  upcomingEventPosterAlt:
    "A snake as the symbol of python language with title python showdown",
  upcomingEventPoints: [
    "Time-bound scripting challenges covering data processing, algorithmic puzzles, and automation scripts.",
    "Interactive leaderboard updates every 10 minutes.",
    "Live Q&A with expert mentors during the event.",
  ],
  fcaBannerTitle: "Flash Coding Arena",
  fcaBannerPoints: [
    "Monthly live coding competitions across four tracks: Bootcamp Hackathon, Python Showdown, Cybersecurity Clash, and AI/ML Marathon.",
    "Each month features a different track to keep challenges fresh and engaging.",
    "Open to all skill levels—participants receive real-time feedback and mentor support during events.",
  ],
};

export const competitionRewards = [
  {
    prizeRank: 1,
    rewardName: "Smart Phone",
    rewardPoster: smartPhone,
    rewardPosterAlt: "A smartphone",
  },
  {
    prizeRank: 2,
    rewardName: "Tablet",
    rewardPoster: tablet,
    rewardPosterAlt: "A tablet",
  },
  {
    prizeRank: 3,
    rewardName: "Smart Watch",
    rewardPoster: smartWatch,
    rewardPosterAlt: "A smart watch",
  },
  {
    prizeRank: 4,
    rewardName: "Money",
    rewardPoster: money,
    rewardPosterAlt: "Currency bundles",
  },
  {
    prizeRank: 5,
    rewardName: "Certificate",
    rewardPoster: certificate,
    rewardPosterAlt: "Winner Certificate",
  },
];
