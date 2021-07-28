import PackagePlansItem from "../PackagePlansItem/PackagePlansItem";
import styles from "./packagePlans.module.css";

const PackagePlans = () => {
  return (
    <div id="pricing" className={styles.packagePlane}>
      <h1>Package Plans</h1>

      <div className={styles.packagePlans_items}>
        <PackagePlansItem
          type="Basic"
          price="Ksh 14,999"
          image="https://www.bpayroll.net/Payroll_Web_App/website-assets/images/CARTOON_TREE-03.png"
          employees="1 company and 10 employees"
          text="Suitable for a small enterpise or a small business"
        />
        <PackagePlansItem
          type="Pro"
          price="Ksh 29,999"
          image="https://www.bpayroll.net/Payroll_Web_App/website-assets/images/CARTOON_TREE-04.png"
          employees="3 companys and 10 employees per company"
          text="Suitable for a medium sized enterpise or freelance accountants"
        />
        <PackagePlansItem
          type="Unlimited"
          price="Ksh 59,999"
          image="https://www.bpayroll.net/Payroll_Web_App/website-assets/images/CARTOON_TREE-05.png"
          employees="Unlimited"
          text="Suitable for companies that have more that one branch or with more than one sister company"
        />
        <PackagePlansItem
          type="Extra Employees"
          price="Ksh 14,999"
          image="https://www.bpayroll.net/Payroll_Web_App/website-assets/images/CARTOON_TREE-06.png"
          employees="10 extra employees"
          text="Need more employees and not companies? No problem you can add more employees"
        />
      </div>
    </div>
  );
};

export default PackagePlans;
