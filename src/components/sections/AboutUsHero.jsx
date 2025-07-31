import Image from "next/image";

import * as motion from "motion/react-client";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import aboutUsHero from "../../../public/aboutus-hero.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      <Image
        src={aboutUsHero}
        alt={"Two feets with shoes on and text passion led us here"}
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
            spacing={4}
          >
            <Grid size={{ xs: 12, lg: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={{ xs: 2, sm: 3 }}>
                  <h1 className={styles.heroTitle}>
                    Built for Learners Designed for Careers Powered by
                    Innovation
                  </h1>
                  <p className={styles.heroDescription}>
                    At Tech Vista Code, we don’t just teach tech—we design
                    futures, spark revolutions, and turn curiosity into code and
                    learners into leaders.
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Box
                  position={"relative"}
                  minHeight={{ xs: 384, md: 500 }}
                  height={"100%"}
                  width={"100%"}
                  overflow={"clip"}
                >
                  <Image
                    src={aboutUsHero}
                    alt={"Two feets with shoes on and text passion led us here"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                      transform: "scale(1.2)",
                      boxShadow: "var(--medium-light-shadow)",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHero;
