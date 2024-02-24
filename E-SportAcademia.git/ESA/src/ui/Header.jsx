import React, { useContext, useState } from "react";
import styles from "../styles/ui/header.module.css";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { UserContext } from "../App.jsx";
import { useNavigate } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const navigate = useNavigate();
  const { logoutUser } = useContext(UserContext);
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      {loggedIn ? (
        <div className={styles.contentcontainer}>
          <p>Logout</p>
          <HiArrowRightOnRectangle
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div className={styles.contentcontainer}>
          <p>Login</p>
          <HiMiniArrowLeftOnRectangle
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
