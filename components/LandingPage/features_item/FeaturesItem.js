import styles from "./featuresItem.module.css";

const FeaturesItem = ({ Icon, title, description }) => {
  return (
    <div className={styles.featuresItem}>
      <Icon className={styles.featureIcon} />

      <div className={styles.features_text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;
