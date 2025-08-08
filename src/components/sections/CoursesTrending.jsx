import Container from "@/components/layout/Container";
import CourseCategoryPreviews from "@/components/data-displays/CourseCategoryPreviews";

import { previewTrendingCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const CoursesTrending = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.trendingCoursesPreviewSection}>
      <Container className="container-y-padding">
        <CourseCategoryPreviews
          subtitle={"Explore Our"}
          subtitleColor={"var(--secondary)"}
          title={"Trending Courses"}
          titleColor={"var(--secondary)"}
          viewAllLink={"/courses/trending"}
          linkTitle={"View All"}
          linkColor={"var(--secondary)"}
          previewCourses={previewTrendingCourses}
        />
      </Container>
    </section>
  );
};

export default CoursesTrending;
