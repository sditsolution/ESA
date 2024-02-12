import React, { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { GrGamepad } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { HiOutlineScale } from "react-icons/hi2";

import styles from "../../styles/ui/sidebar/mainNav.module.css";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

const MainNav = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  function NavigateToSetting() {
    navigate(`/settings/${userData.USERCREDENTIAL}`);
  }
  useEffect(() => {
    const userDataString = localStorage.getItem("userContext");
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
    }
  }, []);
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <div className={styles.nav} onClick={() => navigate("/dashboard")}>
            <HiOutlineHome />
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Home
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.nav} onClick={() => navigate("/games")}>
            <GrGamepad />
            <NavLink
              to="/games"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Games
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.nav} onClick={() => navigate("/coaches")}>
            <BsPeople />
            <NavLink
              to="/coaches"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Coaches
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.nav} onClick={() => navigate("/coaching")}>
            <HiOutlineIdentification />
            <NavLink
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Coaching
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.nav} onClick={() => NavigateToSetting()}>
            <HiOutlineCog6Tooth />
            <NavLink
              to="/settings"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Settings
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.nav} onClick={() => navigate("/impressum")}>
            <HiOutlineScale />
            <NavLink
              to="/impressum"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Impressum
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
