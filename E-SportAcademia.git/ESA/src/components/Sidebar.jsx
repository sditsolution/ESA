import React from "react";
import styles from "../styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Sidebar = ({ onHandleNavigation }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FontAwesomeIcon icon={faGripVertical} className={styles.grid} />
      </header>
      <div className={styles.containerProfile}>
        <div className={styles.profileCircle}>
          <FontAwesomeIcon icon={faUser} className={styles.profile} />
        </div>
        <p className={styles.profileName}>UserName</p>
      </div>
      <div className={styles.navLabel}>
        <DashboardIcon style={{ color: "white" }} />

        <label
          className={styles.label}
          onClick={() => onHandleNavigation("dashboard")}
        >
          Dashboard
        </label>
      </div>
      <div className={styles.navLabel}>
        <CalendarMonthIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("calendar")}
        >
          Calendar
        </label>
      </div>
      <div className={styles.navLabel}>
        <SportsEsportsIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("games")}
        >
          Games
        </label>
      </div>
      <div className={styles.navLabel}>
        <WorkHistoryIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("history")}
        >
          History
        </label>
      </div>
      <div className={styles.navLabel}>
        <SensorOccupiedIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("beACoach")}
        >
          Be a Coach
        </label>
      </div>
      <div className={styles.navLabel}>
        <SettingsIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("settings")}
        >
          Settings
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
