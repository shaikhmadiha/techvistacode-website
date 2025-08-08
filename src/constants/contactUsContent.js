import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { phoneNumber } from "./fixedStats";

export const contactAnytimeBanner = {
  heading: "Call Us Anytime",
  description: [
    `Prefer talking? We’re just a phone call away. Dial ${phoneNumber} (Yes, we answer with a smile!)`,
  ],
};

export const virtualHQBanner = {
  heading: "Visit Our Virtual HQ",
  points: [
    "TechVistaCode HQ is wherever you are — but if you want to drop by for a virtual coffee:",
    "Google Meet Open Hours: Mon–Fri, 10 AM to 6 PM (your local time)",
  ],
  bannerLink: "https://meet.google.com/baa-fwuz-fyv",
};

export const socialLinksStayConnected = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    handle: "",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tech_vista_code",
    handle: "@tech_vista_code",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company",
    handle: "",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${phoneNumber}`,
    handle: `${phoneNumber}`,
    icon: FaWhatsapp,
  },
];
