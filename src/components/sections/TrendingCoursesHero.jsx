import Link from "next/link";
import Image from "next/image";

import * as motion from "motion/react-client";
import { Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import trendingCoursesHero from "../../../public/trending-courses-hero.webp";

import styles from "@/styles/pages/Courses.module.css";

const TrendingCoursesHero = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className={styles.trendingCoursesHeroPictureSection}
    >
      {/* Background picture */}
      <Image
        src={trendingCoursesHero}
        alt={
          "Professor teaching his student during a lecture, students also have laptop on desk."
        }
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
                    Explore Our Trending Tech Courses
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
                    <Link href="#artificial-intelligence" passHref>
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
                        <h4>Artificial Intelligence</h4>
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
                    <Link href="#data-science" passHref>
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
                        <h4>Data Science</h4>
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
                    <Link href="#cloud-computing" passHref>
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
                        <h4>Cloud Computing</h4>
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
                    <Link href="#cyber-security" passHref>
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
                        <h4>Cyber Security</h4>
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
                    <Link href="#web-and-mobile" passHref>
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
                        <h4>Web Development</h4>
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
                    <Link href="#web-and-mobile" passHref>
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
                        <h4>Apps Development</h4>
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
                    <Link href="#blockchain" passHref>
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
                        <h4>Blockchain</h4>
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
                    <Link href="#iot" passHref>
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
                        <h4>Internet Of Things</h4>
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

export default TrendingCoursesHero;
