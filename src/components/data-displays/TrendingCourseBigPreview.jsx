import Image from "next/image";

import { Box, Grid, Paper, Stack } from "@mui/material";

import styles from "@/styles/pages/Courses.module.css";

const TrendingCourseBigPreview = ({ poster, posterAlt, trendingCourse }) => {
  return (
    <Box
      bgcolor={"var(--grey)"}
      minHeight={600}
      position={"relative"}
      borderRadius={"var(--high-rounded)"}
      overflow={"clip"}
      boxShadow={"var(--medium-shadow)"}
    >
      <Image src={poster} alt={posterAlt} fill style={{ objectFit: "cover" }} />
      <div className={styles.trendingCoursePreviewSectionOverlay}></div>
      <Box className={styles.trendingCoursePreviewSectionOverlayContent}>
        <Box
          className={styles.bigPreviewContent}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={600}
          p={5}
        >
          <Stack spacing={2}>
            <h2 style={{ textShadow: "var(--low-shadow)" }}>
              {trendingCourse.title}
            </h2>
            <Grid container>
              {trendingCourse.subCourses.map((subCourse, index) => (
                <Grid
                  key={`${subCourse.title} ${index}`}
                  size={{ xs: 12, sm: 6, lg: 4 }}
                >
                  <Paper
                    variant="outlined"
                    square
                    sx={{
                      p: 2,
                      textAlign: "center",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(16px)",
                      height: "100%",
                    }}
                  >
                    <Stack spacing={1}>
                      <h5>{subCourse.title}</h5>
                      <p className="caption">{subCourse.description}</p>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingCourseBigPreview;
