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
      <AboutUsHero sectionID={"about-us-hero"} />
      <AboutUsBanner sectionID={"about-us-about"} />
      <AboutUsDiffrence sectionID={"about-us-diffrence"} />
      <AboutUsVision sectionID={"about-us-vision"} />
      <AboutUsHowTo sectionID={"about-us-how-it-works"} />
      <AboutUsWhyChoose sectionID={"about-us-why-choose-us"} />
      <AboutUsCommunity sectionID={"about-us-community"} />
      <AboutUsBlogFeatures sectionID={"about-us-blog-features"} />
      <AboutUsPartnership sectionID={"about-us-partnership"} />
      <AboutUsFAQ sectionID={"about-us-faq"} />
      <PageCTA
        pageId={"about-us-page-cta"}
        ctaTitle={"Ready to join our Techverse?"}
        ctaSubTitle={
          "Step into a world of innovation and creativity, where ideas turn into cutting-edge technology."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Session"}
      />
    </>
  );
}
