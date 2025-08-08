import ContactUsHero from "@/components/sections/ContactUsHero";
import ContactUsRegister from "@/components/sections/ContactUsRegister";
import ContactUsBanner from "@/components/sections/ContactUsBanner";
import ContactUsVirtualHQ from "@/components/sections/ContactUsVirtualHQ";
import ContactUsStayConnected from "@/components/sections/ContactUsStayConnected";
import ContactUsSuggestion from "@/components/sections/ContactUsSuggestion";
import PageCTA from "@/components/layout/PageCTA";

export default function ContactUs() {
  return (
    <>
      <ContactUsHero sectionID={"hero"} />
      <ContactUsRegister sectionID={"request"} />
      <ContactUsBanner sectionID={"banner"} />
      <ContactUsVirtualHQ sectionID={"virtual-hq"} />
      <ContactUsSuggestion sectionID={"registration"} />
      <ContactUsStayConnected sectionID={"stay-connected"} />
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
