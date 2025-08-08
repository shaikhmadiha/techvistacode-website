import Image from "next/image";

import { Avatar, Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { successMirrorGallery } from "@/constants/successMirrorContent";

import styles from "@/styles/pages/SuccessMirror.module.css";

const SuccessMirrorGallery = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.successMirrorGallerySection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"} mb={10}>
          <span className="overlineText" style={{ color: "var(--secondary)" }}>
            Explore
          </span>
          <h2 style={{ color: "var(--secondary)" }}>Our Success Gallery</h2>
        </Box>
        <Grid container spacing={12}>
          {successMirrorGallery.map((item, index) => (
            <Grid
              key={`${item.name} ${index}`}
              size={{ xs: 12, md: 4 }}
              p={4}
              borderRadius={"var(--medium-rounded)"}
              bgcolor={"var(--white)"}
              boxShadow={"var(--low-shadow)"}
            >
              <Box
                mt={-10}
                mx={"auto"}
                height={120}
                width={100}
                position={"relative"}
              >
                <Image
                  src={item.badge}
                  alt={item.badgeAlt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack
                mt={2}
                spacing={4}
                height={"100%"}
                justifyContent={"space-between"}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Avatar
                    alt={item.name}
                    src={item.picture}
                    sx={{ width: 128, height: 128 }}
                  />
                  <Stack alignItems={"start"}>
                    <h4>{item.name}</h4>
                    <p className="caption">{item.designation}</p>
                  </Stack>
                </Stack>
                <p style={{ textAlign: "center" }}>{item.feedback}</p>
                <Box
                  height={50}
                  borderRadius={"var(--low-rounded)"}
                  bgcolor={"var(--secondary)"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <span
                    className="overlineText"
                  >
                    {item.winningTitle}
                  </span>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SuccessMirrorGallery;
