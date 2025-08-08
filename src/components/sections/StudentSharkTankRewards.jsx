import Image from "next/image";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import rewardsBanner from "../../../public/gift-banner-1.webp";

import styles from "@/styles/pages/StudentSharkTank.module.css";

const StudentSharkTankRewards = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.studentSharkTankRewards}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={rewardsBanner}
            alt="A wooden surface with right side gift box, items like smartphone, tablet, smartwatch, money and certificate"
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
                <h3>Rewards & Recognition</h3>
                <p>
                  Gold Winner: High-end gadget (smartphone/tablet) + Certificate
                  + 1:1 mentorship session
                </p>
                <p>
                  Silver Runner-Up: Cash prize + Certificate + Group mentorship
                  workshop
                </p>
                <p>
                  Bronze Finalist: Certificate + feature in Alumni Connect
                  Network
                </p>
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default StudentSharkTankRewards;
