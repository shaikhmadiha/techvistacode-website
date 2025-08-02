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
      <ContactUsHero sectionID={"contact-us-hero"} />
      <ContactUsRegister sectionID={"contact-us-request"} />
      <ContactUsBanner sectionID={"contact-us-banner"} />
      <ContactUsVirtualHQ sectionID={"contact-us-virtual-hq"} />
      <ContactUsSuggestion sectionID={"contact-us-registration"} />
      <ContactUsStayConnected sectionID={"contact-us-stay-connected"} />
      <PageCTA
        pageId={"contact-us-page-cta"}
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
