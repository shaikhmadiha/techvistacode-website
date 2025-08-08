"use client";

import Link from "next/link";
import Image from "next/image";

import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { footerNavItems, socialLinks } from "@/constants/links";
import { emailId, phoneNumber } from "@/constants/fixedStats";

import techVistaCodeLogo from "../../../public/techvistacode.svg";

import styles from "@/styles/components/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={{ xs: 4, md: 2, lg: 4 }} borderColor={"red"}>
          <Grid
            size={{ xs: 12, md: 6, lg: 2.5 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={2}>
              <Link href="/" className={styles.logo}>
                <Image
                  src={techVistaCodeLogo}
                  alt="Tech Vista Code Company Logo"
                  width={180}
                />
              </Link>
              <h4>Tech Vista Code</h4>
              <p className="caption">
                © {currentYear} TechVistaCode. <br />
                All rights reserved
              </p>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Stack spacing={4}>
              <h5>Courses</h5>
              <Stack spacing={1}>
                <Link href="/courses/standard">Standard Courses</Link>
                <ul className={styles.coursesList}>
                  <li>Courses For School Students</li>
                  <li>Courses For College Students</li>
                  <li>Courses For Professionals & Entrepreneurs</li>
                </ul>
              </Stack>
              <Stack spacing={1}>
                <Link href="/courses/trending">Trending Courses</Link>
                <ul className={styles.coursesList}>
                  <li>AI & Machine Learning</li>
                  <li>Data Science & Big Data Analytics</li>
                  <li>Cloud Computing & DevOps</li>
                  <li>Cybersecurity & Ethical Hacking</li>
                  <li>Web & Mobile App Development</li>
                  <li>Blockchain & Cryptocurrency</li>
                  <li>Internet of Things (IoT)</li>
                </ul>
              </Stack>
              <Stack spacing={1}>
                <Link href="/courses/exclusive">Exclusive Courses</Link>
                <ul className={styles.coursesList}>
                  <li>Prompt Engineering & AI Art</li>
                  <li>Build Your Own AI Assistant</li>
                  <li>WhatsApp Bot Dev Without Coding</li>
                  <li>No-Code Product Prototyping</li>
                  <li>AI for Entrepreneurs & Freelancers</li>
                  <li>AI in Healthcare & Biotechnology</li>
                  <li>Game Design with AI</li>
                  <li>Quantum Computing Basics with Simulators</li>
                  <li>Tech + Space: Build Your Own Satellite Data App</li>
                </ul>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={4}>
              <h5>Important Links</h5>
              <Stack spacing={1}>
                {footerNavItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 2.5 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Contact</h5>
              <Stack spacing={1}>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                <a href={`mailto:${emailId}`}>
                  {emailId}
                </a>
              </Stack>
              <h5>Follow Us</h5>
              <Stack
                direction={"row"}
                justifyContent={{ xs: "center", md: "left" }}
                spacing={2}
              >
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
