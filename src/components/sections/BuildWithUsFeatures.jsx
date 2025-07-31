import Image from "next/image";

import { Box, Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import dedicatedTeam from "../../../public/dedicated-team.webp";
import scalableAffordable from "../../../public/scalable-affordable.webp";
import support from "../../../public/support.webp";
import collaboration from "../../../public/collaboration.webp";

import styles from "@/styles/pages/BuildWithUs.module.css";

const BuildWithUsFeatures = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.buildWithUsFeaturesSection}>
      <Container className="container-y-padding">
        <Grid container justifyContent={"space-between"} spacing={1}>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={dedicatedTeam}
                    alt="Dedicated developers working together"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Dedicated team of developers and mentors.
                </p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={scalableAffordable}
                    alt="Cloud, server scalable web solution"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">Affordable, scalable solutions.</p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={support}
                    alt="Two people fixing a website, wrench"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">Post-launch support and maintenance.</p>
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Paper
              variant="outlined"
              sx={{ height: "100%", padding: { xs: 2, md: 4 } }}
            >
              <Stack alignItems={"center"} spacing={2}>
                <Box height={150} width={150} position={"relative"}>
                  <Image
                    src={collaboration}
                    alt="Three kids trying to work together on laptop"
                    fill
                    sizes="150"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <p className="caption">
                  Option to involve students as interns or co-creators.
                </p>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BuildWithUsFeatures;
