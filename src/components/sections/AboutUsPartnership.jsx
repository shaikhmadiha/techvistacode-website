import Image from "next/image";

import { Box, Stack } from "@mui/material";
import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { partnershipTechVistaCode } from "@/constants/aboutUsContent";

import partnership from "../../../public/partnership.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsPartnership = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.aboutUsPartnerhshipSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "50vh", lg: "55vh" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={partnership}
            alt="A handshake for partnership"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.bannerOverlayToLeft}>
            <Box
              height={"100%"}
              p={{ xs: 4, lg: 10 }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <Stack spacing={2} width={{ xs: "90%", lg: "50%" }}>
                <h3>{partnershipTechVistaCode.heading}</h3>
                {partnershipTechVistaCode.points.map((point, index) => (
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

export default AboutUsPartnership;
