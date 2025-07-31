import BuildWithUsHero from "@/components/sections/BuildWithUsHero";
import BuildWithUsBanner from "@/components/sections/BuildWithUsBanner";
import BuildWithUsCategories from "@/components/sections/BuildWithUsCategories";
import BuildWithUsFeatures from "@/components/sections/BuildWithUsFeatures";
import BuildWithUsRegister from "@/components/sections/BuildWithUsRegister";
import PageCTA from "@/components/layout/PageCTA";

export default function BuildWithUs() {
  return (
    <>
      <BuildWithUsHero sectionID={"build-with-us-hero"} />
      <BuildWithUsBanner sectionID={"build-with-us-banner"} />
      <BuildWithUsCategories sectionID={"build-with-us-categories"} />
      <BuildWithUsFeatures sectionID={"build-with-us-features"} />
      <BuildWithUsRegister sectionID={"build-with-us-register"} />
      <PageCTA
        pageId={"build-with-us-page-cta"}
        ctaTitle={"Ready to Build with Us?"}
        ctaSubTitle={
          "Have a project in mind? Discover how we bring websites, apps, AI tools, and custom software to life."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Start Your Project"}
      />
    </>
  );
}
