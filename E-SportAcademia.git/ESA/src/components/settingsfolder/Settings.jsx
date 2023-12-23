import React from "react";
import styles from "../../styles/settings/settings.module.css";

const Settings = ({ onHandleNavigation }) => {
  return (
    <div className={styles.header}>
      <h1>Settings</h1>
      <div className={styles.container}>
        <div
          className={styles.containerComponent}
          onClick={() => onHandleNavigation("profile")}
        >
          <h1>Profile</h1>
        </div>
        <div
          className={styles.containerComponent}
          onClick={() => onHandleNavigation("account")}
        >
          <h1>Account</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
