import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import competitionsTrophy from "../../../public/competitions-trophy.webp";

import styles from "@/styles/pages/Competitions.module.css";

const CompetitionsRewards = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.competitionsRewardsSection}>
      <Container className="container-y-padding">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              position={"relative"}
              minHeight={500}
              height={"100%"}
              width={"100%"}
            >
              <Image
                src={competitionsTrophy}
                alt="A trophy with medals and a red background"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} p={{ xs: 2, md: 4 }}>
            <Stack height={"100%"} justifyContent={"center"} spacing={2}>
              <h2 style={{ color: "var(--secondary)" }}>
                Unlock Amazing Rewards!
              </h2>
              <p style={{ color: "var(--black)" }}>
                Stand a chance to win exclusive prizes that elevate your
                experience—top-tier gadgets, exciting tech, and much more! Every
                moment brings you closer to winning something incredible.
              </p>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CompetitionsRewards;
