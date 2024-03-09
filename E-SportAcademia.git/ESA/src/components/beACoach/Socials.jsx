import React from "react";
import styles from "../../styles/beACoach/socials.module.css";

const Socials = ({ name, link, setInput, input }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>{name}</label>
      </div>
      <div className={styles.content}>
        <input
          name={name}
          className={styles.inputLink}
          placeholder={link}
          defaultValue={input}
          onChange={(e) => setInput(e.target)}
        />
      </div>
    </div>
  );
};

export default Socials;