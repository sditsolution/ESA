import React, { useState } from "react";
import styles from "../../../styles/games/purchaseReceipt.module.css";
import PurchaseElemet from "./PurchaseElemet";

const PurchaseReceipt = ({ title, img, price }) => {
  const [payPalIsOpen, setPayPalIsOpen] = useState(false);
  const [openPayPal, setOpenPaypal] = useState(false);

  const handlePayPal = () => {
    setPayPalIsOpen((e) => setPayPalIsOpen(!e));
    if (payPalIsOpen) {
      setOpenPaypal(false);
    } else {
      setOpenPaypal(true);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Receipt</h2>
      <h3>Receipt adresse</h3>
      <div className={styles.contentRow}>
        <p>
          <b>Country</b>
        </p>
        <p style={{ color: "lightgray" }}>Required</p>
      </div>
      <select style={{ width: "15rem", height: "2.25rem" }}>
        <option>Germany</option>
        <option>Switzerland</option>
        <option>Austria</option>
      </select>
      <div className={styles.paymentContainer}>
        <h2>Payment options</h2>
        <div className={styles.payPalContainer} onClick={() => handlePayPal()}>
          <input type="radio" checked={openPayPal} />
          <p>PayPal</p>
        </div>
        {payPalIsOpen ? (
          <div className={styles.payPalCredential}>
            <p style={{ margin: "1rem" }}>
              Zum Abschluss dieser Transaktion wirst du auf die sicheren Server
              von PayPal geleitet.
            </p>
          </div>
        ) : null}
        <div className={styles.payPalContainer} onClick={() => handlePayPal()}>
          <input
            type="radio"
            checked={!openPayPal}
            onChange={(e) => handlePayPal(e.target.value)}
          />
          <p>Credit-/Debitcard</p>
        </div>
        {!payPalIsOpen ? (
          <div className={styles.payPalCredential}>
            <p style={{ margin: "1rem" }}>
              Zum Abschluss dieser Transaktion wirst du auf die sicheren Server
              von PayPal geleitet.
            </p>
          </div>
        ) : null}
      </div>
      <PurchaseElemet title={title} img={img} price={price} />
    </div>
  );
};

export default PurchaseReceipt;
