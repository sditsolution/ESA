import React from "react";
import { useState } from "react";
import styles from "../../styles/dashboard/Dashboard.module.css";
import SubsCoaches from "./SubsCoaches";
import Coachings from "./Coachings";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      {/* <SubsCoaches /> */}
      <Coachings />
      <div className={styles.searchCourse}>Search Course</div>
    </div>
  );
};

export default Dashboard;
