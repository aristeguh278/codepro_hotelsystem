import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#311b92",
    },
    secondary: {
      main: "#ffcc80",
    },
  },
  shape: {
    borderRadius: 8,
  },

  typography: {
    fontSize: 15,
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
  },

  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.8rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          paddingTop: "9px",
          paddingBottom: "9px",
          paddingLeft: "18px",
          paddingRight: "18px",
          fontSize: "0.85rem",
        },
      },
    },
  },
});
