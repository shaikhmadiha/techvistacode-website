import Image from "next/image";

import * as motion from "motion/react-client";

import { Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import { flashCodingArenaPageContent } from "@/constants/competitionContent";

import { getFlashCodingArenaCountdown } from "@/utils/dateUtils";

import flashCodingArenaHero from "../../../public/flash-coding-arena-hero.webp";

import styles from "@/styles/pages/Competitions.module.css";

const FCAHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      {/* Background picture */}
      <Image
        src={flashCodingArenaHero}
        alt={"Workstation desk with many computers and laptop and messy desk"}
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
                    {flashCodingArenaPageContent.pageHeroTitle}
                  </h1>
                  <h2 className={styles.heroTitle}>
                    {flashCodingArenaPageContent.pageHeroSubTitle}
                  </h2>
                  <p className={styles.heroDescription}>
                    {flashCodingArenaPageContent.pageHeroDescription}
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
                <Paper sx={{ bgcolor: "rgba(0,0,0,0.5)", padding: 4 }}>
                  <h3 style={{ color: "var(--accent)" }}>
                    ⚡ {flashCodingArenaPageContent.upcomingEventTitle} ⚡
                  </h3>
                </Paper>
                <br />
                <h2 style={{ color: "var(--white)" }}>
                  {getFlashCodingArenaCountdown(
                    flashCodingArenaPageContent.upcomingEventDate
                  )}
                </h2>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default FCAHero;
