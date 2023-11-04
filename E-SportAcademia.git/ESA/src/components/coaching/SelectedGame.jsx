import React from "react";
import styles from "../../styles/games/selectedGame.module.css";
import Coaches from "../coaching/Coaches";
import CoachInformation from "../coaching/CoachInformation";

const SelectedGame = ({ name }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{name}</h1>
      <div className={styles.containerConentent}>
        <Coaches />
        <CoachInformation />
      </div>
    </div>
  );
};

export default SelectedGame;
