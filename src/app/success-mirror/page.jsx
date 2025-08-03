import SuccessMirrorHero from "@/components/sections/SuccessMirrorHero";
import SuccessMirrorHowTo from "@/components/sections/SuccessMirrorHowTo";
import SuccessMirrorGallery from "@/components/sections/SuccessMirrorGallery";
import SuccessMirrorBadges from "@/components/sections/SuccessMirrorBadges";
import SuccessMirrorBanner from "@/components/sections/SuccessMirrorBanner";

export default function SuccessMirror() {
  return (
    <>
      <SuccessMirrorHero sectionID={"success-mirror-hero"} />
      <SuccessMirrorHowTo sectionID={"success-mirror-how-to"} />
      <SuccessMirrorGallery sectionID={"success-mirror-gallery"} />
      <SuccessMirrorBadges sectionID={"success-mirror-badges"} />
      <SuccessMirrorBanner sectionID={"success-mirror-your-turn"} />
    </>
  );
}
