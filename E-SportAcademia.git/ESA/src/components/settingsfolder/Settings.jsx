import React from "react";
import styles from "../../styles/settings/settings.module.css";
import Profile from "./Profile";
import Account from "./Account";

const Settings = () => {
  return (
    <div className={styles.header}>
      <h1>Settings</h1>
      <div className={styles.container}>
        <div className={styles.containerComponent}>
          <Profile />
        </div>
        <div className={styles.containerComponent}>
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Settings;
