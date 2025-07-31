import Link from "next/link";
import Image from "next/image";

import * as motion from "motion/react-client";
import { Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import exclusiveCoursesHero from "../../../public/exclusive-courses-hero.webp";

import styles from "@/styles/pages/Courses.module.css";

const ExclusiveCoursesHero = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className={styles.trendingCoursesHeroPictureSection}
    >
      {/* Background picture */}
      <Image
        src={exclusiveCoursesHero}
        alt={"Advance coding on multiple computers"}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.heroOverlay}></div>

      <Container className="container-y-padding">
        <div className={styles.heroContent}>
          <Grid
            container
            minHeight={"var(--viewportHeightPagesHero)"}
            alignItems={"center"}
            spacing={4}
          >
            <Grid size={{ xs: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={{ xs: 2, sm: 3 }} alignItems={"center"}>
                  <h1 className={styles.heroTitle}>
                    Explore Our Exclusive Programs
                  </h1>
                  <p className={styles.heroDescription}>
                    Master in-demand domains driving innovation and careers—AI,
                    Data Science, Cloud, Cybersecurity, and more.
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12 }} className={styles.courseCategories}>
              <Grid container>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <Link href="#exclusive-course-ai-art" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>AI + Creativity</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <Link href="#exclusive-course-ai-assistant" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>Build AI Assistant</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <Link href="#exclusive-course-whatsapp-bot" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>WhatsApp Bot</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <Link href="#exclusive-course-no-code" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>Product Prototyping</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <Link href="#exclusive-course-ai-entrepreneurs" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>AI for Entrepreneurs</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                  >
                    <Link href="#exclusive-course-ai-healthcare" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>AI in Healthcare</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                  >
                    <Link href="#exclusive-course-game-design" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>Game Design with AI</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                  >
                    <Link href="#exclusive-course-quantum-computing" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>Quantum Computing</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
                <Grid display={{ xs: "block", sm: "none" }} size={{ xs: 12 }}>
                  <motion.div
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                  >
                    <Link href="#exclusive-course-space-data" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: { xs: 3, sm: 2, lg: 4 },
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(64px)",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <h4>Tech & Space</h4>
                      </Paper>
                    </Link>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveCoursesHero;
