import Image from "next/image";

import { Box, Stack } from "@mui/material";

import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { flashCodingArenaPageContent } from "@/constants/competitionContent";

import competitionsHero from "../../../public/competitions-hero.webp";

import styles from "@/styles/pages/Competitions.module.css";

const FCABanner = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.fcaBannerSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={competitionsHero}
            alt="A person with side view sitting in front of desktop"
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
                <h3>{flashCodingArenaPageContent.fcaBannerTitle}</h3>
                {flashCodingArenaPageContent.fcaBannerPoints.map(
                  (point, index) => (
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
                  )
                )}
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default FCABanner;
