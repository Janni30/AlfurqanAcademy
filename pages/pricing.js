import React from "react";

import Breadcumb from "@/src/components/Breadcumb";

import Layout from "@/src/layout/Layout";
import styles from "./PricingTable.module.css";

const Pricing = () => {
  const plans = [
    { name: "Starter", price: 9, features: ["✔", "✔", "✔", "X", "X", "X"] },
    { name: "Business", price: 21, features: ["✔", "✔", "✔", "✔", "✔", "X"] },
    { name: "Professional", price: 42, features: ["✔", "✔", "✔", "✔", "✔", "✔"] },
    { name: "Premium", price: 51, features: ["✔", "✔", "✔", "✔", "✔", "✔"] },
  ];

  return (
    <Layout>
          <Breadcumb pageName={"Pricing"} />
    <div className={styles.pricingContainer}>
    
      <div className={styles.table}>
        {/* Header Row */}
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div className={styles.cell}>Features</div>
          {plans.map((plan) => (
           <div className={styles.cell}>
              <div className={styles.polygon}>
              <div className="polygon">
                 <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="190"
    height="100"
    preserveAspectRatio="none"
  >
    <path
      d="M 100 10 
         Q 15 90 50 180
         Q 100 160 150 180
         Q 185 90 100 10 Z"
      fill="#161d25"
    />
  </svg>
  </div>
           <h2 className={styles.planName} style={{marginBottom:'22px'}}>{plan.name}</h2>
           </div>
           <div className={styles.round}>
             <p className={styles.planPrice}>
               ${plan.price}
               <span className={styles.perMonth}>/hour</span>
             </p>
           </div>
         </div>
              
          ))}
        </div>

        {/* Feature Rows */}
        {["Put any text here", "Another text can be here", "Some Description", "Column Content", "Put any text here", "Another text can be here"].map(
          (feature, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              <div className={styles.cell} style={{color:"black"}}>{feature}</div>
              {plans.map((plan, colIndex) => (
                <div key={colIndex} className={styles.cell} >
                  {plan.features[rowIndex]  }
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
    </Layout>
  );
};

export default Pricing;
