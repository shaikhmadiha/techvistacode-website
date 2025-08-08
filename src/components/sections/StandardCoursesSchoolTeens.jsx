import Container from "@/components/layout/Container";
import CourseSubCategoryPreviews from "@/components/data-displays/CourseSubCategoryPreviews";

import { previewStandardSchoolTeensCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const StandardCoursesSchoolTeens = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.schoolTeensCoursesPreviewSection}>
      <Container className="container-y-padding">
        <CourseSubCategoryPreviews
          subtitle={"Explore Our Courses For"}
          subtitleColor={"var(--secondary)"}
          title={"HighSchool Students"}
          titleColor={"var(--secondary)"}
          caption={"(Grade 11–12)"}
          captionColor={"var(--secondary)"}
          previewCourses={previewStandardSchoolTeensCourses}
        />
      </Container>
    </section>
  );
};

export default StandardCoursesSchoolTeens;
