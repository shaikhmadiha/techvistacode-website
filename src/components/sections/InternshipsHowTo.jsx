import Container from "@/components/layout/Container";
import SuccessSteps from "@/components/expansions/SuccessSteps";

import styles from "@/styles/pages/Internship.module.css";
import { Box } from "@mui/material";

const InternshipsHowTo = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.internshipsHowToSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText">Hurry Up</span>
          <h2>Get Internship</h2>
        </Box>
        <SuccessSteps
          stepOneTitle="Choose Your Course"
          stepTwoTitle="Complete Internship"
          stepThreeTitle="Get Experience"
        />
      </Container>
    </section>
  );
};

export default InternshipsHowTo;
