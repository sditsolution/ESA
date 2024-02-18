import React from "react";
import styles from "../../../styles/games/purchaseCoachingForm.module.css";
import PurchaseReceipt from "./PurchaseReceipt";
import PurchaseOverview from "./PurchaseOverview";

const PurchaseCoachingForm = ({ onCloseModal, coachingid }) => {
  return (
    <div className={styles.container}>
      <div className={styles.receiptContainer}>
        <PurchaseReceipt />
      </div>
      <div className={styles.overview}>
        <PurchaseOverview coachingid={coachingid} onCloseModal={onCloseModal} />
      </div>
    </div>
  );
};

export default PurchaseCoachingForm;
