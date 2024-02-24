import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "../ui/Header";
import styles from "../styles/ui/applayout.module.css";

const Applayout = () => {
  const [userState, setUserState] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString !== null) {
      const parsedUserData = JSON.parse(userDataString);
      setUserState(parsedUserData);
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className={styles.applayout}>
      <Sidebar />
      <div className={styles.container}>
        <Header loggedIn={isLoggedIn} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Applayout;
