import FeaturesItem from "../features_item/FeaturesItem";
import styles from "./features.module.css";

import PeopleIcon from "@material-ui/icons/People";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import StorageIcon from "@material-ui/icons/Storage";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Features = () => {
  return (
    <div id="features" className={styles.features}>
      <h1 className="text-center">Features</h1>

      <div className={styles.features_items}>
        <FeaturesItem
          Icon={PeopleIcon}
          title="User Friendly"
          description="BPayroll has a friendly user interface that does not require training.
          The well organized system simplifies that process of data entry.
          Developers paid keen attention to details to improve the user
          experience improving the amount of time required to process your
          monthly payroll."
        />
        <FeaturesItem
          Icon={LocalLibraryIcon}
          title="No Tranning Needed"
          description="No additional training is required as the system is easy to use saving you both the time and cost."
        />
        <FeaturesItem
          Icon={StorageIcon}
          title="Reliable"
          description="The consistency of the system will allow you to get your payslips and P9 Forms flawlessly. The system will allow you to change tax rates giving you control over the system. Constant updates and bug fixes are routine for us to ensure a smooth workflow."
        />
        <FeaturesItem
          Icon={VpnKeyIcon}
          title="Secure"
          description="Your data is safe with us. There is a unique encryption algorithm in place that ensures safety of your data."
        />
      </div>
    </div>
  );
};

export default Features;
