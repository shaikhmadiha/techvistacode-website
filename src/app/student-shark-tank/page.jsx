import StudentSharkTankHero from "@/components/sections/StudentSharkTankHero";
import StudentSharkTankBanner from "@/components/sections/StudentSharkTankBanner";
import StudentSharkTankHowTo from "@/components/sections/StudentSharkTankHowTo";
import StudentSharkTankRegister from "@/components/sections/StudentSharkTankRegister";
import StudentSharkTankRewards from "@/components/sections/StudentSharkTankRewards";
import PageCTA from "@/components/layout/PageCTA";

export default function StudentSharkTank() {
  return (
    <>
      <StudentSharkTankHero sectionID={"student-shark-tank-hero"} />
      <StudentSharkTankBanner sectionID={"student-shark-tank-banner"} />
      <StudentSharkTankHowTo sectionID={"student-shark-tank-how-to"} />
      <StudentSharkTankRegister sectionID={"student-shark-tank-register"} />
      <StudentSharkTankRewards sectionID={"student-shark-tank-rewards"} />
      <PageCTA
        pageId={"student-shark-tank-page-cta"}
        ctaTitle={"Got Questions?"}
        ctaSubTitle={
          "Book your free 30-minute tech consultation and we will help you with your million dollar idea!"
        }
        btnVariant={"contained"}
        btnColor={"secondary"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
}
