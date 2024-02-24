import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/dashboard/Dashboard.module.css";
import SubsCoaches from "./SubsCoaches";
import Coachings from "./Coachings";

const Dashboard = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString !== undefined) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <div className={styles.containerContent}>
        {/* <SubsCoaches /> */}
        {/* <button onClick={() => console.log(userContextData)}>asdadsad</button> */}
        <Coachings userdata={userData} />
        {/* <div className={styles.searchCourse}>Search Course</div> */}
      </div>
    </div>
  );
};

export default Dashboard;
