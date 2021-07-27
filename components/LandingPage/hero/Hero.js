import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={`overflow-hidden ${styles.hero}`}>
      <div className={styles.hero_heading}>
        <p>Payroll Simplified,</p>
        <p>A solution that just makes sense</p>
        <div className={styles.hero_sub_heading}>
          <p>Say goodbye to stressful tax calculations</p>
          <p>Streamline and simplify the process.</p>
          <a href="#signin">Sign in</a>
        </div>
      </div>

      <div className={styles.hero_vector}></div>
    </div>
  );
};

export default Hero;
