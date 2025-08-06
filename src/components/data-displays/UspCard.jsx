import { Box, Stack } from "@mui/material";

const UspCard = ({ description, Icon }) => {
  return (
    <Box
      className="secondarySurfaceBackground"
      sx={{
        width: "fit-content",
        padding: { xs: "16px", md: "24px" },
        borderRadius: "var(--medium-rounded)",
        height: "100%",
      }}
    >
      <Stack spacing={1}>
        <Box
          sx={{
            border: "1px solid var(--white)",
            height: { xs: "60px", md: "75px" },
            width: { xs: "60px", md: "75px" },
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Icon}
        </Box>
        <Box>
          <p style={{ color: "var(--white)" }}>{description}</p>
        </Box>
      </Stack>
    </Box>
  );
};

export default UspCard;
