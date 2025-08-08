import Link from "next/link";
import Image from "next/image";

import { Box, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Container from "@/components/layout/Container";

import competitionsBanner from "../../../public/competitions-banner.webp";

import styles from "@/styles/pages/Competitions.module.css";

const CompetitionsBanner = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.competitionsBannerSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={competitionsBanner}
            alt="A monitor with programming and sci fi visuals"
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
              <Stack spacing={4} width={{ xs: "75%", lg: "50%" }}>
                <h3>Flash Coding Arena</h3>
                <p>
                  Dive into our signature live battles—one track per month.
                  Choose your arena, register, and compete in real time!
                </p>
                <Link href={"/competitions/flash-coding-arena"} passHref>
                  <Button
                    disableElevation
                    variant="outlined"
                    color="warning"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    Enter Arena
                  </Button>
                </Link>
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default CompetitionsBanner;
