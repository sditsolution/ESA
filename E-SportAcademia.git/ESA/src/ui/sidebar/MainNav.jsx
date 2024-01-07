import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { GrGamepad } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import { HiOutlineIdentification } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { HiOutlineScale } from "react-icons/hi2";

import styles from "../../styles/ui/sidebar/mainNav.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const MainNav = () => {
  const navigate = useNavigate();

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
          <div className={styles.nav} onClick={() => navigate("/settings")}>
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
