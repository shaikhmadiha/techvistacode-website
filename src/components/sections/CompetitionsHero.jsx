import Link from "next/link";

import * as motion from "motion/react-client";

import { Button, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import styles from "@/styles/pages/Competitions.module.css";

const CompetitionsHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroVideoSection}>
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS devices
        className={styles.heroVideo}
      >
        <source src="/competitionpage-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        <img
          src="/competitionpage-hero-video-fallback.webp"
          alt="A girl wearing vr headset plays in virtual space doing hand motions in air"
        />
      </video>

      <div className={styles.heroOverlay}></div>
      <Container className="container-y-padding">
        <div className={styles.heroContent}>
          <Grid
            container
            minHeight={"var(--viewportHeightPagesHero)"}
            alignItems={"center"}
            spacing={2}
          >
            <Grid size={{ xs: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={{ xs: 2, sm: 3 }} alignItems={"center"}>
                  <h1 className={styles.heroTitle}>Compete, Learn & Win</h1>
                  <h2 className={styles.heroTitle}>Live Coding Battles</h2>
                  <p className={styles.heroDescription}>
                    Join our monthly bootcamps and hackathons—covering Python,
                    Cybersecurity, and AI/ML—and put your skills to the test.
                    Exclusive prizes & certificates await top performers!
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12 }} textAlign={"center"}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/competitions/flash-coding-arena" passHref>
                  <Button
                    size="large"
                    disableElevation
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                  >
                    Enter Flash Coding Arena
                  </Button>
                </Link>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default CompetitionsHero;
