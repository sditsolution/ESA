import React from "react";
import { useState } from "react";
import styles from "../../styles/dashboard/Dashboard.module.css";
import SubsCoaches from "./SubsCoaches";
import Coachings from "./Coachings";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <div className={styles.containerContent}>
        {/* <SubsCoaches /> */}
        <Coachings />
        <div className={styles.searchCourse}>Search Course</div>
      </div>
    </div>
  );
};

export default Dashboard;
