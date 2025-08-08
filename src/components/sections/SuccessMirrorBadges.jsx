import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { badgeLegend } from "@/constants/successMirrorContent";

import styles from "@/styles/pages/SuccessMirror.module.css";

const SuccessMirrorBadges = (sectionID) => {
  return (
    <section
      id={sectionID}
      className={`${styles.successMirrorBadgesSection} secondarySurfaceBackground`}
    >
      <Container className="container-y-padding">
        <Box textAlign={"center"} mb={5}>
          <span className="overlineText" style={{ color: "var(--white)" }}>
            What Badge's Hold
          </span>
          <h2 style={{ color: "var(--white)" }}>Badge Legend</h2>
        </Box>
        <Grid container spacing={2}>
          {badgeLegend.map((item, index) => (
            <Grid
              key={`${item.badge} ${index}`}
              size={{ xs: 12, md: 4 }}
              p={2}
              borderRadius={"var(--high-rounded)"}
              bgcolor={"var(--white)"}
              boxShadow={"var(--low-shadow)"}
            >
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box height={120} width={180} position={"relative"}>
                  <Image
                    src={item.badgePicture}
                    alt={item.badge}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Stack alignItems={"start"}>
                  <h4>{item.badge}</h4>
                  <p className="caption">{item.badgeValue}</p>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SuccessMirrorBadges;
