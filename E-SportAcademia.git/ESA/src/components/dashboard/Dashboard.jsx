import React from "react";
import { useState, useContext } from "react";
import styles from "../../styles/dashboard/Dashboard.module.css";
import SubsCoaches from "./SubsCoaches";
import Coachings from "./Coachings";
import { UserContext } from "./../../App.jsx";

const Dashboard = () => {
  const { data: userContextData, setData: setUserContextData } =
    useContext(UserContext);
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <div className={styles.containerContent}>
        {/* <SubsCoaches /> */}
        {/* <button onClick={() => console.log(userContextData)}>asdadsad</button> */}
        <Coachings />
        <div className={styles.searchCourse}>Search Course</div>
      </div>
    </div>
  );
};

export default Dashboard;
