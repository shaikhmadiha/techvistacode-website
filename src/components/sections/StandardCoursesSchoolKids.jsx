import Container from "@/components/layout/Container";
import CourseSubCategoryPreviews from "@/components/data-displays/CourseSubCategoryPreviews";

import { previewStandardSchoolKidsCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const StandardCoursesSchoolKids = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.schoolKidsCoursesPreviewSection}>
      <Container className="container-y-padding">
        <CourseSubCategoryPreviews
          subtitle={"Explore Our Courses For"}
          subtitleColor={"var(--accent)"}
          title={"School Students"}
          titleColor={"var(--white)"}
          caption={"(Grade 5–10)"}
          captionColor={"var(--accent)"}
          previewCourses={previewStandardSchoolKidsCourses}
        />
      </Container>
    </section>
  );
};

export default StandardCoursesSchoolKids;
