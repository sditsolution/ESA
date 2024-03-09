import React from "react";
import styles from "../../styles/beACoach/coachingOverview.module.css";
import IncomeChart from "./IncomeChart";
import HistoryCoaching from "./HistoryCoaching";

const CoachingOverview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h3>Overview</h3>
      </div>
      <IncomeChart />
      <HistoryCoaching />
    </div>
  );
};

export default CoachingOverview;
