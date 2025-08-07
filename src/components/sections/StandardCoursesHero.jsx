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
            <Grid size={{ xs: 12 }}>
              <Grid container className={styles.courseCategories}>
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  display={"flex"}
                  className={styles.courseCategoriesCard}
                >
                  <motion.div
                    style={{ flexGrow: 1 }}
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <Link href="#school-kids" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: 4,
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.4)",
                          backdropFilter: "blur(8px)",
                          height: "100%",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <Stack spacing={2} alignItems={"center"}>
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
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  display={"flex"}
                  className={styles.courseCategoriesCard}
                >
                  <motion.div
                    style={{ flexGrow: 1 }}
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <Link href="#school-teens" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: 4,
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.4)",
                          backdropFilter: "blur(8px)",
                          height: "100%",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <Stack spacing={2} alignItems={"center"}>
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
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  display={"flex"}
                  className={styles.courseCategoriesCard}
                >
                  <motion.div
                    style={{ flexGrow: 1 }}
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                  >
                    <Link href="#college-students" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: 4,
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.4)",
                          backdropFilter: "blur(8px)",
                          height: "100%",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <Stack spacing={2} alignItems={"center"}>
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
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  display={"flex"}
                  className={styles.courseCategoriesCard}
                >
                  <motion.div
                    style={{ flexGrow: 1 }}
                    initial={{ visibility: "hidden", y: 50 }}
                    animate={{ visibility: "visible", y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <Link href="#working-professionals" passHref>
                      <Paper
                        variant="outlined"
                        square
                        sx={{
                          p: 4,
                          textAlign: "center",
                          background: "rgba(255, 255, 255, 0.4)",
                          backdropFilter: "blur(8px)",
                          height: "100%",
                        }}
                        className={styles.courseCategoriesCard}
                      >
                        <Stack spacing={2} alignItems={"center"}>
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default StandardCoursesHero;
