import Container from "@/components/layout/Container";
import SuccessSteps from "@/components/expansions/SuccessSteps";

import styles from "@/styles/pages/Competitions.module.css";
import { Box } from "@mui/material";

const CompetitionsHowTo = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.competitionsHowToSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText">Learn</span>
          <h2>How To Prepare</h2>
        </Box>
        <SuccessSteps
          stepOneTitle="Understand the Rules"
          stepTwoTitle="Practice Hard and Smart"
          stepThreeTitle="Give Your Best Effort"
        />
      </Container>
    </section>
  );
};

export default CompetitionsHowTo;
