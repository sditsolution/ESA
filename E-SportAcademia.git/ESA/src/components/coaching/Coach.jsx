import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/coaching/Coach.module.css";
import CoachProfile from "./CoachProfile";
import CoachCourses from "./CoachCourses";

const Coach = () => {
  const [users, setUsers] = useState([]);
  function getUserData() {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen der Benutzerdaten:", error)
      );
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Dennis</h2>
      <div className={styles.content}>
        <CoachProfile />
        <CoachCourses />
      </div>
    </div>
  );
};

export default Coach;
