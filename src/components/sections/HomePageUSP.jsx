import Image from "next/image";

import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import UspCard from "@/components/data-displays/UspCard";

import styles from "@/styles/pages/Homepage.module.css";

import { uniqueSellingPointsUSP } from "@/constants/homeContent";

import homepageUSPSectionImage from "../../../public/homepage-usp.webp";

const HomePageUSP = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.uspSection}>
      <Container className="container-y-padding">
        <Grid container alignItems={"center"} spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <span className="overlineText">Transparent Process</span>
            <h2>Why Choose Us?</h2>
            <Stack alignItems={"center"} pt={4}>
              <Image
                src={homepageUSPSectionImage}
                alt="Multiethnic students reading document in folder"
                width={300}
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Grid container spacing={2}>
              {uniqueSellingPointsUSP.map((usp, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={`${index} ${usp.icon}`}>
                  <UspCard description={usp.description} Icon={usp.icon} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageUSP;
