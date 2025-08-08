"use client";

import { useState } from "react";

import Link from "next/link";

import { Button, Grid, Stack } from "@mui/material";
import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";
import GetFreeSessionPopup from "@/components/popups/GetFreeSessionPopup";
import StatCard from "@/components/data-displays/StatCard";

import {
  totalCourses,
  totalMentors,
  totalStudents,
} from "@/constants/fixedStats";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageHero = ({ sectionID }) => {
  const [isGetFreeSessionOpen, setIsGetFreeSessionOpen] = useState(false);

  return (
    <section id={sectionID} className={styles.heroVideoSection}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS devices
        className={styles.heroVideo}
      >
        <source src="/homepage-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        <img
          src="/homepage-hero-video-fallback.webp"
          alt="A man with beard and a girl in scientist apron looking at a robotic arm"
        />
      </video>

      {/* Video Overlay (optional - for better text contrast) */}
      <div className={styles.heroOverlay}></div>

      {/* Content for the hero section */}
      <Container>
        <div className={styles.heroContent}>
          <Grid
            container
            height={{
              xs: "var(--viewportHeightHeroMobile)",
              sm: "var(--viewportHeightHeroTablet)",
              lg: "var(--viewportHeightHeroDesktop)",
            }}
            alignItems={"center"}
          >
            <Grid size={{ xs: 12, sm: 8, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={{ xs: 2, sm: 3 }}>
                  <h1 className={styles.heroTitle}>
                    Build Your Future with Job-Ready Tech Skills
                  </h1>
                  <p
                    className={styles.heroDescription}
                    style={{ maxWidth: "80%" }}
                  >
                    Online courses in AI, Web Development, Data Science & Cloud
                    crafted by industry experts.
                  </p>
                  <CapsuleDash thickness="16px" />
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Link href="/courses" passHref>
                      <Button
                        size="large"
                        disableElevation
                        variant="contained"
                        color="secondary"
                        sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                        fullWidth
                      >
                        Browse Courses
                      </Button>
                    </Link>
                    <GetFreeSessionPopup
                      variant="contained"
                      color="warning"
                      size="large"
                      isHighRounded
                      open={isGetFreeSessionOpen}
                      setOpen={setIsGetFreeSessionOpen}
                    />
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid
              display={{ xs: "block", sm: "block" }}
              size={{ xs: 12, sm: 4, lg: 6 }}
            >
              <Stack
                direction={{ xs: "row", sm: "column" }}
                sx={{ overflowX: { xs: "scroll", sm: "visible" } }}
                spacing={{ xs: 5, sm: 8 }}
                alignItems={"center"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50, x: 100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    opacity: { duration: 1.0, delay: 0.5 },
                    x: { duration: 0.5, delay: 0.5 },
                    y: { duration: 0.5, delay: 1.0 },
                  }}
                >
                  <StatCard stat={totalCourses} statLabel={"Courses"} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50, x: 100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    opacity: { duration: 1.0, delay: 1.5 },
                    x: { duration: 0.5, delay: 1.5 },
                    y: { duration: 0.5, delay: 2.0 },
                  }}
                >
                  <StatCard stat={totalMentors} statLabel={"Mentors"} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50, x: 100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    opacity: { duration: 1.0, delay: 2.5 },
                    x: { duration: 0.5, delay: 2.5 },
                    y: { duration: 0.5, delay: 3.0 },
                  }}
                >
                  <StatCard stat={totalStudents} statLabel={"Students"} />
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default HomePageHero;
