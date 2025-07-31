import Container from "@/components/layout/Container";
import TrendingCourseBigPreview from "@/components/data-displays/TrendingCourseBigPreview";

import { trendingCourses } from "@/constants/courseContent";

import aiImage from "../../../public/artificial-intelligence.webp";
import dataScienceAndAI from "../../../public/data-science-and-ai.webp";
import cloudComputing from "../../../public/cloud-computing.webp";
import security from "../../../public/security.webp";
import webAndMobileApp from "../../../public/web-and-mobile-app.webp";
import blockchain from "../../../public/blockchains.webp";
import iot from "../../../public/iot-module.webp";

import styles from "@/styles/pages/Courses.module.css";

const TrendingCoursesAll = ({
  firstSectionID,
  secondSectionID,
  thirdSectionID,
  fourthSectionID,
  fifthSectionID,
  sixthSectionID,
  seventhSectionID,
}) => {
  return (
    <>
      <section id={firstSectionID} className={styles.aiCoursePreviewSection}>
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={aiImage}
            posterAlt={"AI generated brain image"}
            trendingCourse={trendingCourses[0]}
          />
        </Container>
      </section>
      <section
        id={secondSectionID}
        className={styles.dataScienceCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={dataScienceAndAI}
            posterAlt={"Stats papers on table with a hand pointing to them"}
            trendingCourse={trendingCourses[1]}
          />
        </Container>
      </section>
      <section
        id={thirdSectionID}
        className={styles.cloudComputingCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={cloudComputing}
            posterAlt={"A server in cloud shape connected to a computer"}
            trendingCourse={trendingCourses[2]}
          />
        </Container>
      </section>
      <section
        id={fourthSectionID}
        className={styles.cybersecurityCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={security}
            posterAlt={"A laptop keyboard with a caution warning"}
            trendingCourse={trendingCourses[3]}
          />
        </Container>
      </section>
      <section
        id={fifthSectionID}
        className={styles.webAndMobileCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={webAndMobileApp}
            posterAlt={"A mobile phone in hand with a web app open"}
            trendingCourse={trendingCourses[4]}
          />
        </Container>
      </section>
      <section
        id={sixthSectionID}
        className={styles.blockChainCoursePreviewSection}
      >
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={blockchain}
            posterAlt={"Ripple etehereum and bitcoin and micro sdhc card"}
            trendingCourse={trendingCourses[5]}
          />
        </Container>
      </section>
      <section id={seventhSectionID} className={styles.iotCoursePreviewSection}>
        <Container className="container-y-padding">
          <TrendingCourseBigPreview
            poster={iot}
            posterAlt={"Green iot circuit board with glass case"}
            trendingCourse={trendingCourses[6]}
          />
        </Container>
      </section>
    </>
  );
};

export default TrendingCoursesAll;
