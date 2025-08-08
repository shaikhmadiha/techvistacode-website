import goldBadge from "../../public/gold-badge.svg";
import silverBadge from "../../public/silver-badge.svg";
import bronzeBadge from "../../public/bronze-badge.svg";

import schoolGirl from "../../public/avatars/highschool-girl.webp";
import schoolBoy from "../../public/avatars/highschool-boy.webp";
import collegeGirl from "../../public/avatars/college-girl.webp";

export const successMirrorGallery = [
  {
    name: "Priya Sharma",
    picture: "/avatars/college-girl.webp",
    designation: "Software Engineer",
    badge: goldBadge,
    badgeAlt: "First place - gold badge winner",
    feedback: "TechVistaCode boosted my coding skills beyond expectations!",
    winningTitle: "Gold Badge in Coding",
  },
  {
    name: "Aisha Khan",
    picture: "/avatars/highschool-girl.webp",
    designation: "Full Stack Developer",
    badge: goldBadge,
    badgeAlt: "First place - gold badge winner",
    feedback: "Hands-on projects made all the difference.",
    winningTitle: "Gold Badge in Development",
  },
  {
    name: "Arjun Iyer",
    picture: "/avatars/college-boy.webp",
    designation: "Machine Learning Engineer",
    badge: goldBadge,
    badgeAlt: "First place - gold badge winner",
    feedback: "I landed my dream job after this course.",
    winningTitle: "Gold Badge in Machine Learning",
  },
  {
    name: "Neha Verma",
    picture: "/avatars/highschool-girl.webp",
    designation: "AI Researcher",
    badge: silverBadge,
    badgeAlt: "Second place - silver badge winner",
    feedback: "Perfect for both beginners and advanced learners.",
    winningTitle: "Silver Badge in AI",
  },
  {
    name: "Ravi Sharma",
    picture: "/avatars/adult-men.webp",
    designation: "Corporate IT Trainer",
    badge: silverBadge,
    badgeAlt: "Second place - silver badge winner",
    feedback:
      "As a corporate client, I was impressed with the professionalism and customized training TechVistaCode delivered to our team.",
    winningTitle: "Silver Badge in Training",
  },
  {
    name: "Aditi Verma",
    picture: "/avatars/college-girl.webp",
    designation: "MCA Student",
    badge: goldBadge,
    badgeAlt: "First place - gold badge winner",
    feedback:
      "TechVistaCode’s project-based learning style gave me the confidence to face interviews. Their mock sessions were a game changer.",
    winningTitle: "Gold Badge in Coding",
  },
  {
    name: "Aarav Malhotra",
    picture: "/avatars/adult-men.webp",
    designation: "Senior Software Engineer",
    badge: silverBadge,
    badgeAlt: "Second place - silver badge winner",
    feedback:
      "TechVistaCode’s training style bridges the gap between theory and real-world application. The mentors genuinely care about your growth.",
    winningTitle: "Silver Badge in Development",
  },
  {
    name: "Kabir Sharma",
    picture: "/avatars/college-boy.webp",
    designation: "Full Stack Engineer",
    badge: bronzeBadge,
    badgeAlt: "Third place - bronze badge winner",
    feedback:
      "Every session felt like an investment in my career. TechVistaCode helped me level up faster than I imagined.",
    winningTitle: "Bronze Badge in Development",
  },
];

export const badgeLegend = [
  {
    badge: "Gold Badge",
    badgePicture: goldBadge,
    badgeValue: "Top 5%—fast completion, 5★ projects & active in community.",
  },
  {
    badge: "Silver Badge",
    badgePicture: silverBadge,
    badgeValue: "Top 20%—on-time completion & high-quality projects.",
  },
  {
    badge: "Bronze Badge",
    badgePicture: bronzeBadge,
    badgeValue: "Course complete—solid mastery of core skills.",
  },
];

export const yourTurn = {
  heading: "Your Turn",
  points: [
    "Ready to see your own story here? Enroll in any course today and start your journey toward Gold—and beyond.",
  ],
  buttonLink: "/courses",
  buttonText: "Browse Courses",
};
