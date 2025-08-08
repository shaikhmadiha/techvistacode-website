import Image from "next/image";

import { Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import AlumniConnectHeroImg from "../../../public/alumni-connect-network-hero.webp";

import styles from "@/styles/pages/AlumniConnect.module.css";

const AlumniConnectHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      {/* Background picture */}
      <Image
        src={AlumniConnectHeroImg}
        alt={"Few students and alumni doing high five"}
        fill
        style={{ objectFit: "cover" }}
      />
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
                    Alumni Connect Network
                  </h1>
                  <h2 className={styles.heroTitle}>
                    Community-Led Career Growth
                  </h2>
                  <p className={styles.heroDescription}>
                    Connect with past learners, share stories, and grow together
                    through mentorship, virtual meetups, and AMA sessions.
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default AlumniConnectHero;
