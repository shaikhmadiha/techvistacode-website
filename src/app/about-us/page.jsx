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

export default function AboutUs() {
  return (
    <>
      <AboutUsHero sectionID={"about-us-hero"} />
      <AboutUsBanner sectionID={"about-us-about"} />
      <AboutUsDiffrence sectionID={"about-us-diffrence"} />
      <AboutUsVision sectionID={"about-us-vision"} />
      <AboutUsHowTo sectionID={"about-us-how-it-works"} />
      <AboutUsWhyChoose />
      <AboutUsCommunity />
      <AboutUsBlogFeatures />
      <AboutUsPartnership />
      <AboutUsFAQ />
    </>
  );
}
