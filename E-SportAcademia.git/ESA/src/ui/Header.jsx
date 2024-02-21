import React, { useState } from "react";
import styles from "../styles/ui/header.module.css";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";

const Header = () => {
  const [userState, setUserState] = useState();
  return (
    <div className={styles.container}>
      {userState ? (
        <>
          <div className={styles.contentcontainer}>
            <p>Logout</p>
            <HiArrowRightOnRectangle style={{ cursor: "pointer" }} />
          </div>
        </>
      ) : (
        <div className={styles.contentcontainer}>
          <p>Login</p>
          <HiMiniArrowLeftOnRectangle style={{ cursor: "pointer" }} />
        </div>
      )}
    </div>
  );
};

export default Header;
