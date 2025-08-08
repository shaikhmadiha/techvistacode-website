import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import BuildWithUsRegistration from "@/components/forms/BuildWithUsRegistration";

import formBanner from "../../../public/forms-banner.webp";

import styles from "@/styles/pages/BuildWithUs.module.css";

const BuildWithUsRegister = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className={`${styles.buildWithUsRegisterSection} secondarySurfaceBackgroundTwo`}
    >
      <Container className="container-y-padding">
        <Grid container>
          <Grid
            size={{ xs: 12, md: 8 }}
            minHeight={300}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"var(--secondary)"}
            position={"relative"}
          >
            <Image
              src={formBanner}
              alt="A person in black suit holding tech vista code business card"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* <Stack>
              <p style={{ color: "var(--white)" }}>Build With Us Now!</p>
              <h3 style={{ color: "var(--white)" }}>Vision into Reality!</h3>
            </Stack> */}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box bgcolor={"var(--white)"} p={2}>
              <BuildWithUsRegistration themeColor="secondary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BuildWithUsRegister;
