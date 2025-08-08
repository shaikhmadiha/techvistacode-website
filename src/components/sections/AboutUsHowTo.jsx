import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import joinTVC from "../../../public/join-tvc.webp";
import roadmap from "../../../public/career-roadmap.webp";
import diveIn from "../../../public/dive-in.webp";
import portfolio from "../../../public/portfolio.webp";
import launch from "../../../public/launch.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsHowTo = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.aboutUsHowItWorksSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--white)" }}>
            Find Out
          </span>
          <h2 style={{ color: "var(--white)" }}>How Tech Vista Code Shapes Your Future</h2>
        </Box>
        <Grid container spacing={4} mt={5}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <h4>
              Join the Tech Vista Code family by signing up and taking a quick
              skill assessment.
            </h4>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={joinTVC}
              alt="three person and a laptop"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          mt={5}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={roadmap}
              alt="tech career roadmap, girl and flash lights"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h4>
                Receive your AI-Powered Career Roadmap tailored to your
                strengths and goals.
              </h4>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={5}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h4>
                Dive into courses, projects, and live challenges designed to
                sharpen your skills.
              </h4>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={diveIn}
              alt="a girl happily exploring tech, tech icons in background"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          mt={5}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={portfolio}
              alt="a profile on laptop and linkedin logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h4>
                Build your professional portfolio with our resume generator and
                LinkedIn optimizer.
              </h4>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={5}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h4>
                Land internships, jobs, or launch your startup through our Hire
                Me Zone and Idea Incubator.
              </h4>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            position={"relative"}
            minHeight={384}
            borderRadius={4}
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={launch}
              alt="launching career rocket and people"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUsHowTo;
