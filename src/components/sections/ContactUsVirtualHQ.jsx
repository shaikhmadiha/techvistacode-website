import Link from "next/link";
import Image from "next/image";

import { TiArrowRightOutline } from "react-icons/ti";

import { Box, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Container from "@/components/layout/Container";

import { virtualHQBanner } from "@/constants/contactUsContent";

import virtualHQ from "../../../public/virtual-hq.webp";

import styles from "@/styles/pages/ContactUs.module.css";

const ContactUsVirtualHQ = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.contactUsVirtualHQSection}>
      <Container className="container-y-padding">
        <Box
          position={"relative"}
          minHeight={{ xs: "50vh", lg: "50vh" }}
          borderRadius={"var(--medium-rounded)"}
          overflow={"clip"}
        >
          <Image
            src={virtualHQ}
            alt="A laptop and a coffee on bed"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
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
                <h3>{virtualHQBanner.heading}</h3>
                {virtualHQBanner.points.map((point, index) => (
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
                <Link
                  href={virtualHQBanner.bannerLink}
                  passHref
                  target="_blank"
                >
                  <Button
                    disableElevation
                    variant="contained"
                    color="warning"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    Join Virtual Chat
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

export default ContactUsVirtualHQ;
