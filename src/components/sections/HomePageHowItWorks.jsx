import { Box } from "@mui/material";

import Container from "@/components/layout/Container";
import SuccessSteps from "@/components/expansions/SuccessSteps";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageHowItWorks = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.howItWorks}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span
            className="overlineText"
            style={{ color: "var(--secondaryLight)" }}
          >
            Clarity, Action, Success
          </span>
          <h2 style={{ color: "var(--secondary)" }}>The Path Forward</h2>
        </Box>
        <SuccessSteps />
      </Container>
    </section>
  );
};

export default HomePageHowItWorks;
