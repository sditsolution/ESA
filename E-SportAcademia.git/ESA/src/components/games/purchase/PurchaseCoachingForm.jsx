import React from "react";
import styles from "../../../styles/games/purchaseCoachingForm.module.css";
import PurchaseReceipt from "./PurchaseReceipt";
import PurchaseOverview from "./PurchaseOverview";

const PurchaseCoachingForm = ({
  onCloseModal,
  coachingid,
  title,
  price,
  data,
  start,
  end,
  img,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.receiptContainer}>
        <PurchaseReceipt title={title} img={img} price={price} />
      </div>
      <div className={styles.overview}>
        <PurchaseOverview
          price={price}
          coachingid={coachingid}
          onCloseModal={onCloseModal}
        />
      </div>
    </div>
  );
};

export default PurchaseCoachingForm;
