import React, { useEffect, useState } from "react";
import styles from "../../styles/beACoach/coachingOverview.module.css";
import IncomeChart from "./IncomeChart";
import HistoryCoaching from "./HistoryCoaching";

const CoachingOverview = ({ userData }) => {
  const [historyCoaching, setHistoryCoaching] = useState();
  const getHistroyCoaching = async () => {
    const { idcoach } = userData;
    const response = await fetch(`http://localhost:3001/getHistoryCoaching`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        idcoach,
      }),
    });
    const result = await response.json();
    setHistoryCoaching(result);
  };
  useEffect(() => {
    getHistroyCoaching();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h2>Overview</h2>
      </div>
      <div className={styles.contentContainer}>
        <IncomeChart />
        <HistoryCoaching prevCoaching={historyCoaching} />
      </div>
    </div>
  );
};

export default CoachingOverview;
