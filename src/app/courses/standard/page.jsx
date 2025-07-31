import StandardCoursesCollege from "@/components/sections/StandardCoursesCollege";
import StandardCoursesHero from "@/components/sections/StandardCoursesHero";
import StandardCoursesProfessionals from "@/components/sections/StandardCoursesProfessionals";
import StandardCoursesSchoolKids from "@/components/sections/StandardCoursesSchoolKids";
import StandardCoursesSchoolTeens from "@/components/sections/StandardCoursesSchoolTeens";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <StandardCoursesHero sectionID={"standard-course-hero"} />
      <StandardCoursesSchoolKids sectionID={"standard-course-school-kids"} />
      <StandardCoursesSchoolTeens sectionID={"standard-course-school-teens"} />
      <StandardCoursesCollege sectionID={"standard-course-college"} />
      <StandardCoursesProfessionals
        sectionID={"standard-course-professionals"}
      />
      <PageCTA
        pageId={"standard-course-page-cta"}
        ctaTitle={"Ready to begin?"}
        ctaSubTitle={
          "Book your free orientation session and select your course track today."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Session"}
      />
    </>
  );
};

export default page;
