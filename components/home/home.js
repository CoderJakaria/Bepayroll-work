import styles from "./home.module.css";
import Image from "next/image";

import { Button } from "@material-ui/core";
import Hero from "../../assets/hero-vector.png";

const Features = () => {
  return (
    <div className={`container ${styles.hero}`}>
      <div className="row pt-5">
        <div className="col-md-6">
          <h1 className="fw-bold">
            Payroll Simplified, A solution that just makes sense
          </h1>

          <p>Say goodbye to stressful tax calculations</p>

          <p>Streamline and simplify the process.</p>
          <Button variant="contained">Sign up</Button>
        </div>

        <div className="col-md-6">
          <Image
            src={Hero}
            alt="hero-section-img"
            height="600px"
            width="600px"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
