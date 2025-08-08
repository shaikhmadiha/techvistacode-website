"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  palette: {
    primary: {
      main: "#2c5086",
    },
    secondary: {
      main: "#3B6AB3",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === "secondary" &&
            ownerState.variant === "contained" && {
              color: "#fff",
            }),
          borderRadius: "4px",
          textTransform: "none",
          fontWeight: 500,
          letterSpacing: "0.5px",
        }),
        sizeSmall: {
          fontSize: "14px",
        },
        sizeMedium: {
          fontSize: "16px",
        },
        sizeLarge: {
          fontSize: "18px",
        },
      },
    },
  },
});

export default theme;
