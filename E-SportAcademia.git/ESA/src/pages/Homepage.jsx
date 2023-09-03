import React from "react";
import styles from "../styles/Homepage.module.css";
import Login from "../components/Login.jsx";

const Homepage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.containerHeader}>
        <p className={styles.text}>Not a member?</p>
        <a href="https://www.google.de/" className={styles.signInBtn}>
          Sign Up
        </a>
      </div>
      <Login />
    </div>
  );
};

export default Homepage;
