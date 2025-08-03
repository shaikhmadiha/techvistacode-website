import Link from "next/link";

import Image from "next/image";

import { Box, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { TiArrowRightOutline } from "react-icons/ti";

import Container from "@/components/layout/Container";

import { yourTurn } from "@/constants/successMirrorContent";

import interviewCracker from "../../../public/interview-cracker.webp";

import styles from "@/styles/pages/SuccessMirror.module.css";

const SuccessMirrorBanner = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.successMirrorBannerSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "50vh", lg: "40vh" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={interviewCracker}
            alt="A man shaking hand with a woman"
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
                <h3>{yourTurn.heading}</h3>
                {yourTurn.points.map((point, index) => (
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
                <Link href={yourTurn.buttonLink} passHref>
                  <Button
                    disableElevation
                    variant="outlined"
                    color="warning"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    {yourTurn.buttonText}
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

export default SuccessMirrorBanner;
