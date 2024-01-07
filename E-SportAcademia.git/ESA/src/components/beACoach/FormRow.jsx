import React from "react";
import styles from "../../styles/beACoach/formRow.module.css";

const FormRow = ({ children, label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowStyle}>
        <p>{label}</p>
        {children}
      </div>
    </div>
  );
};

export default FormRow;
