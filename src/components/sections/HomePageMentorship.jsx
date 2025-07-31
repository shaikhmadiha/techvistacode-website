import Link from "next/link";
import Image from "next/image";

import { Box, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Container from "@/components/layout/Container";

import mentorshipSectionImage from "../../../public/mentorship.webp";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageMentorship = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.mentorship}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={mentorshipSectionImage}
            alt="Girl doing mentorship"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.mentorshipOverlay}>
            <Box
              height={"100%"}
              p={{ xs: 4, lg: 10 }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={4} width={{ xs: "75%", lg: "50%" }}>
                <h3>Mentorship</h3>
                <p>
                  Collaborate on real-world tech projects with expert mentors.
                  Enhance your resume with team projects that solve actual
                  business problems.
                </p>
                <Link href={"/build-with-us"} passHref>
                  <Button
                    disableElevation
                    variant="outlined"
                    color="warning"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    Get Mentorship
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

export default HomePageMentorship;
