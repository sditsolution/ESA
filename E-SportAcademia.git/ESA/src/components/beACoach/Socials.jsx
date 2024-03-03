import React from "react";
import styles from "../../styles/beACoach/socials.module.css";

const Socials = ({ name, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>{name}</label>
      </div>
      <div className={styles.content}>
        <input className={styles.inputLink} placeholder={link} />
      </div>
    </div>
  );
};

export default Socials;
