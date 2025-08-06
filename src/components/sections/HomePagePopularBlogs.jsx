import Link from "next/link";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
} from "@mui/material";

import Container from "@/components/layout/Container";

import { featuredBlogsIndex } from "@/constants/fixedStats";

import { getAllBlogs } from "@/utils/markdownBlogsReader";
import { YYYYMMDDtoMonthDDYYYY } from "@/utils/dateUtils";

import styles from "@/styles/pages/Homepage.module.css";

const HomePagePopularBlogs = ({ sectionID }) => {
  const blogs = getAllBlogs();
  const featuredBlogs = blogs.filter((_, i) => featuredBlogsIndex.includes(i));

  return (
    <section id={sectionID} className={`${styles.blogPreviewSection} secondarySurfaceBackground`}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span
            className="overlineText"
            style={{ color: "var(--black)" }}
          >
            The Blog Zone
          </span>
          <h2 style={{ color: "var(--white)" }}>Curated for You</h2>
        </Box>
        <Grid container mt={5} spacing={2}>
          {featuredBlogs.map((blog, index) => (
            <Grid key={`${blog.slug} ${index}`} size={{ xs: 12, lg: 4 }}>
              <Link
                href={`/blog/${blog.slug}`}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    borderRadius: "var(--high-rounded)",
                    height: "100%",
                  }}
                  elevation={1}
                >
                  <CardMedia
                    sx={{ height: 240 }}
                    image={blog.coverImage}
                    title={blog.slug}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Chip
                          label={YYYYMMDDtoMonthDDYYYY(blog.date)}
                          color="primary"
                        />
                        <Chip
                          label={"Featured"}
                          color="secondary"
                          variant="outlined"
                        />
                      </Stack>
                      <h4>{blog.title}</h4>
                      <p>{blog.description}</p>
                    </Stack>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default HomePagePopularBlogs;
