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
      <CompetitionsHero sectionID={"competitions-hero-section"} />
      <CompetitionsFeatures sectionID={"competitions-feature-section"} />
      <CompetitionsBanner sectionID={"competitions-banner-section"} />
      <CompetitionsFCAPreview
        sectionID={"competitions-flash-coding-arena-preview-section"}
      />
      <CompetitionsRegister sectionID={"competitions-register-section"} />
      <CompetitionsRewards sectionID={"competitions-rewards-section"} />
      <CompetitionsHowTo sectionID={"competitions-how-to-section"} />
      <PageCTA
        pageId={"competitions-page-cta"}
        ctaTitle={"Question About Competitions?"}
        ctaSubTitle={
          "Got questions about competitions? Find answers on rules, entries, prizes, and more—all in one place!"
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
}
