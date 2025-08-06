import { Card, CardContent, CardMedia, Chip, Stack } from "@mui/material";

const PreviewCourseCard = ({
  poster,
  posterAlt,
  category,
  duration,
  title,
  description,
}) => {
  return (
    <Card
      sx={{ maxWidth: 360, borderRadius: "var(--medium-rounded)" }}
      elevation={0}
    >
      <CardMedia sx={{ height: 240 }} image={poster} title={posterAlt} />
      <CardContent>
        <Stack spacing={2}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Chip label={category} color="primary" />
            <Chip label={duration} color="secondary" variant="outlined" />
          </Stack>
          <h4>{title}</h4>
          <p>{description}</p>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PreviewCourseCard;
