import Image from "next/image";

import { Box, Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import realWorldChallenge from "../../../public/real-world-challenge.webp";
import industryTracks from "../../../public/industry-tracks.webp";
import monthlyTheme from "../../../public/monthly-theme.webp";
import boostResume from "../../../public/boost-resume.webp";
import networking from "../../../public/networking.webp";

import styles from "@/styles/pages/Competitions.module.css";

const CompetitionsFeatures = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.competitionsFeaturesSection}>
      <Container className="container-y-padding">
        <Grid container justifyContent={"space-between"} spacing={1}>
          <Grid size={{ xs: 6, lg: 2 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={realWorldChallenge}
                    alt="Brain, light bulb and a puzzle piece"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Real-World Challenges sharpen your problem-solving skills.
                </p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6, lg: 2 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={industryTracks}
                    alt="A road track with three symbols"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Industry Tracks in Python, AI/ML & Cybersecurity
                </p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6, lg: 2 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={monthlyTheme}
                    alt="A calender with recycle and some side icons"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Monthly Themes keep it fresh—new challenge every month
                </p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6, lg: 2 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={boostResume}
                    alt="Resume, badge and a laptop"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Boost Your Resume with certificates & project showcases.
                </p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, lg: 2 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={networking}
                    alt="Few people talking on the same desk"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Network & Learn alongside peers and mentors.
                </p>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CompetitionsFeatures;
