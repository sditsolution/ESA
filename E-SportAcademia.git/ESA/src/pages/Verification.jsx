import React from "react";
import styles from "../styles/verification.module.css";
import { HiCheck } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
const Verification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.confirmedContent}>
        <HiCheck style={{ fontSize: "3em", color: "green" }} />
        <p style={{ fontSize: "2em" }}>Your account has been confirmed</p>
      </div>
      <div className={styles.navigateContainer}>
        <a href="http://localhost:3000/login">Go to login</a>
        <HiOutlineHome />
      </div>
    </div>
  );
};

export default Verification;
