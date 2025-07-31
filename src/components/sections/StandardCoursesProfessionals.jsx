import Container from "@/components/layout/Container";
import CourseSubCategoryPreviews from "@/components/data-displays/CourseSubCategoryPreviews";

import { previewStandardProfessionalsCourses } from "@/constants/courseContent";

import styles from "@/styles/pages/Courses.module.css";

const StandardCoursesProfessionals = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className={styles.professionalsCoursesPreviewSection}
    >
      <Container className="container-y-padding">
        <CourseSubCategoryPreviews
          subtitle={"Explore Our Courses For"}
          subtitleColor={"var(--secondary)"}
          title={"Working Professionals"}
          titleColor={"var(--primary)"}
          caption={"Entrepreneurs"}
          captionColor={"var(--secondary)"}
          previewCourses={previewStandardProfessionalsCourses}
        />
      </Container>
    </section>
  );
};

export default StandardCoursesProfessionals;
