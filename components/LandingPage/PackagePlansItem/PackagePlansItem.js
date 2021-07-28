import styles from "./packagePlansItem.module.css";

const PackagePlansItem = ({ type, price, image, employees, text }) => {
  return (
    <div className={styles.packagePlansItem}>
      <h2>{type}</h2>
      <div
        className={styles.packagePlansItem_packageImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3>{price}</h3>
      <span>Yearly</span>
      <p>{employees}</p>
      <p className="mb-4">{text}</p>
      <a href="#contact">Select Plan</a>
    </div>
  );
};

export default PackagePlansItem;
