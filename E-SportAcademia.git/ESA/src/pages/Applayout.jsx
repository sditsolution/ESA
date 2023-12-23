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
import SelectedGame from "../components/games/SelectedGame.jsx";
import AllCoaches from "../components/coachesPage/AllCoaches.jsx";
import CoachProfile from "../components/coachesPage/CoachProfile.jsx";
import Profile from "../components/settingsfolder/Profile.jsx";
import Account from "../components/settingsfolder/Account.jsx";
import CoachArea from "../components/coachArea/CoachArea.jsx";
import ProfileSetting from "../components/coachArea/coachProfile/Profile.jsx";
import Impressum from "../components/coachArea/impressum/Impressum.jsx";

const AppLayout = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [selectedGame, setSelectedGame] = useState();
  const [coach, setCoach] = useState();
  const [isActiv, setIsActive] = useState(false);

  function handleNavigation(content, game) {
    //console.log(content);
    setSelectedGame(game);
    setContent(content);
    setIsActive(true);
  }
  function handleCoach(content) {
    setContent(content);

    //navigate(content);
  }

  return (
    <div className={styles.container}>
      <Sidebar onHandleNavigation={handleNavigation} isActiv={isActiv} />
      <div className={styles.content}>
        {content === "dashboard" ? (
          <Dashboard />
        ) : content === "calendar" ? (
          <CalendarWindow />
        ) : content === "games" ? (
          <Coaching onHandleNavigation={handleNavigation} />
        ) : content === "selectedGame" ? (
          <SelectedGame name={selectedGame} />
        ) : content === "history" ? (
          <History />
        ) : content === "coaches" ? (
          <AllCoaches onHandleCoach={handleCoach} setCoach={setCoach} />
        ) : content === "coach" ? (
          <CoachProfile coach={coach} />
        ) : content === "beACoach" ? (
          <BeACoach />
        ) : content === "coachArea" ? (
          <CoachArea onHandleNavigation={handleNavigation} />
        ) : content === "settings" ? (
          <Settings onHandleNavigation={handleNavigation} />
        ) : content === "coachProfile" ? (
          <ProfileSetting />
        ) : content === "profile" ? (
          <Profile />
        ) : content === "account" ? (
          <Account />
        ) : content === "impressum" ? (
          <Impressum />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default AppLayout;
