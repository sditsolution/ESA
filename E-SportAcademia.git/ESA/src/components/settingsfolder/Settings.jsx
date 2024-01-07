import React from "react";
import { useState } from "react";
import styles from "../../styles/settings/settings.module.css";
import picture from "../../assets/pictures/NowayExample.png";
import Personals from "./Personals";
import Profile from "./Profile";
import Account from "../settingsfolder/Account";

const Settings = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.contentContainer}>
      <h1 className="header">Settings</h1>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3>Profile</h3>
          </div>
          <div className={styles.containerProfile}>
            <Profile />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3>Account</h3>
            <div className={styles.containerAccount}>
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
