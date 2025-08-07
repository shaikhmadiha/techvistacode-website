import { Card, CardContent, CardMedia, Chip, Stack } from "@mui/material";

const PreviewCourseCategoryCard = ({
  poster,
  posterAlt,
  title,
  description,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "var(--medium-rounded)",
        boxShadow: "var(--low-shadow)",
        height: "100%",
      }}
    >
      <CardMedia sx={{ height: 240 }} image={poster} title={posterAlt} />
      <CardContent>
        <Stack spacing={2}>
          <h4 style={{ color: "var(--primary)" }}>{title}</h4>
          <p style={{ color: "var(--black)" }}>{description}</p>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PreviewCourseCategoryCard;
