import React from "react";
import styles from "../../styles/coaching/CoachCourses.module.css";

const CoachCourses = ({ selectedCoach }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Courses from {selectedCoach}</h2>
      <div className={styles.containerCourses}>content</div>
    </div>
  );
};

export default CoachCourses;
