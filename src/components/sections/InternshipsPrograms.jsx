import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import PreviewInternshipCards from "@/components/data-displays/PreviewInternshipCards";

import { internshipPrograms } from "@/constants/internshipsContent";

import styles from "@/styles/pages/Internship.module.css";

const InternshipsPrograms = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.internshipsProgramsSection}>
      <Container className="container-y-padding">
        <Box textAlign={"center"}>
          <span className="overlineText" style={{ color: "var(--primary)" }}>
            Explore Our
          </span>
          <h2>Internship Programs</h2>
        </Box>
        <Grid container my={4} spacing={2}>
          {internshipPrograms.map((internshipProgram, index) => (
            <Grid
              key={`${internshipProgram.title} ${index}`}
              size={{ xs: 12, lg: 4 }}
              display={"flex"}
              justifyContent={"center"}
            >
              <PreviewInternshipCards
                poster={internshipProgram.poster}
                posterAlt={internshipProgram.posterAlt}
                title={internshipProgram.title}
                description={internshipProgram.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default InternshipsPrograms;
