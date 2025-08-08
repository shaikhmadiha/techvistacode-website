import FCAHero from "@/components/sections/FCAHero";
import FCABanner from "@/components/sections/FCABanner";
import FCAUpcoming from "@/components/sections/FCAUpcoming";
import FCARegister from "@/components/sections/FCARegister";
import FCARewards from "@/components/sections/FCARewards";
import PageCTA from "@/components/layout/PageCTA";

const page = () => {
  return (
    <>
      <FCAHero sectionID={"hero"} />
      <FCABanner sectionID={"banner"} />
      <FCAUpcoming sectionID={"upcoming"} />
      <FCARegister sectionID={"register"} />
      <FCARewards sectionID={"rewards"} />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Question About Flash Coding Arena?"}
        ctaSubTitle={
          "Got questions about competitions? Find answers on rules, entries, prizes, and more—all in one place!"
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
};

export default page;
