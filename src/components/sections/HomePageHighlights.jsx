import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import HighlightPreviewCard from "@/components/data-displays/HighlightPreviewCard";

import { highlights } from "@/constants/homeContent";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageHighlights = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.highlights}>
      <Container className="container-y-padding ">
        <Box textAlign={"left"}>
          <span className="overlineText" style={{ color: "var(--secondary)" }}>
            Too Good to Miss
          </span>
          <h2 style={{ color: "var(--secondary)" }}>Now Trending</h2>
        </Box>
        <Grid container spacing={2} my={4}>
          {highlights.map((highlight, index) => (
            <Grid key={`${highlight.title} ${index}`} size={{ xs: 12, lg: 6 }}>
              <HighlightPreviewCard
                poster={highlight.highlightPoster}
                posterAlt={highlight.posterAlt}
                title={highlight.title}
                description={highlight.description}
                ctaUrl={highlight.ctaUrl}
                cta={highlight.ctaText}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageHighlights;
