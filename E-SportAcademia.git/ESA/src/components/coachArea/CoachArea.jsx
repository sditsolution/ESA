import React from "react";
import styles from "../../styles/coachArea/coachArea.module.css";
import Courses from "./Courses";
import Clients from "./Clients";

const CoachArea = ({ onHandleNavigation }) => {
  return (
    <div className={styles.container}>
      <Clients />
      <Courses />
    </div>
  );
};

export default CoachArea;
