import Image from "next/image";

import { Box, Stack } from "@mui/material";
import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { ourCommunityTechVistaCode } from "@/constants/aboutUsContent";

import ourCommunity from "../../../public/our-community.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsCommunity = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.aboutUsCommunitySection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "50vh", lg: "55vh" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={ourCommunity}
            alt="4 People each one making one alphabet from LOVE word"
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
                <h3>{ourCommunityTechVistaCode.heading}</h3>
                {ourCommunityTechVistaCode.points.map((point, index) => (
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

export default AboutUsCommunity;
