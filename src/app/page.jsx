import HomePageHero from "@/components/sections/HomePageHero";
import HomePageUSP from "@/components/sections/HomePageUSP";
import HomePagePopularCourses from "@/components/sections/HomePagePopularCourses";
import HomePageTestimonials from "@/components/sections/HomePageTestimonials";
import HomePageHowItWorks from "@/components/sections/HomePageHowItWorks";
import HomePageHighlights from "@/components/sections/HomePageHighlights";
import HomePageMentorship from "@/components/sections/HomePageMentorship";
import HomePagePopularBlogs from "@/components/sections/HomePagePopularBlogs";
import PageCTA from "@/components/layout/PageCTA";

export default function Home() {
  return (
    <>
      <HomePageHero sectionID={"hero"} />
      <HomePageUSP sectionID={"usp"} />
      <HomePagePopularCourses sectionID={"popular-courses"} />
      <HomePageTestimonials sectionID={"testimonials"} />
      <HomePageHowItWorks sectionID={"how-it-works"} />
      <HomePageHighlights sectionID={"highlights"} />
      <HomePageMentorship sectionID={"mentorship"} />
      <HomePagePopularBlogs sectionID={"preview-blogs"} />
      <PageCTA
        pageId={"home-page-cta"}
        ctaTitle={"Still Unsure?"}
        ctaSubTitle={
          "Book your free 30-minute tech consultation and craft your personalized learning roadmap."
        }
        btnVariant={"contained"}
        btnColor={"warning"}
        btnTitle={"Book Free Consultation"}
      />
    </>
  );
}
