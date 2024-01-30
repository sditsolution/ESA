import React, { Fragment } from "react";
import styles from "../../styles/dashboard/Coachings.module.css";

const Coachings = () => {
  // Api call mit allen Terminen die man gebucht hat
  const appointments = [
    {
      id: 1,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
  ];

  return (
    <div className={styles.container}>
      <table>
        <div className={styles.containerHeader}>
          <tr align="left">
            {/* <th className={styles.th}>
              <p style={{ width: "5rem" }}></p>
            </th> */}
            <th className={styles.th}>
              <p>Coach</p>
            </th>
            <th className={styles.th}>
              <p>Coursename</p>
            </th>
            <th className={styles.th}>
              <p>Date</p>
            </th>
            <th className={styles.th}>
              <p>Start</p>
            </th>
            <th className={styles.th}>
              <p>End</p>
            </th>
            <th className={styles.th}>
              <p>Media</p>
            </th>
            <th className={styles.th}>
              <p>Price</p>
            </th>
            <th className={styles.th}>
              <p>Cancel</p>
            </th>
          </tr>
        </div>
        <div className={styles.content}>
          {appointments !== undefined
            ? appointments.map((c) => (
                <>
                  <tr align="left">
                    {/* <td className={styles.th}>{c.img}</td> */}
                    <td className={styles.th}>{c.coach}</td>
                    <td className={styles.th}>{c.Coursename}</td>
                    <td className={styles.th}>{c.Date}</td>
                    <td className={styles.th}>{c.Start}</td>
                    <td className={styles.th}>{c.End}</td>
                    <td className={styles.th}>{c.Media}</td>
                    <td className={styles.th}>{c.Price}</td>
                    <td className={styles.th}>
                      <button className="primaryBtn">Cancel</button>
                    </td>
                  </tr>
                </>
              ))
            : null}
        </div>
      </table>
    </div>
  );
};

export default Coachings;
