import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

const PreviewCourseCategoryCardHorizontal = ({
  title,
  description,
  poster,
  posterAlt,
}) => {
  return (
    <Box
      bgcolor={"var(--white)"}
      borderRadius={"var(--medium-rounded)"}
      overflow={"clip"}
      boxShadow={"var(--low-shadow)"}
      className="secondarySurfaceBackground"
    >
      <Grid container>
        <Grid size={{ xs: 12, lg: 6 }} py={15} px={4}>
          <Stack spacing={2}>
            <h4 style={{ color: "var(--white)" }}>{title}</h4>
            <p style={{ color: "var(--white)" }}>{description}</p>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 6 }}
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
