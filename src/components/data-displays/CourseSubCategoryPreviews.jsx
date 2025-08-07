import { Box, Grid, Stack } from "@mui/material";

import PreviewCourseCategoryCard from "@/components/data-displays/PreviewCourseCategoryCard";

const CourseSubCategoryPreviews = ({
  subtitle,
  subtitleColor,
  title,
  titleColor,
  caption,
  captionColor,
  previewCourses,
}) => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"baseline"}
      >
        <Box textAlign={"left"} maxWidth={"75%"}>
          <span className="overlineText" style={{ color: subtitleColor }}>
            {subtitle}
          </span>
          <h2 style={{ color: titleColor }}>{title}</h2>
        </Box>
        <p style={{ color: captionColor }}>{caption}</p>
      </Stack>
      <Grid container my={4} spacing={4}>
        {previewCourses.map((previewCourse, index) => (
          <Grid
            key={`${previewCourse.title} ${index}`}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <PreviewCourseCategoryCard
              poster={previewCourse.poster}
              posterAlt={previewCourse.posterAlt}
              title={previewCourse.title}
              description={previewCourse.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CourseSubCategoryPreviews;
