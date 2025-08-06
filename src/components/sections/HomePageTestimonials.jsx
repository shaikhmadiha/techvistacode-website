import { Box } from "@mui/material";

import Container from "@/components/layout/Container";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageTestimonials = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.testimonials}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--secondaryLight)" }}>
            Rating & Reviews
          </span>
          <h2 style={{ color: "var(--white)" }}>
            Real Stories, Real People
          </h2>
        </Box>
        <Box mt={4}>
          <TestimonialsSlider />
        </Box>
      </Container>
    </section>
  );
};

export default HomePageTestimonials;
