import FCAHero from "@/components/sections/FCAHero";
import FCABanner from "@/components/sections/FCABanner";
import FCAUpcoming from "@/components/sections/FCAUpcoming";
import FCARegister from "@/components/sections/FCARegister";
import FCARewards from "@/components/sections/FCARewards";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <FCAHero sectionID={"fca-hero"} />
      <FCABanner sectionID={"fca-banner"} />
      <FCAUpcoming sectionID={"fca-upcoming"} />
      <FCARegister sectionID={"fca-register"} />
      <FCARewards sectionID={"fca-rewards"} />
      <PageCTA
        pageId={"fca-page-cta"}
        ctaTitle={"Question About Flash Coding Arena?"}
        ctaSubTitle={
          "Got questions about competitions? Find answers on rules, entries, prizes, and more—all in one place!"
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
};

export default page;
