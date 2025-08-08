import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { phoneNumber } from "./fixedStats";

export const headerNavItems = [
  { label: "Courses", href: "/courses" },
  { label: "Competitions", href: "/competitions" },
  { label: "Internships", href: "/internships" },
  { label: "Build With Us", href: "/build-with-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Success Mirror", href: "/success-mirror" },
  { label: "Student Shark Tank", href: "/student-shark-tank" },
  { label: "Hire Me Zone", href: "/hire-me-zone" },
  { label: "Alumni Connect", href: "/alumni-connect" },
  { label: "Blogs", href: "/blog" },
];

export const footerNavItems = [
  { label: "Courses", href: "/courses" },
  { label: "Standard Courses", href: "/courses/standard" },
  { label: "Trending Courses", href: "/courses/trending" },
  { label: "Exclusive Courses", href: "/courses/exclusive" },
  { label: "Competitions", href: "/competitions" },
  { label: "Flash Coding Arena", href: "/competitions/flash-coding-arena" },
  { label: "Internships", href: "/internships" },
  { label: "Build With Us", href: "/build-with-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Success Mirror", href: "/success-mirror" },
  { label: "Student Shark Tank", href: "/student-shark-tank" },
  { label: "Hire Me Zone", href: "/hire-me-zone" },
  { label: "Alumni Connect", href: "/alumni-connect" },
  { label: "Blogs", href: "/blog" },
];


export const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tech_vista_code",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${phoneNumber}`,
    icon: FaWhatsapp,
  },
];