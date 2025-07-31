import { Button, Grid, Stack } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HighlightPreviewCard = ({
  poster,
  posterAlt,
  title,
  description,
  ctaUrl,
  cta,
}) => {
  return (
    <Grid
      container
      sx={{
        borderRadius: "var(--medium-rounded)",
        boxShadow: "var(--low-shadow)",
      }}
      overflow={"clip"}
    >
      <Grid
        size={{ xs: 12, lg: 4 }}
        position={"relative"}
        minHeight={{ xs: "640px", lg: "320px" }}
      >
        <Image
          src={poster}
          alt={posterAlt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </Grid>
      <Grid size={{ xs: 12, lg: 8 }} padding={4} bgcolor={"var(--white)"}>
        <Stack spacing={1} justifyContent={"space-between"} height={"100%"}>
          <h3>{title}</h3>
          <p>{description}</p>

          <Link href={ctaUrl} passHref style={{ marginLeft: "auto" }}>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              endIcon={<ArrowOutwardIcon />}
            >
              {cta}
            </Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HighlightPreviewCard;
