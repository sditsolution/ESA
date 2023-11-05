import React from "react";
import styles from "../../styles/coaching/Coach.module.css";

const Coach = ({ name, setCoach }) => {
  function OnHandleSetCoach(name) {
    setCoach(name);
  }
  return (
    <div className={styles.container} onClick={() => OnHandleSetCoach(name)}>
      <div className={styles.content}>{name}</div>
    </div>
  );
};

export default Coach;
