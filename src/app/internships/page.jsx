import InternshipsHero from "@/components/sections/InternshipsHero";
import InternshipsBanner from "@/components/sections/InternshipsBanner";
import InternshipsPrograms from "@/components/sections/InternshipsPrograms";
import InternshipsHowTo from "@/components/sections/InternshipsHowTo";
import InternshipsRegister from "@/components/sections/InternshipsRegister";
import PageCTA from "@/components/layout/PageCTA";

export default function Internships() {
  return (
    <>
      <InternshipsHero sectionID={"internship-hero"} />
      <InternshipsBanner sectionID={"internship-banner"} />
      <InternshipsPrograms sectionID={"internship-programs"} />
      <InternshipsHowTo sectionID={"internship-how-to"} />
      <InternshipsRegister sectionID={"internship-register"} />
      <PageCTA
        pageId={"internships-page-cta"}
        ctaTitle={"Questions About Internships?"}
        ctaSubTitle={
          "Curious about internship opportunities? Learn how to apply, eligibility, benefits, and everything else."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Get Internship Guidance"}
      />
    </>
  );
}
