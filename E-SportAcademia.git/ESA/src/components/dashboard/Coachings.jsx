import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard/Coachings.module.css";

const Coachings = () => {
  // Api call mit allen Terminen die man gebucht hat
  const [bookedCoaching, setBookedCoaching] = useState([]);

  const getMyBookedCoaching = async () => {
    const response = await fetch(`http://localhost:3001/getbookedCoaching`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });
    const result = await response.json();
    setBookedCoaching(result);
  };
  useEffect(() => {
    getMyBookedCoaching();
  }, []);
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
