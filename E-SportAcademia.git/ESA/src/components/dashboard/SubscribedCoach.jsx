import React from "react";
import { useState } from "react";
import styles from "../../styles/dashboard/SubscribedCoach.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import CloseIcon from "@mui/icons-material/Close";

const SubscribedCoach = ({ name }) => {
  const [isNotificated, setNotificated] = useState(true);

  function SetNotification() {
    if (isNotificated) {
      setNotificated(false);
    } else {
      setNotificated(true);
    }
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>{name}</label>
      <div className={styles.options}>
        {isNotificated ? (
          <NotificationsIcon
            className={styles.notification}
            onClick={SetNotification}
          />
        ) : (
          <NotificationsOffIcon
            className={styles.notification}
            onClick={SetNotification}
          />
        )}
        <CloseIcon className={styles.delete} />
      </div>
    </div>
  );
};

export default SubscribedCoach;
