import React, { useState } from "react";
import styles from "../../../../styles/beACoach/profile/description.module.css";

const Description = ({ setDescription, description }) => {
  function handleDescriptionChange(event) {
    setDescription(event);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <h3>Description</h3>
        </div>
        <div className={styles.textareaContainer}>
          <textarea
            className={styles.inputText}
            type="text"
            placeholder="Write a description"
            defaultValue={description}
            onChange={(e) => handleDescriptionChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
