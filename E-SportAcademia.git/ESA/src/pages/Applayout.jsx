import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import styles from "../styles/AppLayout.module.css";
import CalendarWindow from "../components/calendar/CalendarWindow.jsx";
import Coaching from "../components/coaching/Coaching.jsx";
import Dashboard from "../components/dashboard/Dashboard.jsx";
import BeACoach from "../components/beACoach/BeACoach.jsx";
import History from "../components/history/History.jsx";
import Settings from "../components/settingsfolder/Settings.jsx";
import SelectedGame from "../components/coaching/SelectedGame.jsx";

const AppLayout = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  function handleNavigation(content) {
    console.log(content);
    setContent(content);
    navigate(content);
  }

  return (
    <div className={styles.container}>
      <Sidebar onHandleNavigation={handleNavigation} />
      <div className={styles.content}>
        {content === "dashboard" ? (
          <Dashboard />
        ) : content === "calendar" ? (
          <CalendarWindow />
        ) : content === "games" ? (
          <Coaching onHandleNavigation={handleNavigation} />
        ) : content === `games/${content}` ? (
          <SelectedGame />
        ) : content === "history" ? (
          <History />
        ) : content === "beACoach" ? (
          <BeACoach />
        ) : content === "settings" ? (
          <Settings />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default AppLayout;
