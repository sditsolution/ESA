import React from "react";
import styles from "../../styles/beACoach/profile.module.css";
import GameLink from "../beACoach/coachGames/profile/GameLink.jsx";
import SuccessDescription from "./coachGames/profile/SuccessDescription.jsx";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Profile</h3>
      </div>
      <div className={styles.content}>
        <GameLink />
        <SuccessDescription />
        <div className={styles.helpContainer}>
          <div className={styles.buttonContainer}>
            <button className="secondaryBtn">Discard</button>
            <button className="primaryBtn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
