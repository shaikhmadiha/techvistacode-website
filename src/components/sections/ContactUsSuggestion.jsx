import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import ContactUsSuggestionRegistration from "@/components/forms/ContactUsSuggestionRegistration";

import styles from "@/styles/pages/ContactUs.module.css";

const ContactUsSuggestion = ({ sectionID }) => {
  return (
    <section id={sectionID} className={`${styles.contactUsSuggestionSection} secondarySurfaceBackgroundTwo`}>
      <Container className="container-y-padding">
        <Stack spacing={1} textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--white)" }}>
            Bonus
          </span>
          <h2 style={{ color: "var(--white)" }}>Suggest a Course or Feature!</h2>
          <p style={{ color: "var(--white)" }}>
            Got a cool idea? We’re all ears. Use this form to shape
            TechVistaCode’s future.
          </p>
        </Stack>
        <Box
          bgcolor={"var(--white)"}
          maxWidth={400}
          mx={"auto"}
          mt={5}
          p={5}
          borderRadius={"var(--low-rounded)"}
        >
          <ContactUsSuggestionRegistration />
        </Box>
      </Container>
    </section>
  );
};

export default ContactUsSuggestion;
