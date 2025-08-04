import AlumniConnectHero from "@/components/sections/AlumniConnectHero";
import AlumniConnectFeatures from "@/components/sections/AlumniConnectFeatures";
import PageCTA from "@/components/layout/PageCTA";

export default function AlumniConnect() {
  return (
    <>
      <AlumniConnectHero sectionID={"alumni-connect-network-hero"} />
      <AlumniConnectFeatures sectionID={"alumni-connect-network-features"} />
      <PageCTA
        pageId={"alumni-connect-network-page-cta"}
        ctaTitle={"Discover Community Impact"}
        ctaSubTitle={
          "Our Alumni Connect Network fosters emotional bonds and brand loyalty by creating a supportive ecosystem."
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Join Now"}
      />
    </>
  );
}
