import Link from "next/link";
import Image from "next/image";

import * as motion from "motion/react-client";
import { Button, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import successMirror from "../../../public/success-mirror-hero.webp";

import styles from "@/styles/pages/SuccessMirror.module.css";

const SuccessMirrorHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      {/* Background picture */}
      <Image
        src={successMirror}
        alt={"A lady with a cheerful smile looking at her in mirror"}
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
                    Success Mirror: Reflecting Your Future
                  </h1>
                  <p className={styles.heroDescription}>
                    Explore real stories from Tech Vista Code alumni—complete
                    with animated avatars, badge rankings, and honest feedback.
                    See the impact & imagine what’s possible for you.
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
                <Link href="#success-mirror-gallery" passHref>
                  <Button
                    size="large"
                    disableElevation
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                  >
                    View Success Gallery
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

export default SuccessMirrorHero;
