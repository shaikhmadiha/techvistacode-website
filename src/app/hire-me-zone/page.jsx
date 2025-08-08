import HireMeZoneHero from "@/components/sections/HireMeZoneHero";
import HireMeZoneBanner from "@/components/sections/HireMeZoneBanner";
import HireMeZoneRegister from "@/components/sections/HireMeZoneRegister";
import HireMeZoneMock from "@/components/sections/HireMeZoneMock";

export default function HireMeZone() {
  return (
    <>
      <HireMeZoneHero sectionID={"hero"} />
      <HireMeZoneBanner sectionID={"banner"} />
      <HireMeZoneRegister sectionID={"register"} />
      <HireMeZoneMock />
    </>
  );
}
