import Image from "next/image";
import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import PageCTA from "@/components/layout/PageCTA";

import { getBlogBySlug } from "@/utils/markdownBlogsReader";

import styles from "@/styles/pages/Blog.module.css";

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  const { metadata, content } = blog;

  if (!blog) return notFound();

  return (
    <>
      <section id={metadata.slug} className={styles.blogPageSection}>
        <Container className="container-y-padding">
          <article>
            <Stack spacing={2}>
              <h1>{metadata.title}</h1>
              <p>
                <em>{metadata.date}</em>
              </p>
              <Box
                sx={{
                  border: "1px solid var(--grey)",
                  borderRadius: "var(--high-rounded)",
                  minHeight: { xs: 200, sm: 300, md: 400, lg: 600 },
                  overflow: "clip",
                  boxShadow: "var(--low-shadow)",
                  position: "relative",
                }}
              >
                {metadata.coverImage && (
                  <Image
                    src={metadata.coverImage}
                    alt={`Cover for ${metadata.title}`}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </Stack>
            <Box mt={10} mx={"auto"} className={styles.markdown}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </Box>
          </article>
        </Container>
      </section>
      <PageCTA
        pageId={`${metadata.slug}-blog-page-cta`}
        ctaTitle={"Next Steps"}
        ctaSubTitle={`Ready to start? Check out our ${metadata.tag} Course and Book a Free Session`}
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Session"}
      />
    </>
  );
}
