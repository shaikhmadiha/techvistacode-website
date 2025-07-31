import Link from "next/link";

import { Box, Button, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import PreviewCourseCard from "@/components/data-displays/PreviewCourseCard";

import { previewCourseCards } from "@/constants/homeContent";

import styles from "@/styles/pages/Homepage.module.css";

const HomePagePopularCourses = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.popularCoursesSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--white)" }}>
            Explore
          </span>
          <h2>Our Most Popular Courses</h2>
        </Box>
        <Grid container my={4} spacing={2}>
          {previewCourseCards.map((previewCourse, index) => (
            <Grid
              key={`${previewCourse.title} ${index}`}
              size={{ xs: 12, lg: 4 }}
            >
              <Stack alignItems={"center"}>
                <PreviewCourseCard
                  poster={previewCourse.poster}
                  posterAlt={previewCourse.posterAlt}
                  category={previewCourse.category}
                  duration={previewCourse.duration}
                  title={previewCourse.title}
                  description={previewCourse.description}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box textAlign={"center"}>
          <Link href="/courses" passHref>
            <Button
              size="large"
              disableElevation
              variant="contained"
              color="secondary"
            >
              Browse All Courses
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
};

export default HomePagePopularCourses;
