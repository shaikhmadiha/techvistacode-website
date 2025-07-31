import Container from "@/components/layout/Container";

import { Box, Grid } from "@mui/material";

import PreviewBuildWithUsCategoriesCards from "@/components/data-displays/PreviewBuildWithUsCategoriesCards";

import { buildWithUsCategories } from "@/constants/buildWithUsContent";

import styles from "@/styles/pages/BuildWithUs.module.css";

const BuildWithUsCategories = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.buildWithUsCategoriesSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--primary)" }}>
            Explore By
          </span>
          <h2>Project Type</h2>
        </Box>
        <Grid container my={4} spacing={4}>
          {buildWithUsCategories.map((category, index) => (
            <Grid
              key={`${category.title} ${index}`}
              size={{ xs: 12, lg: 4 }}
              display={"flex"}
              justifyContent={"center"}
            >
              <PreviewBuildWithUsCategoriesCards
                poster={category.poster}
                posterAlt={category.posterAlt}
                title={category.title}
                purpose={category.purpose}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default BuildWithUsCategories;
