import { Card, CardContent, CardMedia, Stack } from "@mui/material";

const PreviewInternshipCards = ({ poster, posterAlt, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        borderRadius: "var(--high-rounded)",
      }}
      elevation={1}
    >
      <CardMedia sx={{ height: 180 }} image={poster} title={posterAlt} />
      <CardContent>
        <Stack spacing={2}>
          <h4>{title}</h4>
          <p>{description}</p>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PreviewInternshipCards;
