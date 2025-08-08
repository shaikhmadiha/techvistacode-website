import { Box } from "@mui/material";

import Container from "@/components/layout/Container";
import SuccessSteps from "@/components/expansions/SuccessSteps";

import styles from "@/styles/pages/SuccessMirror.module.css";

const SuccessMirrorHowTo = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.successMirrorHowToSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--secondary)" }}>
            Learn
          </span>
          <h2 style={{ color: "var(--secondary)" }}>How Success Mirror Work</h2>
        </Box>
        <SuccessSteps
          stepOneTitle="Alumni Profiles"
          stepTwoTitle="Badge System"
          stepThreeTitle="Live Feedback"
        />
      </Container>
    </section>
  );
};

export default SuccessMirrorHowTo;
