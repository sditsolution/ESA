import React from "react";
import { useState } from "react";
import styles from "../../styles/games/selectedGame.module.css";
import Coaches from "../coaching/Coaches";
import CoachInformation from "../coaching/CoachInformation";
import CoachCourses from "../coaching/CoachCourses";

const SelectedGame = ({ name }) => {
  const [selectedCoach, setSelectedCoach] = useState();
  const [viewCourses, setViewCourses] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{name}</h1>
      <div className={styles.containerConentent}>
        <Coaches setCoach={setSelectedCoach} />
        <CoachInformation
          viewCourses={setViewCourses}
          selectedCoach={selectedCoach}
        />
        {viewCourses && <CoachCourses />}
      </div>
    </div>
  );
};

export default SelectedGame;
