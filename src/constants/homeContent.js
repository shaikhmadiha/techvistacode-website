import { FaBookReader } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import liveCodingArenaImage from "../../public/live-coding-arena.webp";
import internshipPrepImage from "../../public/internship-and-prep.webp";

export const uniqueSellingPointsUSP = [
  {
    icon: <FaBookReader size={30} style={{ color: "var(--white)" }} />,
    description:
      "Industry-Backed Curriculum: Learn the exact skills employers demand, with real-world projects built into every course.",
  },
  {
    icon: <FaUserTie size={30} style={{ color: "var(--white)" }} />,
    description:
      "1:1 Mentor Support: Get personalized guidance from seasoned developers every step of your journey.",
  },
  {
    icon: <MdWorkOutline size={30} style={{ color: "var(--white)" }} />,
    description:
      "Mock Interviews & Internships: Sharpen your interview skills and land placements at top IT firms in Pune & beyond.",
  },
  {
    icon: <FaLaptopCode size={30} style={{ color: "var(--white)" }} />,
    description:
      "Real-World Projects: Build a portfolio of live applications that showcase your abilities to employers.",
  },
];

export const previewCourseCards = [
  {
    poster: "/full-stack-development.webp",
    posterAlt: "Woman Coding On Computer",
    category: "Standard",
    duration: "6 Months",
    title: "Full-Stack Web Development",
    description:
      "Learn to build dynamic websites using HTML, CSS, JavaScript, React, Node.js, and databases. Become a full-stack developer from front-end to back-end.",
  },
  {
    poster: "/python-development.webp",
    posterAlt: "Python Book",
    category: "Trending",
    duration: "3 Months",
    title: "Python Programming",
    description:
      "Master Python to write efficient code and work with popular libraries like NumPy and Pandas. Perfect for beginners looking to dive into programming.",
  },
  {
    poster: "/data-science-and-ai.webp",
    posterAlt: "Close up photo of survey spreadsheet",
    category: "Exclusive",
    duration: "4 Months",
    title: "Data Science & AI",
    description:
      "Analyze data, build models, and explore machine learning with Python. Learn how to create intelligent systems and make data-driven decisions.",
  },
];

export const testimonials = [
  {
    profilePicture: "/full-stack-development.webp",
    name: "Subin R",
    designation: "Data Analyst",
    review:
      "I am incredibly fortunate to have had the opportunity to learn from this institution. The depth of knowledge is truly remarkable, and I can confidently say that the trainers here are outstanding. They combine expertise, passion, and commitment to make a lasting impact on their candidates.",
    rating: 5,
  },
  {
    profilePicture: "/python-development.webp",
    name: "John Doe",
    designation: "Developer",
    review:
      "The depth of knowledge is truly remarkable, and I can confidently say that the trainers here are outstanding. They combine expertise, passion, and commitment to make a lasting impact on their candidates.",
    rating: 4,
  },
  {
    profilePicture: "/data-science-and-ai.webp",
    name: "Tim White",
    designation: "Scientist",
    review:
      "The depth of knowledge is truly remarkable, and I can confidently say that the trainers here are outstanding. They combine expertise, passion, and commitment to make a lasting impact on their candidates.",
    rating: 3,
  },
  {
    profilePicture: "/full-stack-development.webp",
    name: "Subin R",
    designation: "Data Analyst",
    review:
      "I am incredibly fortunate to have had the opportunity to learn from this institution. The depth of knowledge is truly remarkable, and I can confidently say that the trainers here are outstanding. They combine expertise, passion, and commitment to make a lasting impact on their candidates.",
    rating: 5,
  },
  {
    profilePicture: "/data-science-and-ai.webp",
    name: "Tim White",
    designation: "Scientist",
    review:
      "The depth of knowledge is truly remarkable, and I can confidently say that the trainers here are outstanding. They combine expertise, passion, and commitment to make a lasting impact on their candidates.",
    rating: 3,
  },
];

export const highlights = [
  {
    highlightPoster: liveCodingArenaImage,
    posterAlt: "Flash coding arena coding hackathon banner poster",
    title: "Flash Coding Arena",
    description:
      "Join the Flash Coding Arena, a monthly online hackathon where developers across India and beyond test their coding skills, compete for prizes, and earn recognition. Open to participants everywhere.",
    ctaUrl: "/competitions/flash-coding-arena",
    ctaText: "Enter Arena",
  },
  {
    highlightPoster: internshipPrepImage,
    posterAlt: "Internships and interview preparation all in one place",
    title: "Internships & Prep",
    description:
      "Get ready for top IT internships with Internship Prep. Access mock interviews, resume tips, and placement support across Pune and India. Perfect for students and aspiring developers.",
    ctaUrl: "/internships",
    ctaText: "Get Ready",
  },
];

export const techvistacodeAIchatbot = {
  name: "Nova",
  tagline: "AI Career Path Advisor",
};
