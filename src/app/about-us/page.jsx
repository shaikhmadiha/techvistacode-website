import AboutUsHero from "@/components/sections/AboutUsHero";
import AboutUsBanner from "@/components/sections/AboutUsBanner";
import AboutUsDiffrence from "@/components/sections/AboutUsDiffrence";
import AboutUsVision from "@/components/sections/AboutUsVision";
import AboutUsHowTo from "@/components/sections/AboutUsHowTo";
import AboutUsWhyChoose from "@/components/sections/AboutUsWhyChoose";
import AboutUsCommunity from "@/components/sections/AboutUsCommunity";
import AboutUsBlogFeatures from "@/components/sections/AboutUsBlogFeatures";
import AboutUsPartnership from "@/components/sections/AboutUsPartnership";
import AboutUsFAQ from "@/components/sections/AboutUsFAQ";
import PageCTA from "@/components/layout/PageCTA";

export default function AboutUs() {
  return (
    <>
      <AboutUsHero sectionID={"hero"} />
      <AboutUsBanner sectionID={"about"} />
      <AboutUsDiffrence sectionID={"diffrence"} />
      <AboutUsVision sectionID={"vision"} />
      <AboutUsHowTo sectionID={"how-it-works"} />
      <AboutUsWhyChoose sectionID={"why-choose-us"} />
      <AboutUsCommunity sectionID={"community"} />
      <AboutUsBlogFeatures sectionID={"blog-features"} />
      <AboutUsPartnership sectionID={"partnership"} />
      <AboutUsFAQ sectionID={"faq"} />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Ready to join our Techverse?"}
        ctaSubTitle={
          "Step into a world of innovation and creativity, where ideas turn into cutting-edge technology."
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Session"}
      />
    </>
  );
}
