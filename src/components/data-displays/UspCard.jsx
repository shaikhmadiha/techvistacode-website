import { Box, Stack } from "@mui/material";

const UspCard = ({ description, Icon }) => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--white)",
        width: "fit-content",
        padding: { xs: "16px", md: "24px" },
        borderRadius: "var(--medium-rounded)",
        boxShadow: "var(--low-shadow)",
      }}
    >
      <Stack spacing={1}>
        <Box
          sx={{
            border: "1px solid var(--primary)",
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
          <p style={{ color: "var(--black)" }}>{description}</p>
        </Box>
      </Stack>
    </Box>
  );
};

export default UspCard;
