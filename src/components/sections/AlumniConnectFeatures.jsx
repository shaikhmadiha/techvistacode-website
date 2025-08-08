import Image from "next/image";
import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import pastLearner from "../../../public/past-learner.webp";
import communityBond from "../../../public/community-bond.webp";
import coffeeWithCoder from "../../../public/coffee-with-coder.webp";
import askMeAnything from "../../../public/ask-me-anything.webp";

import styles from "@/styles/pages/AlumniConnect.module.css";

const AlumniConnectFeatures = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.alumniConnectFeatures}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--secondary)" }}>
            Explore
          </span>
          <h2 style={{ color: "var(--secondary)" }}>Our Alumni Network</h2>
        </Box>
        <Grid container spacing={4} mt={10}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>
                Past learners mentor newbies, sharing insights and guidance
              </h3>
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
              src={pastLearner}
              alt="a past alumni helping current learner"
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
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={communityBond}
              alt="community with information sharing and nice bonding"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>
                Real stories of success and failure build authentic community
                bonds.
              </h3>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={10}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>
                “Coffee with a Coder” – schedule virtual meetups and casual
                chats.
              </h3>
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
              src={coffeeWithCoder}
              alt="an online session with a coder who is also drinking coffee"
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
            bgcolor={"var(--secondaryLight)"}
          >
            <Image
              src={askMeAnything}
              alt="a session to ask doubts and anything"
              fill
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={2}>
              <h3>
                Ask Me Anything sessions with alumni and industry experts.
              </h3>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AlumniConnectFeatures;
