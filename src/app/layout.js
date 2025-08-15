import { Analytics } from "@vercel/analytics/next";

import { Outfit } from "next/font/google";
import { ThemeProvider } from "@mui/material";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBox from "@/components/popups/ChatBox";
import Credit from "@/components/layout/Credit";

import theme from "@/theme/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tech Vista Code | IT Mentorship & Modern Tech Courses in Pune",
  description:
    "Join Tech Vista Code – Pune’s premier tech mentorship hub. Learn web development, data science, cloud computing, and more with real projects and expert mentors.",
  keywords: [
    "learn coding Pune",
    "IT courses Pune",
    "web development course",
    "data science course India",
    "tech mentorship",
    "coding bootcamp India",
  ],
  metadataBase: new URL("https://www.techvistacode.com"),
  openGraph: {
    title: "Tech Vista Code | Learn Modern Tech with Mentorship",
    description:
      "Hands-on courses, live projects, and expert mentorship in web dev, cloud, AI/ML & more. Located in Pune, India.",
    url: "https://www.techvistacode.com",
    siteName: "Tech Vista Code",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Vista Code homepage preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Vista Code | Learn Tech the Right Way",
    description:
      "Kickstart your tech career with personalized mentorship & modern courses in Pune.",
    images: ["/opengraph-image.jpg"],
    creator: "@techvistacode",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${outfit.variable}`}>
        <ThemeProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatBox />
          <Credit />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
