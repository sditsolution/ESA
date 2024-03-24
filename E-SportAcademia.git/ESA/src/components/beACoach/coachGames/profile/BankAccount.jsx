import React from "react";
import styles from "../../../../styles/beACoach/profile/bankAccount.module.css";

const BankAccount = ({
  setAccountOwner,
  setBIC,
  setIBAN,
  bic,
  accountOwner,
  iban,
}) => {
  function handleOnChange(event) {
    if (event.target.name === "accountOwner") {
      setAccountOwner(event.target.value);
    } else if (event.target.name === "bic") {
      setBIC(event.target.value);
    } else if (event.target.name === "iban") {
      setIBAN(event.target.value);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <h3>Bankaccount</h3>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentRow}>
            <p>Kontoinhaber:</p>
            <input
              name="accountOwner"
              value={accountOwner}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className={styles.contentRow}>
            <p>BIC:</p>
            <input name="bic" value={bic} onChange={(e) => handleOnChange(e)} />
          </div>
          <div className={styles.contentRow}>
            <p>IBAN:</p>
            <input
              name="iban"
              value={iban}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
