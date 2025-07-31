import Link from "next/link";

import { Box, Button, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import PreviewBlogCard from "@/components/data-displays/PreviewBlogCard";

import { previewBlogCards } from "@/constants/homeContent";

import styles from "@/styles/pages/Homepage.module.css";

const HomePagePopularBlogs = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.blogPreviewSection}>
      <Container className="container-y-padding">
        <Box textAlign={"right"}>
          <span className="overlineText" style={{ color: "var(--primary)" }}>
            Preview
          </span>
          <h2>Our Blogs</h2>
        </Box>
        <Grid container my={4} spacing={2}>
          {previewBlogCards.map((previewBlog, index) => (
            <Grid
              key={`${previewBlog.title} ${index}`}
              size={{ xs: 12, lg: 4 }}
            >
              <Stack alignItems={"center"}>
                <PreviewBlogCard
                  poster={previewBlog.poster}
                  posterAlt={previewBlog.posterAlt}
                  category={previewBlog.category}
                  date={previewBlog.date}
                  title={previewBlog.title}
                  blogUrl={previewBlog.blogUrl}
                  summary={previewBlog.summary}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box textAlign={"center"}>
          <Link href="/blogs" passHref>
            <Button
              size="large"
              disableElevation
              variant="contained"
              color="secondary"
            >
              Read All Blogs
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
};

export default HomePagePopularBlogs;
