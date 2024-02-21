import React from "react";
import styles from "../../../styles/games/purchaseOverview.module.css";
import toast from "react-hot-toast";

const PurchaseOverview = ({ coachingid, onCloseModal, price }) => {
  const bookCoaching = async () => {
    return await fetch(`http://localhost:3001/postbookCoaching`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({ coachingid: coachingid }),
    }).then((result) => {
      console.log(result);
      if (result.status === 200) {
        toast.success("Successfully booked coaching");
        onCloseModal();
      } else {
        toast.error("Unable to book the coaching. Coaching is sold out");
        onCloseModal();
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Overview</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.rowContainer}>
          <p>Price:</p>
          <p>{price} €</p>
        </div>
        <div className={styles.rowContainer}>
          <p>
            <b>Total:</b>
          </p>
          <p>
            <b>{price} €</b>
          </p>
        </div>
        <div className={styles.rowContainer}>
          <p style={{ fontSize: "1em", color: "grey" }}>
            By completing your purchase you agree to these{" "}
            <a href="www.google.de">Terms of Use</a>.
          </p>
        </div>
        <div className={styles.rowContainer}>
          <button className={styles.button} onClick={() => bookCoaching()}>
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOverview;
