import React from "react";
import styles from "../../styles/beACoach/historyCoaching.module.css";
import {
  formatDateFromMySQL,
  extractTimeFromMySQL,
} from "../../utilities/dateUtils";
const HistoryCoaching = ({ prevCoaching }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headercontainer}>
        <div className={styles.header}>
          <h3>History</h3>
        </div>
      </div>
      <div className={styles.content}>
        <table>
          <tr>
            <td>
              <strong>Title</strong>
            </td>
            <td>
              <strong>Revenue</strong>
            </td>
            <td>
              <strong>Participants</strong>
            </td>
            <td>
              <strong>Date</strong>
            </td>
            <td>
              <strong>Time</strong>
            </td>
          </tr>
          {prevCoaching != undefined
            ? prevCoaching.map((c) => (
                <tr key={c.idcoaching}>
                  <td>{c.TITLE}</td>
                  <td>{c.REVENUE}€</td>
                  <td>{c.BOOKEDPATICIPANT}</td>
                  <td>{formatDateFromMySQL(c.DATE)}</td>
                  <td>
                    {extractTimeFromMySQL(c.START)}-
                    {extractTimeFromMySQL(c.END)}
                  </td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    </div>
  );
};

export default HistoryCoaching;
