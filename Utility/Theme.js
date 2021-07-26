import { createTheme } from "@material-ui/core"; //createMuiTheme has been deprecated

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(253, 197, 28)",
    },
    secondary: {
      main: "rgba(0,0, 0,1)",
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
