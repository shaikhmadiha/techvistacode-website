import Link from "next/link";
import Image from "next/image";

import { Button, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import HireMeZoneHeroImg from "../../../public/hire-me-zone-hero.webp";

import styles from "@/styles/pages/HireMeZone.module.css";

const HireMeZoneHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      {/* Background picture */}
      <Image
        src={HireMeZoneHeroImg}
        alt={
          "Two person sitting on a desk, man with suit filling up a form"
        }
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
                    Hire Me Zone: Your Tech Career Marketplace
                  </h1>
                  <p className={styles.heroDescription}>
                    Upload your CV, prepare with mock interviews, and get noticed by top recruiters and partners through our Talent Marketplace.
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
                <Link href="#register" passHref>
                  <Button
                    size="large"
                    disableElevation
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                  >
                    Get Hired!
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

export default HireMeZoneHero;
