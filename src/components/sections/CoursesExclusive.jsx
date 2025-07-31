import Container from "@/components/layout/Container";
import CourseCategoryPreviews from "@/components/data-displays/CourseCategoryPreviews";

import { previewExclusiveCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const CoursesExclusive = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.exclusiveCoursesPreviewSection}>
      <Container className="container-y-padding">
        <CourseCategoryPreviews
          subtitle={"Explore Our"}
          subtitleColor={"var(--black)"}
          title={"Exclusive Courses"}
          titleColor={"var(--primary)"}
          viewAllLink={"/courses/trending"}
          linkTitle={"View All"}
          linkColor={"var(--primary)"}
          previewCourses={previewExclusiveCourses}
        />
      </Container>
    </section>
  );
};

export default CoursesExclusive;
