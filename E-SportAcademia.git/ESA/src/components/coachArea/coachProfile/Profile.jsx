import React from "react";
import styles from "../../../styles/coachArea/coachProfile/profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Profile</h1>
      </div>
      <div className={styles.coachInformation}>
        <div className={styles.image}>IMG</div>
        <div className={styles.information}>
          <p>Ingame Name</p>
          <input
            type="text"
            placeholder="In-game Name"
            className={styles.input}
          />
          <p></p>
          <input type="text" placeholder="CoachName" className={styles.input} />
          <input type="text" placeholder="CoachName" className={styles.input} />
          <input type="text" placeholder="CoachName" className={styles.input} />
        </div>
      </div>
      <div className={styles.coachingText}>
        <textarea
          rows={10}
          cols={70}
          placeholder="type in your text"
          className={styles.textarea}
        />
      </div>
      <div className={styles.btnContainer}>
        <button className="primaryBtn">Save</button>
      </div>
    </div>
  );
};

export default Profile;
