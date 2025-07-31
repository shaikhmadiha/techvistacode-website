import Link from "next/link";

import { Box, Grid, Stack } from "@mui/material";

import PreviewCourseCategoryCard from "@/components/data-displays/PreviewCourseCategoryCard";
import PreviewCourseCategoryCardHorizontal from "@/components/data-displays/PreviewCourseCategoryCardHorizontal";

const CourseCategoryPreviews = ({
  subtitle,
  subtitleColor,
  title,
  titleColor,
  viewAllLink,
  linkTitle,
  linkColor,
  previewCourses,
}) => {
  const firstThree = previewCourses.slice(0, 3);
  const fourth = previewCourses.slice(3);
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box textAlign={"left"}>
          <span className="overlineText" style={{ color: subtitleColor  }}>
            {subtitle}
          </span>
          <h2 style={{ color: titleColor  }}>{title}</h2>
        </Box>
        <Link style={{ color: linkColor  }} href={viewAllLink}>{linkTitle}</Link>
      </Stack>
      <Grid container my={4} spacing={{ xs: 4, lg: 0 }}>
        {firstThree.map((previewCourse, index) => (
          <Grid
            key={`${previewCourse.title} ${index}`}
            size={{ xs: 12, lg: 4 }}
          >
            <Stack alignItems={"center"}>
              <PreviewCourseCategoryCard
                poster={previewCourse.poster}
                posterAlt={previewCourse.posterAlt}
                title={previewCourse.title}
                description={previewCourse.description}
              />
            </Stack>
          </Grid>
        ))}

        <Grid size={{ xs: 12 }} px={2} mt={{ xs: 0, lg: 4 }}>
          <PreviewCourseCategoryCardHorizontal
            poster={fourth[0].poster}
            posterAlt={fourth[0].posterAlt}
            title={fourth[0].title}
            description={fourth[0].description}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CourseCategoryPreviews;
