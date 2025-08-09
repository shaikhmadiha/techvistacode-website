import { Box } from "@mui/material";

import * as motion from "motion/react-client";

const Credit = () => {
  return (
    <Box
      height={64}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"var(--white)"}
    >
      
      <motion.p
        initial={{ opacity: 0, y: 32 }} // Start with low opacity and below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 1 }} // Smooth transition
        style={{ color: "var(--primary)" }}
      >
        Website done by{" "}
        <a
          style={{ textDecoration: "none", color: "#f35e3e" }}
          href="https://iamfaraz-v3.vercel.app/"
        >
          Faraz Ahmad
        </a>
      </motion.p>
    </Box>
  );
};

export default Credit;
