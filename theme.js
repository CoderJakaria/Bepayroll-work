import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FDC51C",
    },
    secondary: {
      main: "#333",
    },
    // success: {}, // maybe default are good
    // warning: {},//maybe default are good
    error: {
      main: "#ff3333",
    },
  },

  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },

  shape: {
    borderRadius: 4,
  },

  shadows: ["none"],

  //   overrides: { // we can change when we neeed
  //     MuiTextField: {
  //       root: {

  //       },
  //     },
  //   },

  props: {
    MuiButton: {
      disableRipple: true,
      color: "secondary",
    },
  },
});
