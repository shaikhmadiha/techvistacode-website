import Image from "next/image";

import { Box, Stack } from "@mui/material";
import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { contactAnytimeBanner } from "@/constants/contactUsContent";

import contactUsBanner from "../../../public/mentorship.webp";

import styles from "@/styles/pages/ContactUs.module.css";

const ContactUsBanner = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.contactUsBannerSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={contactUsBanner}
            alt="A girl looking at her laptop and talking over phone"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.bannerOverlay}>
            <Box
              height={"100%"}
              p={{ xs: 4, lg: 10 }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={2} width={{ xs: "90%", lg: "50%" }}>
                <h3>{contactAnytimeBanner.heading}</h3>
                {contactAnytimeBanner.description.map((point, index) => (
                  <Stack
                    key={index}
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                  >
                    <p>
                      <TiArrowRightOutline color="var(--white)" />
                    </p>
                    <p>{point}</p>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default ContactUsBanner;
