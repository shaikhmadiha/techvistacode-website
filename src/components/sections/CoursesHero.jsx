import Link from "next/link";
import Image from "next/image";

import * as motion from "motion/react-client";
import { Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import coursesHero from "../../../public/courses-hero.webp";

import styles from "@/styles/pages/Courses.module.css";

const CoursesHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroPictureSection}>
      {/* Background picture */}
      <Image
        src={coursesHero}
        alt={"Professor teaching his student online"}
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
            spacing={2}
          >
            <Grid size={{ xs: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={{ xs: 2, sm: 3 }} alignItems={"center"}>
                  <h1 className={styles.heroTitle}>
                    Find the Perfect Tech Course for You
                  </h1>
                  <p className={styles.heroDescription}>
                    Whether you’re a school student, degree candidate, or
                    working professional, we’ve got industry-aligned
                    programs—Standard, Trending, and Exclusive—to level up your
                    skills and career.
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12 }} className={styles.courseCategories}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
              >
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <Link href="/courses/standard" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(41, 125, 112, 0.2)",
                        backdropFilter: "blur(64px)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <h4>Standard Courses</h4>
                      <br />
                      <p>
                        Foundational tech skills for school, college, and
                        professionals to kickstart their careers.
                      </p>
                    </Paper>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <Link href="/courses/trending" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(41, 125, 112, 0.2)",
                        backdropFilter: "blur(64px)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <h4>Trending Courses</h4>
                      <br />
                      <p>
                        Stay ahead with in-demand tech like AI, Security, and
                        DevOps powering the future.
                      </p>
                    </Paper>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  <Link href="/courses/exclusive" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(41, 125, 112, 0.2)",
                        backdropFilter: "blur(64px)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <h4>Exclusive Courses</h4>
                      <br />
                      <p>
                        Hands-on, niche AI + tech experiences like no-code apps,
                        prompt engineering.
                      </p>
                    </Paper>
                  </Link>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default CoursesHero;
