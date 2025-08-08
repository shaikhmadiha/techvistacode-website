import Image from "next/image";

import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import StudentSharkTankRegistration from "@/components/forms/StudentSharkTankRegistration";

import formBanner from "../../../public/forms-banner.webp";

import styles from "@/styles/pages/StudentSharkTank.module.css";

const StudentSharkTankRegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={`${styles.studentSharkTankRegister} secondarySurfaceBackgroundTwo`}>
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
              <StudentSharkTankRegistration themeColor="secondary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StudentSharkTankRegister;
