import Image from "next/image";

import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import HireMeZoneRegistration from "@/components/forms/HireMeZoneRegistration";

import register from "../../../public/competition-register.webp";

import styles from "@/styles/pages/HireMeZone.module.css";

const HireMeZoneRegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.hireMeZoneRegister}>
      <Container className="container-y-padding">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              position={"relative"}
              //   minHeight={400}
              height={"100%"}
              width={"100%"}
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
            <HireMeZoneRegistration />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HireMeZoneRegister;
