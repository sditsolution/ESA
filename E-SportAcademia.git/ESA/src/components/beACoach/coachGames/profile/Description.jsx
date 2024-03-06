import React, { useState } from "react";
import styles from "../../../../styles/beACoach/profile/description.module.css";

const Description = () => {
  const [text, setText] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <h3>Description</h3>
        </div>
        <div className={styles.textareaContainer}>
          <textarea className={styles.inputText} type="text" />
        </div>
      </div>
    </div>
  );
};

export default Description;
