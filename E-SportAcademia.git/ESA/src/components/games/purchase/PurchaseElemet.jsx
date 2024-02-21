import React from "react";
import styles from "../../../styles/games/purchaseElement.module.css";

const PurchaseElemet = ({ img, title, price }) => {
  return (
    <div className={styles.container}>
      <h2>Order information</h2>
      <div className={styles.order}>
        <img src={img} alt="order img" />
        <p>
          <b>{title}</b>
        </p>
        <p>
          <b>{price} €</b>
        </p>
      </div>
    </div>
  );
};

export default PurchaseElemet;
