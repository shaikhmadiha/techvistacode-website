import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import RewardsSlider from "@/components/sliders/RewardsSlider";
import RewardText from "@/components/data-displays/RewardText";

import styles from "@/styles/pages/Competitions.module.css";

const FCARewards = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.fcaRewardsSection}>
      <Container className="container-y-padding">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <RewardsSlider />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} p={{ xs: 2, md: 4 }}>
            <Stack height={"100%"} justifyContent={"center"} spacing={2}>
              <RewardText
                spanColor={"var(--secondary)"}
                headingColor={"var(--secondary)"}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FCARewards;
