import Image from "next/image";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import micBanner from "../../../public/mic-banner.webp";

import styles from "@/styles/pages/StudentSharkTank.module.css";

const StudentSharkTankBanner = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.studentSharkTankBanner}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "320px", lg: "400px" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={micBanner}
            alt="A mic with a GO! neon sign"
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
                <h3>About Student Shark Tank</h3>
                <p>
                  At Student Shark Tank, we give you a platform to showcase your
                  tech innovations. Pitch your project to a panel of seasoned
                  mentors, receive actionable feedback, and stand a chance to
                  win Gold, Silver, or Bronze rewards. Whether it’s a web app,
                  mobile solution, or AI-powered tool, your idea deserves the
                  spotlight.
                </p>
              </Stack>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default StudentSharkTankBanner;
