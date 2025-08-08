import Image from "next/image";

import { Box, Chip, Grid, Stack } from "@mui/material";

import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { flashCodingArenaPageContent } from "@/constants/competitionContent";

import { getFlashCodingArenaCountdown } from "@/utils/dateUtils";

import styles from "@/styles/pages/Competitions.module.css";

const FCAUpcoming = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.fcaUpcomingSection}>
      <Image
        src={flashCodingArenaPageContent.upcomingEventPoster}
        alt={flashCodingArenaPageContent.upcomingEventPosterAlt}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.fcaUpcomingBackdropOverlay}></div>
      <Container className="container-y-padding">
        <Box className={styles.fcaUpcomingContent}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }} p={{ xs: 2, md: 4 }}>
              <Stack height={"100%"} justifyContent={"center"} spacing={3}>
                <span
                  className="overlineText"
                  style={{ color: "var(--accent)" }}
                >
                  Upcoming Track
                </span>
                <h2>{flashCodingArenaPageContent.upcomingEventTitle}</h2>
                {flashCodingArenaPageContent.upcomingEventPoints.map(
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
                <Box>
                  <Chip
                    color="warning"
                    variant="outlined"
                    label={
                      <h4>
                        {getFlashCodingArenaCountdown(
                          flashCodingArenaPageContent.upcomingEventDate
                        )}
                      </h4>
                    }
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                position={"relative"}
                minHeight={500}
                height={"100%"}
                width={"100%"}
                borderRadius={"128px 8px 128px 8px"}
                overflow={"clip"}
                boxShadow={"var(--medium-light-shadow)"}
              >
                <Image
                  src={flashCodingArenaPageContent.upcomingEventPoster}
                  alt={flashCodingArenaPageContent.upcomingEventPosterAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FCAUpcoming;
