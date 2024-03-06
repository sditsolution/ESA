import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/coaching/course.module.css";
import image from "../../assets/pictures/courseTestpng.png";

const Course = () => {
  const [coaching, setCoaching] = useState([]);
  const { coachname } = useParams();
  const getCoaching = async () => {
    const response = await fetch(
      `http://localhost:3001/getCoaching?userID=${coachname}/courses`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const result = await response.json();
    setCoaching(result);
  };
  useEffect(() => {
    getCoaching();
  }, []);
  return (
    <div className={styles.rootContainer}>
      <div className={styles.container}>
        <table>
          <div className={styles.containerHeader}>
            <tr align="left">
              {/* <th className={styles.th}>
              <p style={{ width: "5rem" }}></p>
            </th> */}
              <th className={styles.th}>
                <p></p>
              </th>
              <th className={styles.title}>
                <p>Title</p>
              </th>
              <th className={styles.th}>
                <p>Participants</p>
              </th>
              <th className={styles.th}>
                <p>Price</p>
              </th>
              <th className={styles.th}>
                <p>Media</p>
              </th>
              <th className={styles.th}>
                <p></p>
              </th>
            </tr>
          </div>
          <div className={styles.content}>
            {coaching !== undefined
              ? coaching.map((c) => (
                  <div key={c.id} style={{ marginTop: "1rem" }}>
                    <tr style={{ display: "flex", alignItems: "center" }}>
                      {/* <td className={styles.th}>{c.img}</td> */}
                      <td className={styles.th}>
                        <img
                          src={c.IMAGE}
                          alt="coursePic"
                          style={{
                            height: "100%",
                            width: "50%",
                            objectFit: "contain",
                          }}
                        />
                      </td>
                      <td className={styles.title}>{c.TITLE}</td>
                      <td className={styles.th}>
                        {c.PARTICIPANT}/{c.BOOKEDPATICIPANT}
                      </td>
                      <td className={styles.th}>{c.PRICE}</td>
                      <td className={styles.th}>{c.MEDIA}</td>

                      <td className={styles.th}>
                        <button className={styles.viewButton}>View</button>
                      </td>
                    </tr>
                  </div>
                ))
              : null}
          </div>
        </table>
      </div>
    </div>
  );
};

export default Course;
