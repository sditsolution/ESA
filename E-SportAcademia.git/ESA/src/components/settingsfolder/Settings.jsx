import React, { useEffect } from "react";
import { useState, useContext } from "react";
import styles from "../../styles/settings/settings.module.css";
import picture from "../../assets/pictures/NowayExample.png";
import Personals from "./Personals";
import Profile from "./Profile";
import Account from "../settingsfolder/Account";
import { useParams } from "react-router-dom";

const Settings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState();
  const [credential, setCredential] = useState();
  const credentialId = useParams();

  const getCredentials = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/getUsercredential?credential=${credentialId.credential}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const creds = await response.json();
      setCredential(creds);
      return creds;
    } catch (error) {
      console.error("Error fetching credentials:", error);
      throw error;
    }
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("userContext");
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
    }
    getCredentials();
  }, []);
  return (
    <div className={styles.contentContainer}>
      <h1 className="header">Settings</h1>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3>Profile</h3>
          </div>
          <div className={styles.containerProfile}>
            <Profile userData={userData} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3>Account</h3>
            <div className={styles.containerAccount}>
              <Account userData={userData} credentials={credential} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
