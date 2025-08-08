import Image from "next/image";

import { Box, Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import industryTrend from "../../../public/industry-trend.webp";
import codingTutorials from "../../../public/coding-tutorial.webp";
import careerAdvice from "../../../public/career-advice.webp";
import platformUpdate from "../../../public/platform-update.webp";
import communityContribution from "../../../public/community-contribution.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsBlogFeatures = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.aboutUsBlogFeaturesSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--white)" }}>
            Our Blog
          </span>
          <h2 style={{ color: "var(--white)" }}>
            Features
          </h2>
        </Box>
        <Grid container justifyContent={"space-between"} spacing={1} mt={5}>
          <Grid size={{ xs: 6, lg: 2 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={industryTrend}
                    alt="Magnifying glass with a bulb and tech style background"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Industry Trends & Insights: Stay ahead of tech innovations and
                  market demands.
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
                    src={codingTutorials}
                    alt="A monitor screenw with some code on it and a bulb"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Coding Tutorials & Tips: From beginner hacks to advanced
                  algorithms.
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
                    src={careerAdvice}
                    alt="a person with ladder and books stack"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Career Advice & Success Stories: Expert guidance on job
                  hunting and freelancing.
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
                    src={platformUpdate}
                    alt="Settings cog with bell"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Platform Updates & Announcements: Be the first to know about
                  new features.
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
                    src={communityContribution}
                    alt="hands over a heart with earth like continent maps on it"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Community Contributions: Learner blogs and project showcases.
                </p>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUsBlogFeatures;
