import React from "react";
import { useState } from "react";
import styles from "../../styles/games/selectedGame.module.css";
import Coaches from "../coaching/Coaches";
import CoachInformation from "../coaching/CoachInformation";
import CoachCourses from "../coaching/CoachCourses";

const SelectedGame = ({ name }) => {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [viewCourses, setViewCourses] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{name}</h1>
      <div className={styles.containerConentent}>
        <Coaches
          setCoach={setSelectedCoach}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
        />
        {isSelected ? (
          <CoachInformation
            viewCourses={setViewCourses}
            selectedCoach={selectedCoach}
          />
        ) : null}
      </div>
      {viewCourses && <CoachCourses selectedCoach={selectedCoach} />}
    </div>
  );
};

export default SelectedGame;
