import Image from "next/image";

import * as motion from "motion/react-client";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import buildWithUsHero from "../../../public/build-with-us-hero.webp";

import styles from "@/styles/pages/BuildWithUs.module.css";

const BuildWithUsHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      <Image
        src={buildWithUsHero}
        alt={"A team on desk working together, building together"}
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
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={{ xs: 2, sm: 3 }}>
                  <h1 className={styles.heroTitle}>
                    Bring Your Tech Ideas to Life with Expert Mentorship
                  </h1>
                  <p className={styles.heroDescription}>
                    Whether you’re a student, entrepreneur, or educator, our
                    team works alongside you to design, develop, and deploy
                    websites, apps, and custom software solutions.
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
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
                  borderRadius={"192px 8px 192px 8px"}
                  overflow={"clip"}
                  boxShadow={"var(--medium-light-shadow)"}
                >
                  <Image
                    src={buildWithUsHero}
                    alt={"A team on desk working together, building together"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
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

export default BuildWithUsHero;
