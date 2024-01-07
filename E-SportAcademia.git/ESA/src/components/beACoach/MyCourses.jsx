import React from "react";
import styles from "../../styles/beACoach/mycourses.module.css";

const MyCourses = () => {
  const myCourses = [];
  return (
    <div className={styles.container}>
      <table>
        <div className={styles.containerHeader}>
          <tr align="left">
            {/* <th className={styles.th}>
              <p style={{ width: "5rem" }}></p>
            </th> */}
            <th className={styles.th}>
              <p>Img</p>
            </th>
            <th className={styles.th}>
              <p>Titel</p>
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
              <p>Delete</p>
            </th>
          </tr>
        </div>
        <div className={styles.content}>
          {myCourses !== undefined || myCourses.lenght === 0 ? (
            myCourses.map((c) => (
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
          ) : (
            <tr>No courses</tr>
          )}
        </div>
      </table>
    </div>
  );
};

export default MyCourses;
