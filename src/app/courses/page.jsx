import CoursesHero from "@/components/sections/CoursesHero";
import CoursesStandard from "@/components/sections/CoursesStandard";
import CoursesTrending from "@/components/sections/CoursesTrending";
import CoursesExclusive from "@/components/sections/CoursesExclusive";
import PageCTA from "@/components/layout/PageCTA";

export default function Courses() {
  return (
    <>
      <CoursesHero sectionID={"courses-hero"} />
      <CoursesStandard sectionID={"courses-standard-preview"} />
      <CoursesTrending sectionID={"courses-trending-preview"} />
      <CoursesExclusive sectionID={"courses-exclusive-preview"} />
      <PageCTA
        pageId={"courses-page-cta"}
        ctaTitle={"Ready to start learning?"}
        ctaSubTitle={
          "Pick your path, enroll in a free orientation session, and start coding in minutes—no prior experience needed."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
}
