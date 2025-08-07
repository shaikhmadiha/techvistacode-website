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
          subtitleColor={"var(--secondaryLight)"}
          title={"Standard Courses"}
          titleColor={"var(--secondary)"}
          viewAllLink={"/courses/standard"}
          linkTitle={"View All"}
          linkColor={"var(--secondary)"}
          previewCourses={previewStandardCourses}
        />
      </Container>
    </section>
  );
};

export default CoursesStandard;
