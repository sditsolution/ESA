import React from "react";
import { useState } from "react";
import styles from "../../styles/dashboard/Dashboard.module.css";
import SubsCoaches from "./SubsCoaches";
import Coachings from "./Coachings";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.subscription}>
        <SubsCoaches />
        <Coachings />
      </div>
    </div>
  );
};

export default Dashboard;
