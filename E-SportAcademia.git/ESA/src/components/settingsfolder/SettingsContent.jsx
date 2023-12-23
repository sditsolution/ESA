import React from "react";
import styles from "../../styles/settings/settingsContent.module.css";

const SettingsContent = ({ header, children }) => {
  return (
    <div className={styles.container}>
      <h3>{header}</h3>
      <div>{children}</div>
    </div>
  );
};

export default SettingsContent;
