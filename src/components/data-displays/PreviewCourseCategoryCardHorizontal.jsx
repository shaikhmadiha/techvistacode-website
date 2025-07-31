import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";

import styles from "@/styles/pages/Courses.module.css";

const PreviewCourseCategoryCardHorizontal = ({
  title,
  description,
  poster,
  posterAlt,
}) => {
  return (
    <Box
      bgcolor={"var(--white)"}
      borderRadius={"var(--high-rounded)"}
      overflow={"clip"}
      boxShadow={"var(--low-shadow)"}
    >
      <Grid container>
        <Grid size={{ xs: 12, lg: 8 }} py={15} px={4}>
          <Stack spacing={2} maxWidth={500}>
            <h4>{title}</h4>
            <p>{description}</p>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          position={"relative"}
          minHeight={{ xs: 320, lg: 0 }}
        >
          <Image
            src={poster}
            alt={posterAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewCourseCategoryCardHorizontal;
