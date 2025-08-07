import StandardCoursesCollege from "@/components/sections/StandardCoursesCollege";
import StandardCoursesHero from "@/components/sections/StandardCoursesHero";
import StandardCoursesProfessionals from "@/components/sections/StandardCoursesProfessionals";
import StandardCoursesSchoolKids from "@/components/sections/StandardCoursesSchoolKids";
import StandardCoursesSchoolTeens from "@/components/sections/StandardCoursesSchoolTeens";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <StandardCoursesHero sectionID={"hero"} />
      <StandardCoursesSchoolKids sectionID={"school-kids"} />
      <StandardCoursesSchoolTeens sectionID={"school-teens"} />
      <StandardCoursesCollege sectionID={"college-students"} />
      <StandardCoursesProfessionals
        sectionID={"working-professionals"}
      />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Ready to begin?"}
        ctaSubTitle={
          "Book your free orientation session and select your course track today."
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Session"}
      />
    </>
  );
};

export default page;
