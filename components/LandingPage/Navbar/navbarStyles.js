import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  AppBar: {
    backgroundColor: "#333",
  },
  Logo: {
    // margin: theme.spacing(1)
  },
  NavItems: {
    display: "flex",
    listStyle: "none",
    justifyContent: "spaceBetween",
    marginLeft: "auto",
    marginRight: "20px",
  },
  NavItem: {
    marginLeft: "60px",
  },
}));

export default useStyles;
