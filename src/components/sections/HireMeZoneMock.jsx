import Image from "next/image";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import hireMeMockInterview from "../../../public/hire-me-zone-mock-interview.webp";

import styles from "@/styles/pages/HireMeZone.module.css";

const HireMeZoneMock = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.hireMeZoneMockBanner}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={hireMeMockInterview}
            alt="A lady is taking an interview on other lady"
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
              <Stack spacing={2} width={{ xs: "75%", lg: "50%" }}>
                <h3>Mock Interview Preparation</h3>
                <p>
                  Schedule live mock interviews with experienced industry
                  mentors.
                </p>
                <p>
                  Receive detailed feedback on technical skills, communication,
                  and problem-solving.
                </p>
                <p>
                  Access interview resources and sample questions tailored to
                  your chosen tech stack.
                </p>
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default HireMeZoneMock;
