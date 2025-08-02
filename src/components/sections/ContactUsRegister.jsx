import Container from "@/components/layout/Container";

import styles from "@/styles/pages/ContactUs.module.css";
import ContactUsRegistration from "@/components/forms/ContactUsRegistration";
import { Grid, Stack } from "@mui/material";

const ContactUsRegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.contactUsRegisterSection}>
      <Container className="container-y-padding">
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            alignItems={"center"}
          >
            <Stack spacing={2}>
              <h3>Send Us A Message</h3>
              <p>
                Got a detailed question or feedback? Fill out the form below and
                we’ll reply faster than you can say “code!”
              </p>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} p={{ xs: 2, md: 4 }}>
            <ContactUsRegistration />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUsRegister;
