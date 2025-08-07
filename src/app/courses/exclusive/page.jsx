import ExclusiveCoursesHero from "@/components/sections/ExclusiveCoursesHero";
import ExclusiveCoursesAll from "@/components/sections/ExclusiveCoursesAll";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <ExclusiveCoursesHero sectionID={"hero"} />
      <ExclusiveCoursesAll
        firstSectionID={"ai-art"}
        secondSectionID={"ai-assistant"}
        thirdSectionID={"whatsapp-bot"}
        fourthSectionID={"no-code"}
        fifthSectionID={"ai-entrepreneurs"}
        sixthSectionID={"ai-healthcare"}
        seventhSectionID={"game-design"}
        eightSectionID={"quantum-computing"}
        ninthSectionID={"space-data"}
      />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Ready to innovate?"}
        ctaSubTitle={
          "Book your free orientation session and select your course track today."
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Session"}
        textured
      />
    </>
  );
};

export default page;
