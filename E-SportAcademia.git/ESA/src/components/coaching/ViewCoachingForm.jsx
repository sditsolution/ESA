import React from "react";
import styles from "../../styles/coaching/viewCoachingForm.module.css";
import {
  formatDateFromMySQL,
  extractTimeFromMySQL,
} from "../../utilities/dateUtils";
const ViewCoachingForm = ({ coaching }) => {
  return (
    <div className={styles.container}>
      <h3>{coaching.TITLE}</h3>
      <div className={styles.contentContainer}>
        <div className={styles.contentRow}>
          <p>Date:</p>
          <p>{formatDateFromMySQL(coaching.DATE)}</p>
        </div>
        <div className={styles.contentRow}>
          <p>Start:</p>
          <p>{extractTimeFromMySQL(coaching.START)}</p>
        </div>
        <div className={styles.contentRow}>
          <p>End:</p>
          <p>{extractTimeFromMySQL(coaching.END)}</p>
        </div>
        <div className={styles.contentRow}>
          <p>Participants:</p>
          <p>
            {coaching.PARTICIPANT}/{coaching.BOOKEDPATICIPANT}
          </p>
        </div>
        <div className={styles.contentRow}>
          <p>Media:</p>
          <p>{coaching.MEDIA}</p>
        </div>
        <p>
          <strong>Description:</strong>
        </p>
        <p>{coaching.DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default ViewCoachingForm;
