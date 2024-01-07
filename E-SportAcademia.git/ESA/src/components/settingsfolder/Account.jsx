import React from "react";
import { useState } from "react";
import styles from "../../styles/settings/account.module.css";
// import Personals from "./Personals";
// import SettingsContent from "./SettingsContent";
import Switch from "@mui/material/Switch";
import AccountContent from "./AccountContent";

const Account = () => {
  const [NotifyChecked, setNotifyChecked] = useState(true);
  const [modeChecked, setModeChecked] = useState(true);

  const handleChangeNotification = (event) => {
    setNotifyChecked(event.target.checked);
  };
  const handleChangeDarkLightMode = (event) => {
    setModeChecked(event.target.checked);
  };
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.notification}>
          <p>Notification</p>
          <Switch
            checked={NotifyChecked}
            onChange={handleChangeNotification}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className={styles.password}>
          <div>
            <p>Username:</p>
            <p>Noin257</p>
          </div>
          <button className="primaryBtn">Change</button>
        </div>
        <div className={styles.password}>
          <div>
            <p>Email</p>
            <p>reinholz.dennis@gmx.de</p>
          </div>
          <button className="primaryBtn">Change</button>
        </div>
        <div className={styles.password}>
          <label>Language</label>
          <select className="comboBox">
            <option>Englisch</option>
            <option>German</option>
          </select>
        </div>
        <div className={styles.password}>
          <p>Password</p>
          <button className="primaryBtn">Change</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5rem",
          }}
        >
          <button className={styles.deleteBtn}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
