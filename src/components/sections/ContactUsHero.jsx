import Image from "next/image";

import * as motion from "motion/react-client";
import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import { techvistacodeAIchatbot } from "@/constants/homeContent";

import contactUsHello from "../../../public/contact-us-hello.webp";

import styles from "@/styles/pages/ContactUs.module.css";

const ContactUsHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      {/* Background picture */}
      <Image
        src={contactUsHello}
        alt={"Hello text 3d"}
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
                  <h1 className={styles.heroTitle}>Get in Touch</h1>
                  <h2 className={styles.heroTitle}>
                    Let’s Build Your Future Together
                  </h2>
                  <p className={styles.heroDescription}>
                    Whether you have a question, idea, or just want to say
                    hello, we’re here and excited to connect with you. Your
                    journey with TechVistaCode starts with a simple chat!
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
                <Stack alignItems={"center"} spacing={4}>
                  <h5 className={styles.heroTitle}>
                    Chat with {techvistacodeAIchatbot.name} — Your AI Guide
                  </h5>
                  <Image
                    src={"/arrow-right.png"}
                    alt="right arrow"
                    height={50}
                    width={150}
                    style={{ transform: "rotate(-10deg)" }}
                  />
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsHero;
