import CompetitionsHero from "@/components/sections/CompetitionsHero";
import CompetitionsFeatures from "@/components/sections/CompetitionsFeatures";
import CompetitionsBanner from "@/components/sections/CompetitionsBanner";
import CompetitionsFCAPreview from "@/components/sections/CompetitionsFCAPreview";
import CompetitionsRegister from "@/components/sections/CompetitionsRegister";
import CompetitionsRewards from "@/components/sections/CompetitionsRewards";
import CompetitionsHowTo from "@/components/sections/CompetitionsHowTo";
import PageCTA from "@/components/layout/PageCTA";

export default function Competitions() {
  return (
    <>
      <CompetitionsHero sectionID={"hero"} />
      <CompetitionsFeatures sectionID={"feature"} />
      <CompetitionsBanner sectionID={"banner"} />
      <CompetitionsFCAPreview sectionID={"flash-coding-arena-preview"} />
      <CompetitionsRegister sectionID={"register"} />
      <CompetitionsRewards sectionID={"rewards"} />
      <CompetitionsHowTo sectionID={"how-to"} />
      <PageCTA
        pageId={"page-cta"}
        ctaTitle={"Question About Competitions?"}
        ctaSubTitle={
          "Got questions about competitions? Find answers on rules, entries, prizes, and more—all in one place!"
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
}
