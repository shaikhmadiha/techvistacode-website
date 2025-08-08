import Link from "next/link";

import { Button, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import styles from "@/styles/pages/StudentSharkTank.module.css";

const StudentSharkTankHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroVideoSection}>
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS devices
        className={styles.heroVideo}
      >
        <source src="/studentsharktankpage-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        <img
          src="/studentsharktankpage-hero-video-fallback.webp"
          alt="A girl and a guy pitching their idea with a whiteboard behind them"
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
                  <h1 className={styles.heroTitle}>
                    Student Shark Tank – Pitch, Learn & Win
                  </h1>
                  <p className={styles.heroDescription}>
                    TechVistaCode mentors help shape your dreams into reality.
                    Present your idea, get expert feedback, and compete for top
                    prizes.
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
                <Link href="#student-shark-tank-register" passHref>
                  <Button
                    size="large"
                    disableElevation
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                  >
                    Submit Your Idea
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

export default StudentSharkTankHero;
