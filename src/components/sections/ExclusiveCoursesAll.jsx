import Container from "@/components/layout/Container";
import TrendingCourseBigPreview from "@/components/data-displays/TrendingCourseBigPreview";

import { exclusiveCourses } from "@/constants/courseContent";

import aiImage from "../../../public/ai-art.webp";
import aiAssistant from "../../../public/ai-assistant.webp";
import whatsAppBot from "../../../public/whats-app-bot.webp";
import noCode from "../../../public/no-code-prototype.webp";
import freelancers from "../../../public/freelancers.webp";
import medicalReport from "../../../public/data-science-and-ai.webp";
import gameDev from "../../../public/game-dev.webp";
import quantum from "../../../public/quantum.webp";
import spaceStation from "../../../public/space-station.webp";

import styles from "@/styles/pages/Courses.module.css";

const ExclusiveCoursesAll = ({
  firstSectionID,
  secondSectionID,
  thirdSectionID,
  fourthSectionID,
  fifthSectionID,
  sixthSectionID,
  seventhSectionID,
  eightSectionID,
  ninthSectionID,
}) => {
  return (
    <>
      <section
        id={firstSectionID}
        className={styles.aiCreativityCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={aiImage}
            posterAlt={"AI generated dna structure in a floral style"}
            trendingCourse={exclusiveCourses[0]}
          />
        </Container>
      </section>
      <section
        id={secondSectionID}
        className={styles.aiAssistantCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={aiAssistant}
            posterAlt={"A robot cutting an apple"}
            trendingCourse={exclusiveCourses[1]}
          />
        </Container>
      </section>
      <section
        id={thirdSectionID}
        className={styles.whatsAppBotCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={whatsAppBot}
            posterAlt={"A phone with whatsapp screen on it"}
            trendingCourse={exclusiveCourses[2]}
          />
        </Container>
      </section>
      <section
        id={fourthSectionID}
        className={styles.noCodeProductCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={noCode}
            posterAlt={"A girl doing some work on desktop using stylus"}
            trendingCourse={exclusiveCourses[3]}
          />
        </Container>
      </section>
      <section
        id={fifthSectionID}
        className={styles.entrepreneursCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={freelancers}
            posterAlt={"A guy working on two laptops"}
            trendingCourse={exclusiveCourses[4]}
          />
        </Container>
      </section>
      <section
        id={sixthSectionID}
        className={styles.healthcareCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={medicalReport}
            posterAlt={
              "Some reports being analysed while pen is pointing to some stats data"
            }
            trendingCourse={exclusiveCourses[5]}
          />
        </Container>
      </section>
      <section
        id={seventhSectionID}
        className={styles.gameDesignCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={gameDev}
            posterAlt={
              "A desk with game controller and some other hardware on it"
            }
            trendingCourse={exclusiveCourses[6]}
          />
        </Container>
      </section>
      <section
        id={eightSectionID}
        className={styles.quantumComputingCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={quantum}
            posterAlt={"Represetation of quantum computing bit states"}
            trendingCourse={exclusiveCourses[7]}
          />
        </Container>
      </section>
      <section
        id={ninthSectionID}
        className={styles.spaceDataCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={spaceStation}
            posterAlt={"A space image with satellite"}
            trendingCourse={exclusiveCourses[8]}
          />
        </Container>
      </section>
    </>
  );
};

export default ExclusiveCoursesAll;
