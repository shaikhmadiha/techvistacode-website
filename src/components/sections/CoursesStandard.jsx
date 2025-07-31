import Container from "@/components/layout/Container";
import CourseCategoryPreviews from "@/components/data-displays/CourseCategoryPreviews";

import { previewStandardCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const CoursesStandard = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.standardCoursesPreviewSection}>
      <Container className="container-y-padding">
        <CourseCategoryPreviews
          subtitle={"Explore Our"}
          subtitleColor={"var(--secondary)"}
          title={"Standard Courses"}
          titleColor={"var(--white)"}
          viewAllLink={"/courses/standard"}
          linkTitle={"View All"}
          linkColor={"var(--white)"}
          previewCourses={previewStandardCourses}
        />
      </Container>
    </section>
  );
};

export default CoursesStandard;
