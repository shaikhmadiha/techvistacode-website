import Link from "next/link";
import Image from "next/image";

import * as motion from "motion/react-client";
import { Box, Grid, Paper, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import CapsuleDash from "@/components/decorations/CapsuleDash";

import standardCoursesHero from "../../../public/standard-courses-hero.webp";
import childrens from "../../../public/childrens.webp";
import teen from "../../../public/teen.webp";
import student from "../../../public/student.webp";
import professionals from "../../../public/professionals.webp";

import styles from "@/styles/pages/Courses.module.css";

const StandardCoursesHero = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className={styles.standardCoursesHeroPictureSection}
    >
      {/* Background picture */}
      <Image
        src={standardCoursesHero}
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
                    Standard Courses for Every Stage
                  </h1>
                  <p className={styles.heroDescription}>
                    From young explorers to seasoned professionals, our Standard
                    courses build core tech skills with expert guidance.
                  </p>
                  <CapsuleDash thickness="16px" />
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12 }} className={styles.courseCategories}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
              >
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <Link href="#standard-course-school-kids" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(255, 200, 87, 0.2)",
                        backdropFilter: "blur(64px)",
                        borderColor: "var(--accent)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <Stack spacing={1} alignItems={"center"}>
                        <h4>School Kids Courses</h4>
                        <Box width={128} height={128} position={"relative"}>
                          <Image
                            src={childrens}
                            alt="a young boy and a girl"
                            fill
                            sizes="128px"
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Stack>
                    </Paper>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <Link href="#standard-course-school-teens" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(255, 200, 87, 0.2)",
                        backdropFilter: "blur(64px)",
                        borderColor: "var(--accent)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <Stack spacing={1} alignItems={"center"}>
                        <h4>School Senior Courses</h4>
                        <Box width={128} height={128} position={"relative"}>
                          <Image
                            src={teen}
                            alt="a teenage boy"
                            fill
                            sizes="128px"
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Stack>
                    </Paper>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  <Link href="#standard-course-college" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(255, 200, 87, 0.2)",
                        backdropFilter: "blur(64px)",
                        borderColor: "var(--accent)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <Stack spacing={1} alignItems={"center"}>
                        <h4>Degree Level Courses</h4>
                        <Box width={128} height={128} position={"relative"}>
                          <Image
                            src={student}
                            alt="a college girl with books"
                            fill
                            sizes="128px"
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Stack>
                    </Paper>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ visibility: "hidden", y: 50 }}
                  animate={{ visibility: "visible", y: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  <Link href="#standard-course-professionals" passHref>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 3, sm: 2, lg: 4 },
                        maxWidth: 320,
                        textAlign: "center",
                        background: "rgba(255, 200, 87, 0.2)",
                        backdropFilter: "blur(64px)",
                        borderColor: "var(--accent)",
                      }}
                      className={styles.courseCategoriesCard}
                    >
                      <Stack spacing={1} alignItems={"center"}>
                        <h4>Professional Courses</h4>
                        <Box width={128} height={128} position={"relative"}>
                          <Image
                            src={professionals}
                            alt="a team of professionals"
                            fill
                            sizes="128px"
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Stack>
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

export default StandardCoursesHero;
