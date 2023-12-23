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
      <AccountContent header="Communication">
        <div className={styles.settingsContent}>
          <div className={styles.contentRow}>
            <label>Notification</label>
            <Switch
              checked={NotifyChecked}
              onChange={handleChangeNotification}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className={styles.contentRow}>
            <lable>E-Mail</lable>
            <button className={styles.btn}>Change</button>
          </div>
        </div>
      </AccountContent>
      <AccountContent header="Security">
        <div className={styles.settingsContent}>
          <div className={styles.contentRow}>
            <label>Password</label>
            <button className={styles.btn}>Change</button>
          </div>
          <div className={styles.btnContainer}>
            <button className="primaryBtn" style={{ background: "red" }}>
              Delete Account
            </button>
          </div>
        </div>
      </AccountContent>
      <AccountContent header="User Interface">
        <div className={styles.settingsContent}>
          <div className={styles.contentRow}>
            <label>Dark/Light Mode</label>
            <Switch
              checked={modeChecked}
              onChange={handleChangeDarkLightMode}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className={styles.contentRow}>
            <label>Language</label>
            <select className={styles.comboBox}>
              <option>Englisch</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </AccountContent>
      <AccountContent header="Integration and Links">
        <div className={styles.settingsContent}>
          <div className={styles.contentRow}>
            <label>Twitch</label>
            <input type="text" placeholder="link" className={styles.input} />
          </div>
          <div className={styles.contentRow}>
            {" "}
            <label>Instagram</label>
            <input type="text" placeholder="link" className={styles.input} />
          </div>
          <div className={styles.contentRow}>
            <label>Discord</label>
            <input type="text" placeholder="link" className={styles.input} />
          </div>
          <div className={styles.contentRow}>
            <label>Steam</label>
            <input type="text" placeholder="link" className={styles.input} />
          </div>
        </div>
      </AccountContent>
      <AccountContent header="Banking">
        {" "}
        <div className={styles.settingsContent}>
          <div className={styles.contentRow}>
            <label>IBAN</label>
            <input type="text" placeholder="iban" className={styles.input} />
          </div>
        </div>
        <div className={styles.contentRow}>
          <label>BIC</label>
          <input type="text" placeholder="bic" className={styles.input} />
        </div>
      </AccountContent>
    </div>
  );
};

export default Account;
