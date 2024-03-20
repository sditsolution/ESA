import React from "react";
import styles from "../../../../styles/beACoach/profile/bankAccount.module.css";

const BankAccount = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <h3>Description</h3>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentRow}>
            <p>Kontoinhaber:</p>
            <input />
          </div>
          <div className={styles.contentRow}>
            <p>BIC:</p>
            <input />
          </div>
          <div className={styles.contentRow}>
            <p>IBAN:</p>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
