import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { socialLinksStayConnected } from "@/constants/contactUsContent";

import styles from "@/styles/pages/ContactUs.module.css";

const ContactUsStayConnected = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.contactUsStayConnectedSection}>
      <Container className="container-y-padding">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent={"space-around"}
        >
          {socialLinksStayConnected.map(
            ({ label, href, handle, icon: Icon, index }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Box
                  key={`${label} ${index}`}
                  minHeight={200}
                  minWidth={200}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    backgroundColor: "var(--white)",
                    borderRadius: "var(--medium-rounded)",
                    boxShadow: "var(--low-shadow)",
                  }}
                  className="secondarySurfaceBackground"
                >
                  <Stack alignItems={"center"} spacing={2}>
                    <Icon size={32} />
                    <h4>{label}</h4>
                    <p>{handle}</p>
                  </Stack>
                </Box>
              </a>
            )
          )}
        </Stack>
      </Container>
    </section>
  );
};

export default ContactUsStayConnected;
