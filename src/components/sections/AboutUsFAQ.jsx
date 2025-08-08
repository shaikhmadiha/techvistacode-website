import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Container from "@/components/layout/Container";

import { aboutUsFAQ } from "@/constants/aboutUsContent";

import styles from "@/styles/pages/AboutUs.module.css";

const AboutUsFAQ = ({ sectionID }) => {
  return (
    <section
      id={sectionID}
      className={`${styles.aboutUsFAQSection} secondarySurfaceBackground`}
    >
      <Container className="container-y-padding">
        <Box textAlign={"center"} mb={5}>
          <span className="overlineText" style={{ color: "var(--white)" }}>
            Frequently Asked Questions
          </span>
          <h2 style={{ color: "var(--white)" }}>F.A.Q.</h2>
        </Box>
        {aboutUsFAQ.map((faq, index) => (
          <Accordion variant="outlined" key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h5>{faq.question}</h5>
            </AccordionSummary>

            <AccordionDetails>
              <span>{faq.answer}</span>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </section>
  );
};

export default AboutUsFAQ;
