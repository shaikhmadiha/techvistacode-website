import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
} from "@mui/material";

import Container from "@/components/layout/Container";

import { liveCodingArenaCards } from "@/constants/competitionContent";
import {
  getFlashCodingArenaCountdown,
  YYYYMMDDtoMonthDDYYYY,
} from "@/utils/dateUtils";

import styles from "@/styles/pages/Competitions.module.css";

const CompetitionsLCAPreview = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.fcaPreviewSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--primary)" }}>
            Flash Coding Arena
          </span>
          <h2>Upcoming Tracks</h2>
        </Box>
        <Grid container my={4} spacing={2}>
          {liveCodingArenaCards.map((liveCodingArenaCard, index) => (
            <Grid
              key={`${liveCodingArenaCard.eventTitle} ${index}`}
              size={{ xs: 12, lg: 4 }}
            >
              <Stack alignItems={"center"}>
                <Card
                  sx={{ width: "100%", borderRadius: "var(--high-rounded)" }}
                  elevation={1}
                >
                  <CardMedia
                    sx={{ height: 240 }}
                    image={liveCodingArenaCard.poster}
                    title={liveCodingArenaCard.posterAlt}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Chip
                          label={YYYYMMDDtoMonthDDYYYY(
                            liveCodingArenaCard.eventDate
                          )}
                          color="primary"
                        />
                        <Chip
                          label={getFlashCodingArenaCountdown(
                            liveCodingArenaCard.eventDate
                          )}
                          color="secondary"
                          variant="outlined"
                        />
                      </Stack>
                      <h4>{liveCodingArenaCard.eventTitle}</h4>
                      <p>{liveCodingArenaCard.eventDescription}</p>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default CompetitionsLCAPreview;
