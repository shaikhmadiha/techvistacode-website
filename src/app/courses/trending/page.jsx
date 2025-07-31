import TrendingCoursesHero from "@/components/sections/TrendingCoursesHero";
import TrendingCoursesAll from "@/components/sections/TrendingCoursesAll";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <TrendingCoursesHero sectionID={"trending-course-hero"} />
      <TrendingCoursesAll
        firstSectionID={"trending-course-ai"}
        secondSectionID={"trending-course-data-science"}
        thirdSectionID={"trending-course-cloud-computing"}
        fourthSectionID={"trending-course-cyber-security"}
        fifthSectionID={"trending-course-web-and-mobile"}
        sixthSectionID={"trending-course-blockchain"}
        seventhSectionID={"trending-course-iot"}
      />
      <PageCTA
        pageId={"trending-courses-page-cta"}
        ctaTitle={"Ready to dive in?"}
        ctaSubTitle={
          "Book your free orientation session and select your course track today."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
};

export default page;
