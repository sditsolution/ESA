import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/coaching/Coach.module.css";
import CoachProfile from "./CoachProfile";
import CoachCourses from "./CoachCourses";

const Coach = ({ name }) => {
  const [users, setUsers] = useState([]);
  //coachId aus URL
  useEffect(() => {
    // getUserData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <div className={styles.content}>
        <CoachProfile />
        {/* <CoachCourses /> */}
      </div>
    </div>
  );
};

export default Coach;
