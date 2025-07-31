import { Box, Grid, Stack } from "@mui/material";

import { GiPathDistance } from "react-icons/gi";
import { FaBook, FaRocket } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiFlagBannerFoldThin } from "react-icons/pi";

const SuccessSteps = ({
  stepOneTitle = "Choose your path",
  stepTwoTitle = "Learn & Build",
  stepThreeTitle = "Launch your career",
}) => {
  return (
    <Grid container spacing={2} mt={4}>
      <Grid
        p={2}
        size={{ xs: 12, md: 4 }}
        sx={{
          background: "url(/howitworksBG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "ceneter",
          minHeight: "400px",
          borderRadius: "var(--low-rounded)",
        }}
      >
        <Box
          p={2}
          height={"100%"}
          width={"100%"}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "var(--medium-rounded)",
            position: "relative",
          }}
        >
          <Stack spacing={4}>
            <GiPathDistance size={75} color="var(--white)" />
            <h3>{stepOneTitle}</h3>
          </Stack>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              transition: "transform 1s ease",
              transform: { xs: "rotate(90deg)", md: "rotate(0deg)" },
              "&:hover": {
                transform: {
                  xs: "translateY(75%) rotate(90deg) ",
                  md: "rotate(0deg) translateX(75%)",
                },
              },
            }}
          >
            <FaArrowRightLong size={180} color="var(--accent)" />
          </Box>
        </Box>
      </Grid>

      <Grid
        p={2}
        size={{ xs: 12, md: 4 }}
        sx={{
          background: "url(/howitworksBG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "ceneter",
          minHeight: "400px",
          borderRadius: "var(--low-rounded)",
        }}
      >
        <Box
          p={2}
          height={"100%"}
          width={"100%"}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",

            borderRadius: "var(--medium-rounded)",
            position: "relative",
          }}
        >
          <Stack spacing={4}>
            <FaBook size={75} color="var(--white)" />
            <h3>{stepTwoTitle}</h3>
          </Stack>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              transition: "transform 1s ease",
              transform: { xs: "rotate(90deg)", md: "rotate(0deg)" },
              "&:hover": {
                transform: {
                  xs: "translateY(75%) rotate(90deg) ",
                  md: "rotate(0deg) translateX(75%)",
                },
              },
            }}
          >
            <FaArrowRightLong size={180} color="var(--accent)" />
          </Box>
        </Box>
      </Grid>

      <Grid
        p={2}
        size={{ xs: 12, md: 4 }}
        sx={{
          background: "url(/howitworksBG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "ceneter",
          minHeight: "400px",
          borderRadius: "var(--low-rounded)",
        }}
      >
        <Box
          p={2}
          height={"100%"}
          width={"100%"}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",

            borderRadius: "var(--medium-rounded)",
            position: "relative",
          }}
        >
          <Stack spacing={4}>
            <FaRocket size={75} color="var(--white)" />
            <h3>{stepThreeTitle}</h3>
          </Stack>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <PiFlagBannerFoldThin size={180} color="var(--accent)" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SuccessSteps;
