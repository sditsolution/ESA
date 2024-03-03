import React from "react";
import styles from "../../../styles/beACoach/coachGames.module.css";

const CoachGames = ({ name, rang }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{name}</p>
      </div>
      <div className={styles.content}>
        <p>{rang}</p>
      </div>
    </div>
  );
};

export default CoachGames;
