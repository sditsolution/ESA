import React from "react";
import { useState } from "react";
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
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const Sidebar = ({ onHandleNavigation, isActiv }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCoachAreaOpen, setIsCoachAreaOpen] = useState(false);

  function OpenSettings() {
    if (isSettingsOpen) {
      setIsSettingsOpen(false);
      onHandleNavigation("settings");
    } else {
      setIsSettingsOpen(true);
      setIsCoachAreaOpen(false);
      onHandleNavigation("settings");
    }
  }

  function OpenCoachArea() {
    if (isCoachAreaOpen) {
      setIsCoachAreaOpen(false);
      onHandleNavigation("coachArea");
    } else {
      setIsCoachAreaOpen(true);
      setIsSettingsOpen(false);
      onHandleNavigation("coachArea");
    }
  }

  function OpenProfile() {
    onHandleNavigation("profile");
  }
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
      <div className={isActiv ? styles.navLabel : styles.activeNavLabel}>
        <DashboardIcon style={{ color: "white" }} />

        <label
          className={styles.label}
          onClick={() => onHandleNavigation("dashboard")}
        >
          Dashboard
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
        <EmojiPeopleIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("coaches")}
        >
          Coaches
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
        <CalendarMonthIcon style={{ color: "white" }} />
        <label className={styles.label} onClick={() => OpenCoachArea()}>
          Coach-Area
        </label>
      </div>
      {isCoachAreaOpen && (
        <>
          <div className={styles.navLabel}>
            <label
              className={styles.childLabel}
              onClick={() => onHandleNavigation("coachProfile")}
            >
              Coachprofile
            </label>
          </div>
          <div className={styles.navLabel}>
            <label
              className={styles.childLabel}
              onClick={() => onHandleNavigation("createCourse")}
            >
              Create Course
            </label>
          </div>
        </>
      )}
      <div className={styles.navLabel}>
        <SettingsIcon style={{ color: "white" }} />
        <div className={styles.settingsContainer}>
          <label className={styles.label} onClick={() => OpenSettings()}>
            Settings
          </label>
        </div>
      </div>
      {isSettingsOpen && (
        <>
          <div className={styles.navLabel}>
            <label
              className={styles.childLabel}
              onClick={() => onHandleNavigation("profile")}
            >
              Profile
            </label>
          </div>
          <div className={styles.navLabel}>
            <label
              className={styles.childLabel}
              onClick={() => onHandleNavigation("account")}
            >
              Account
            </label>
          </div>
        </>
      )}
      <div className={styles.navLabel}>
        <SportsEsportsIcon style={{ color: "white" }} />
        <label
          className={styles.label}
          onClick={() => onHandleNavigation("impressum")}
        >
          Impressum
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
