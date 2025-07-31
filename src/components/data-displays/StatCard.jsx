import { Box, Stack } from "@mui/material";

const StatCard = ({ stat, statLabel }) => {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)",
        width: "fit-content",
        padding: "8px 32px",
        borderRadius: "var(--high-rounded)",
        boxShadow: "var(--low-shadow)",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Box
          sx={{
            border: "1px solid var(--white)",
            height: "75px",
            width: "75px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ color: "var(--white)" }}>{stat}</h4>
        </Box>
        <Box>
          <h4 style={{ color: "var(--white)" }}>{statLabel}</h4>
        </Box>
      </Stack>
    </Box>
  );
};

export default StatCard;
