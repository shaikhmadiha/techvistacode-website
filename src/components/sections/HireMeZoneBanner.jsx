import Image from "next/image";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import hireMeBanner from "../../../public/hire-me-zone-banner.webp";

import styles from "@/styles/pages/HireMeZone.module.css";

const HireMeZoneBanner = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.hireMeZoneBanner}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={hireMeBanner}
            alt="a man holding a phone with a laptop bag"
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
                <h3>Overview</h3>
                <p>
                  Hire Me Zone is Tech Vista Code’s dedicated talent marketplace
                  where you can upload your resume, hone your interview skills,
                  and connect with leading tech companies looking for fresh
                  talent.
                </p>
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default HireMeZoneBanner;
