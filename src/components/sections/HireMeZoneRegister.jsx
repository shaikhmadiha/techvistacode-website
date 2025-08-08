import Image from "next/image";

import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import HireMeZoneRegistration from "@/components/forms/HireMeZoneRegistration";

import formBanner from "../../../public/forms-banner.webp";

import styles from "@/styles/pages/HireMeZone.module.css";

const HireMeZoneRegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={`${styles.hireMeZoneRegister} secondarySurfaceBackgroundTwo`}>
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
              <p style={{ color: "var(--white)" }}>Register Now!</p>
              <h3 style={{ color: "var(--white)" }}>
                One track. One shot. Go live.
              </h3>
            </Stack> */}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box bgcolor={"var(--white)"} p={2}>
              <HireMeZoneRegistration themeColor="secondary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HireMeZoneRegister;
