import HireMeZoneHero from "@/components/sections/HireMeZoneHero";
import HireMeZoneBanner from "@/components/sections/HireMeZoneBanner";
import HireMeZoneRegister from "@/components/sections/HireMeZoneRegister";
import HireMeZoneMock from "@/components/sections/HireMeZoneMock";

export default function HireMeZone() {
  return (
    <>
      <HireMeZoneHero sectionID={"hire-me-zone-hero"} />
      <HireMeZoneBanner sectionID={"hire-me-zone-banner"} />
      <HireMeZoneRegister sectionID={"hire-me-zone-register"} />
      <HireMeZoneMock />
    </>
  );
}
