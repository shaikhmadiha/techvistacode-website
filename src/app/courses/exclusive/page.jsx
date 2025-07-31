import ExclusiveCoursesHero from "@/components/sections/ExclusiveCoursesHero";
import ExclusiveCoursesAll from "@/components/sections/ExclusiveCoursesAll";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <ExclusiveCoursesHero sectionID={"exclusive-course-hero"} />
      <ExclusiveCoursesAll
        firstSectionID={"exclusive-course-ai-art"}
        secondSectionID={"exclusive-course-ai-assistant"}
        thirdSectionID={"exclusive-course-whatsapp-bot"}
        fourthSectionID={"exclusive-course-no-code"}
        fifthSectionID={"exclusive-course-ai-entrepreneurs"}
        sixthSectionID={"exclusive-course-ai-healthcare"}
        seventhSectionID={"exclusive-course-game-design"}
        eightSectionID={"exclusive-course-quantum-computing"}
        ninthSectionID={"exclusive-course-space-data"}
      />
      <PageCTA
        pageId={"exclusive-courses-page-cta"}
        ctaTitle={"Ready to innovate?"}
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
