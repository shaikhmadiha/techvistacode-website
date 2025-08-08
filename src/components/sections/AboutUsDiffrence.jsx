import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import aiGps from "../../../public/ai-gps.webp";
import gamified from "../../../public/gamified.webp";
import startupGarage from "../../../public/startup-garage.webp";
import successLadder from "../../../public/success-ladder.webp";
import dreamers from "../../../public/dreamers.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsDiffrence = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.aboutUsDiffrenceSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--secondary)" }}>
            Learn
          </span>
          <h2 style={{ color: "var(--secondary)" }}>
            What Makes Tech Vista Code Different?
          </h2>
        </Box>
        <Grid container spacing={4} mt={10}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>AI Career GPS</h3>
              <p>
                Our smart AI career assistant crafts custom learning maps with
                courses, mentors, and real-world projects.
              </p>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondary)"}
          >
            <Image
              src={aiGps}
              alt="ai robot guiding student for career"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          mt={10}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondary)"}
          >
            <Image
              src={gamified}
              alt="two people celebrating win with trophy"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>Gamified Growth</h3>
              <p>
                Battle in Flash Coding Arena, level up avatars, earn real
                rewards—edutainment at its finest
              </p>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={10}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>Startup Garage</h3>
              <p>
                Submit ideas to our Incubator, get community votes, mentor
                backing, and investor pitch opportunities.
              </p>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondary)"}
          >
            <Image
              src={startupGarage}
              alt="founders sitting together working on startup"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          mt={10}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondary)"}
          >
            <Image
              src={successLadder}
              alt="a student climbing success steps"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>Scratch to CTO</h3>
              <p>
                Learning ladders for every stage, from Grade 5 to Master’s, each
                course is a mission.
              </p>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={10}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>Built for Dreamers & Doers</h3>
              <p>
                Blend tech, creativity, ethics, and purpose to build solutions
                that matter
              </p>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondary)"}
          >
            <Image
              src={dreamers}
              alt="visionaries working together"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUsDiffrence;
