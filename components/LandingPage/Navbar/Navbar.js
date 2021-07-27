import Image from "next/image";
import styles from "./navbar.module.css";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./navbarStyles";
import logo from "../../../assets/payroll-logo.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary" className={classes.AppBar}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-6 ${styles.navLogo}`}>
            <Image
              className={classes.Logo}
              src={logo}
              alt="Logo"
              width="100"
              height="80"
            />
          </div>

          {/* <Typography className={classes.NavItems} variant="ul" component="ul">
          <Typography className={classes.NavItem} variant="li" component="li">
            <a href="#features">Features</a>
          </Typography>
          <Typography className={classes.NavItem} variant="li" component="li">
            <a href="#features">Pricing</a>
          </Typography>
          <Typography className={classes.NavItem} variant="li" component="li">
            <a href="#features">Contact US</a>
          </Typography>
          <Typography className={classes.NavItem} variant="li" component="li">
            <a href="#features">Login</a>
          </Typography>
        </Typography> */}

          <div className="col-md-6">
            <ul className={` ${styles.navItems}`}>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#Login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
