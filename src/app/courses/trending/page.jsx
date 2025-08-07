import TrendingCoursesHero from "@/components/sections/TrendingCoursesHero";
import TrendingCoursesAll from "@/components/sections/TrendingCoursesAll";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <TrendingCoursesHero sectionID={"hero"} />
      <TrendingCoursesAll
        firstSectionID={"artificial-intelligence"}
        secondSectionID={"data-science"}
        thirdSectionID={"cloud-computing"}
        fourthSectionID={"cyber-security"}
        fifthSectionID={"web-and-mobile"}
        sixthSectionID={"blockchain"}
        seventhSectionID={"iot"}
      />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Ready to dive in?"}
        ctaSubTitle={
          "Book your free orientation session and select your course track today."
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Consultation"}
        textured
      />
    </>
  );
};

export default page;
