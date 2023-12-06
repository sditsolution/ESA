import React, { Fragment } from "react";
import styles from "../../styles/dashboard/Coachings.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Coachings = () => {
  // Api call mit allen Terminen die man gebucht hat
  const appointments = [
    {
      id: 1,
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
    },
    {
      id: 2,
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
    },
    {
      id: 3,
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
    },
    {
      id: 4,
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
    },
    {
      id: 5,
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
    },
    {
      id: 6,
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h1>Appointment</h1>
      </div>
      <div className={styles.containerTable}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Coach</th>
              <th>Coursename</th>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Media</th>
              <th>Cancel</th>
            </tr>

            {appointments !== undefined
              ? appointments.map((item, key) => (
                  <tr key={item.id}>
                    <td>{item.coach}</td>
                    <td>{item.Coursename}</td>
                    <td>{item.Date}</td>
                    <td>{item.Start}</td>
                    <td>{item.End}</td>
                    <td>{item.Media}</td>
                    <td>
                      <CloseIcon style={{ cursor: "pointer" }} />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coachings;
