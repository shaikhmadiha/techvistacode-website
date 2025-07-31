import { Box, Stack } from "@mui/material";
import { GiPathDistance } from "react-icons/gi";
import { FaBook, FaRocket } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const outerBoxSize = 640;
const sideBoxSize = 160;
const outerBoxSizeMobile = 320;
const sideBoxSizeMobile = 80;

const ProcessSteps = () => {
  return (
    <Box
      border={"1px dashed var(--primary)"}
      borderRadius={"var(--high-rounded)"}
      height={{ xs: outerBoxSizeMobile, sm: outerBoxSize }}
      width={{ xs: outerBoxSizeMobile, sm: outerBoxSize }}
      mx={"auto"}
      position={"relative"}
    >
      <Box
        border={"1px dashed var(--primary)"}
        height={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
        width={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
        mx={"auto"}
        bgcolor={"var(--white)"}
        borderRadius={"var(--medium-rounded)"}
        sx={{
          transform: "translateY(-50%)",
        }}
        className="centerContentUsingFlex"
      >
        <Stack alignItems={"center"} p={1} spacing={1} textAlign={"center"}>
          <GiPathDistance size={25} color="var(--primary)" />
          <h5>Choose Your Path</h5>
        </Stack>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        my={"25%"}
        sx={{ transform: "translateY(-50%)" }}
      >
        <Box
          border={"1px dashed var(--primary)"}
          height={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
          width={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
          bgcolor={"var(--white)"}
          borderRadius={"var(--medium-rounded)"}
          sx={{ transform: "translateX(-50%)" }}
          className="centerContentUsingFlex"
        >
          <Stack alignItems={"center"} p={1} spacing={1} textAlign={"center"}>
            <AiOutlineGlobal size={25} color="var(--primary)" />
            <h5>Grow Your Network</h5>
          </Stack>
        </Box>
        <Box
          border={"1px dashed var(--primary)"}
          height={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
          width={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
          bgcolor={"var(--white)"}
          borderRadius={"var(--medium-rounded)"}
          sx={{ transform: "translateX(50%)" }}
          className="centerContentUsingFlex"
        >
          <Stack alignItems={"center"} p={1} s1acing={2} textAlign={"center"}>
            <FaBook size={25} color="var(--primary)" />
            <h5>Learn & Build</h5>
          </Stack>
        </Box>
      </Box>
      <Box
        border={"1px dashed var(--primary)"}
        height={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
        width={{ xs: sideBoxSizeMobile, sm: sideBoxSize }}
        mx={"auto"}
        bgcolor={"var(--white)"}
        borderRadius={"var(--medium-rounded)"}
        sx={{ transform: "translateY(-50%)" }}
        className="centerContentUsingFlex"
      >
        <Stack alignItems={"center"} p={1} sp1cing={2} textAlign={"center"}>
          <FaRocket size={25} color="var(--primary)" />
          <h5>Launch Your Career</h5>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProcessSteps;
