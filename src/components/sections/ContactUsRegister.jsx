import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import ContactUsRegistration from "@/components/forms/ContactUsRegistration";

import formBanner from "../../../public/forms-banner.webp";

import styles from "@/styles/pages/ContactUs.module.css";

const ContactUsRegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={`${styles.contactUsRegisterSection} secondarySurfaceBackgroundTwo`}>
      <Container className="container-y-padding">
        <Stack spacing={1}>
          <h2 style={{ color: "var(--white)" }}>Send Us A Message</h2>
          <p style={{ color: "var(--white)" }}>
            Got a detailed question or feedback? Fill out the form below and
            we’ll reply faster than you can say “code!”
          </p>
        </Stack>
        <Grid container mt={5}>
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
              <ContactUsRegistration themeColor="secondary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUsRegister;
