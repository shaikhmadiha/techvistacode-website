import SuccessMirrorHero from "@/components/sections/SuccessMirrorHero";
import SuccessMirrorHowTo from "@/components/sections/SuccessMirrorHowTo";
import SuccessMirrorGallery from "@/components/sections/SuccessMirrorGallery";
import SuccessMirrorBadges from "@/components/sections/SuccessMirrorBadges";
import SuccessMirrorBanner from "@/components/sections/SuccessMirrorBanner";

export default function SuccessMirror() {
  return (
    <>
      <SuccessMirrorHero sectionID={"hero"} />
      <SuccessMirrorHowTo sectionID={"how-to"} />
      <SuccessMirrorGallery sectionID={"gallery"} />
      <SuccessMirrorBadges sectionID={"badges"} />
      <SuccessMirrorBanner sectionID={"your-turn"} />
    </>
  );
}
