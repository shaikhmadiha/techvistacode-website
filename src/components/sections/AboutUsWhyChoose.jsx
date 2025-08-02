import Image from "next/image";

import { Box, Stack } from "@mui/material";
import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { whyChooseTechVistaCode } from "@/constants/aboutUsContent";

import whyChoose from "../../../public/why-choose.webp";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsWhyChoose = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.aboutUsWhyChooseUsSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "50vh", lg: "55vh" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={whyChoose}
            alt="Pink background with Why Text"
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
                <h3>{whyChooseTechVistaCode.heading}</h3>
                {whyChooseTechVistaCode.points.map((point, index) => (
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

export default AboutUsWhyChoose;
