import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./navbar.module.css";
import logo from "../../../assets/payroll-logo.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div
      className={`navBar ${show && "navBar_active"}`}
      style={{ background: "black", transition: "0.5s" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-6 ${styles.navLogo}`}>
            <Image src={logo} alt="Logo" width="100" height="80" />
          </div>

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
    </div>
  );
};

export default Navbar;
