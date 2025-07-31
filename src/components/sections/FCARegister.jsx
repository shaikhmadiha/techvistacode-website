import Image from "next/image";

import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import CompetitionRegistration from "@/components/forms/CompetitionRegistration";

import register from "../../../public/competition-register.webp";

import styles from "@/styles/pages/Competitions.module.css";

const FCARegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.competitionsRegisterSection}>
      <Container className="container-y-padding">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              position={"relative"}
              minHeight={400}
              height={"100%"}
              width={"100%"}
              borderRadius={"var(--high-rounded)"}
              overflow={"clip"}
              boxShadow={"var(--low-shadow)"}
            >
              <Image
                src={register}
                alt="A guy from behind looking at computer monitor"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} p={{ xs: 2, md: 4 }}>
            <CompetitionRegistration />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FCARegister;
