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
        maxWidth: 360,
        borderRadius: "var(--high-rounded)",
        boxShadow: "var(--low-shadow)",
      }}
    >
      <CardMedia sx={{ height: 240 }} image={poster} title={posterAlt} />
      <CardContent>
        <Stack spacing={2}>
          <h4>{title}</h4>
          <p>{description}</p>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PreviewCourseCategoryCard;
