import { Card, CardContent, CardMedia, Chip, Stack } from "@mui/material";

const PreviewBuildWithUsCategoriesCards = ({
  poster,
  posterAlt,
  title,
  purpose,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "var(--medium-rounded)",
      }}
      elevation={1}
    >
      <CardMedia sx={{ height: 240 }} image={poster} title={posterAlt} />
      <CardContent>
        <Stack spacing={2}>
          <Chip label={purpose} />
          <h4>{title}</h4>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PreviewBuildWithUsCategoriesCards;
