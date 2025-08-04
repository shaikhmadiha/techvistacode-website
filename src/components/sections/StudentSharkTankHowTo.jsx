import { Box } from "@mui/material";

import Container from "@/components/layout/Container";
import SuccessSteps from "@/components/expansions/SuccessSteps";

import styles from "@/styles/pages/StudentSharkTank.module.css";

const StudentSharkTankHowTo = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.studentSharkTankHowTo}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText">Learn</span>
          <h2>How Student Shark Tank Works</h2>
        </Box>
        <SuccessSteps
          stepOneTitle="Submit Your Idea"
          stepTwoTitle="Mentor Review"
          stepThreeTitle="Rewards Ceremony"
        />
      </Container>
    </section>
  );
};
export default StudentSharkTankHowTo;
