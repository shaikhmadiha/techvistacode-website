import Link from "next/link";

import { Card, CardContent, CardMedia, Chip, Stack } from "@mui/material";

import { YYYYMMDDtoMonthDDYYYY } from "@/utils/dateUtils";

const PreviewBlogCard = ({
  poster,
  posterAlt,
  category,
  date,
  title,
  blogUrl,
  summary,
}) => {
  const formattedDate = YYYYMMDDtoMonthDDYYYY(date);
  return (
    <Link href={`blogs/${blogUrl}`} passHref>
      <Card
        sx={{ maxWidth: 360, borderRadius: "var(--high-rounded)" }}
        elevation={1}
      >
        <CardMedia sx={{ height: 180 }} image={poster} title={posterAlt} />
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Chip label={category} color="primary" />
              <Chip
                label={formattedDate}
                color="secondary"
                variant="outlined"
              />
            </Stack>
            <h4>{title}</h4>
            <p>{summary}</p>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PreviewBlogCard;
