import React from "react";
import { useState } from "react";
import styles from "../../styles/dashboard/Dashboard.module.css";

const Dashboard = () => {
  const [openCoaches, isopenCoaches] = useState(true);
  const [openMyGames, isopenMyGames] = useState(true);
  const [openNewCoachings, isopenNewCoachings] = useState(true);
  const [openCommingUp, isopenCommingUp] = useState(true);

  function ToggleMyGames() {
    if (openMyGames) {
      isopenMyGames(false);
    } else {
      isopenMyGames(true);
    }
  }
  function ToggleCoaches() {
    if (openCoaches) {
      isopenCoaches(false);
    } else {
      isopenCoaches(true);
    }
  }
  function ToggleNewCoachings() {
    if (openNewCoachings) {
      isopenNewCoachings(false);
    } else {
      isopenNewCoachings(true);
    }
  }
  function ToggleCommingUp() {
    if (openCommingUp) {
      isopenCommingUp(false);
    } else {
      isopenCommingUp(true);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.subscription}>
        <div
          className={
            openCoaches ? styles.subscribbed : styles.subscribbedClosed
          }
        >
          <div className={styles.subscribbedheader} onClick={ToggleCoaches}>
            {openCoaches ? <span> - </span> : <span>+</span>}
            <h1>Coaches</h1>
          </div>
          <div
            className={
              openCoaches
                ? styles.subscribbedList
                : styles.subscribbedListClosed
            }
          >
            <ul>
              <li>Noway4you</li>
              <li>Noway4you</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.subscription}>
        <div
          className={
            openNewCoachings ? styles.subscribbed : styles.subscribbedClosed
          }
        >
          <div
            className={styles.subscribbedheader}
            onClick={ToggleNewCoachings}
          >
            {openNewCoachings ? <span> - </span> : <span>+</span>}
            <h1>New Coachings</h1>
          </div>
          <div
            className={
              openNewCoachings
                ? styles.subscribbedList
                : styles.subscribbedListClosed
            }
          >
            <ul>
              <li>Noway4you</li>
              <li>Noway4you</li>
            </ul>
          </div>
        </div>
        <div
          className={
            openCommingUp ? styles.subscribbed : styles.subscribbedClosed
          }
        >
          <div className={styles.subscribbedheader} onClick={ToggleCommingUp}>
            {openCommingUp ? <span> - </span> : <span>+</span>}
            <h1>Coming Up</h1>
          </div>
          <div
            className={
              openCommingUp ? styles.commingUp : styles.commingUpTableClosed
            }
          >
            <table>
              <tbody>
                <tr>
                  <td>Lane management</td>
                  <td>Noway4you</td>
                  <td>16:00</td>
                  <td>17:30</td>
                  <td>Discord</td>
                </tr>
                <tr>
                  <td>Jessica</td>
                  <td>Female</td>
                  <td>47</td>
                </tr>
                <tr>
                  <td>Warren</td>
                  <td>Male</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Warren</td>
                  <td>Male</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Warren</td>
                  <td>Male</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Warren</td>
                  <td>Male</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
