import Container from "@/components/layout/Container";
import CourseSubCategoryPreviews from "@/components/data-displays/CourseSubCategoryPreviews";

import { previewStandardUniversityCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const StandardCoursesCollege = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.collegeCoursesPreviewSection}>
      <Container className="container-y-padding">
        <CourseSubCategoryPreviews
          subtitle={"Explore Our Courses For"}
          subtitleColor={"var(--white)"}
          title={"University Students"}
          titleColor={"var(--white)"}
          caption={"UG / PG"}
          captionColor={"var(--white)"}
          previewCourses={previewStandardUniversityCourses}
        />
      </Container>
    </section>
  );
};

export default StandardCoursesCollege;
