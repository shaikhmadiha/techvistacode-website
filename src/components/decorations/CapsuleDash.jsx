import { Stack } from "@mui/material";

const CapsuleDash = ({ thickness }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <div
        style={{
          height: `${thickness}`,
          width: "80px",
          borderRadius: `${thickness}`,
          backgroundColor: "var(--white)",
        }}
      ></div>
      <div
        style={{
          height: `${thickness}`,
          width: "40px",
          borderRadius: `${thickness}`,
          backgroundColor: "var(--primary)",
        }}
      ></div>
      <div
        style={{
          height: `${thickness}`,
          width: `${thickness}`,
          borderRadius: `${thickness}`,
          backgroundColor: "var(--accent)",
        }}
      ></div>
      <div
        style={{
          height: `${thickness}`,
          width: "60px",
          borderRadius: `${thickness}`,
          backgroundColor: "var(--secondary)",
        }}
      ></div>
    </Stack>
  );
};

export default CapsuleDash;
