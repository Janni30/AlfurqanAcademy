import React from "react";
import styles from "./PricingTable.module.css";

const Pricing = () => {
  const plans = [
    { name: "Starter", price: 9, features: ["✔", "✔", "✔", "-", "-", "-"] },
    { name: "Business", price: 21, features: ["✔", "✔", "✔", "✔", "✔", "-"] },
    { name: "Professional", price: 42, features: ["✔", "✔", "✔", "✔", "✔", "✔"] },
    { name: "Premium", price: 51, features: ["✔", "✔", "✔", "✔", "✔", "✔"] },
  ];

  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.title}>Our Plans</h1>
      <p className={styles.subtitle}>
        Put here your presentation text. Here is a place for your another interesting presentation text.
      </p>
      <div className={styles.table}>
        {/* Header Row */}
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div className={styles.cell}>Features</div>
          {plans.map((plan) => (
            <div key={plan.name} className={styles.cell}>
              <h2 className={styles.planName}>{plan.name}</h2>
              <div className={styles.round}>
              <p className={styles.planPrice}>
                ${plan.price}
                <span className={styles.perMonth}>/month</span>
              </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {["Put any text here", "Another text can be here", "Some Description", "Column Content", "Put any text here", "Another text can be here"].map(
          (feature, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              <div className={styles.cell}>{feature}</div>
              {plans.map((plan, colIndex) => (
                <div key={colIndex} className={styles.cell}>
                  {plan.features[rowIndex]}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
