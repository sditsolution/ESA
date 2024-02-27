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
  const [isOpenCoaching, setIsOpenCoaching] = useState(false);

  function NavigateToSetting() {
    navigate(`/settings/${userData.USERCREDENTIAL}`);
  }
  function OpenCoaching() {
    if (isOpenCoaching) {
      setIsOpenCoaching(false);
    } else {
      navigate("/coaching");
      setIsOpenCoaching(true);
    }
  }
  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString !== undefined) {
      setUserData(JSON.parse(userDataString));
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
          <div className={styles.nav} onClick={OpenCoaching}>
            <HiOutlineIdentification />
            <NavLink
              to="/coaching"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              Coaching
            </NavLink>
          </div>
          {isOpenCoaching ? (
            <>
              <div
                className={styles.subnav}
                onClick={() => navigate("/myCoachings")}
              >
                <NavLink
                  to="/coaching"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "1rem",
                  }}
                >
                  <p style={{ fontSize: "0.75em" }}>My coachings</p>
                </NavLink>
              </div>
              <div
                className={styles.subnav}
                onClick={() => navigate("/profile")}
              >
                <NavLink
                  to="/coaching"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "1rem",
                  }}
                >
                  <p style={{ fontSize: "0.75em" }}>Profile</p>
                </NavLink>
              </div>
            </>
          ) : (
            ""
          )}
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
