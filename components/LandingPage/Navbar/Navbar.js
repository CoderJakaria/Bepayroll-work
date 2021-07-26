import Image from 'next/image';

import { AppBar, Toolbar } from '@material-ui/core';

import useStyles from './navbarStyles';
import logo from '../../../assets/payroll-logo.png';

const Navbar = () =>
{

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar>
        <Image
          className={classes.Logo}
          src={logo}
          alt="Logo"
          width="100"
          height="80"
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
