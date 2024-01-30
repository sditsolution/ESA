import React from "react";
import styles from "../styles/failedVerification.module.css";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
const FailedVerification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.confirmedContent}>
        <HiOutlineXMark style={{ fontSize: "3em", color: "red" }} />
        <p style={{ fontSize: "2em" }}>Verification failed</p>
      </div>
      <div className={styles.navigateContainer}>
        <a href="http://localhost:3000/login">Go to login</a>
        <HiOutlineHome />
      </div>
    </div>
  );
};

export default FailedVerification;
