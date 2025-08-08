import BuildWithUsHero from "@/components/sections/BuildWithUsHero";
import BuildWithUsBanner from "@/components/sections/BuildWithUsBanner";
import BuildWithUsCategories from "@/components/sections/BuildWithUsCategories";
import BuildWithUsFeatures from "@/components/sections/BuildWithUsFeatures";
import BuildWithUsRegister from "@/components/sections/BuildWithUsRegister";
import PageCTA from "@/components/layout/PageCTA";

export default function BuildWithUs() {
  return (
    <>
      <BuildWithUsHero sectionID={"hero"} />
      <BuildWithUsBanner sectionID={"banner"} />
      <BuildWithUsCategories sectionID={"categories"} />
      <BuildWithUsFeatures sectionID={"features"} />
      <BuildWithUsRegister sectionID={"register"} />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Ready to Build with Us?"}
        ctaSubTitle={
          "Have a project in mind? Discover how we bring websites, apps, AI tools, and custom software to life."
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Start Your Project"}
      />
    </>
  );
}
