import React, { useEffect, useState } from "react";
import styles from "../../styles/beACoach/mycourses.module.css";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import { HiEye } from "react-icons/hi2";

const MyCourses = ({ coachID }) => {
  const [coaching, setCoaching] = useState([]);
  const [isViewHovered, setIsViewHovered] = useState();
  const [isTrashHovered, setIsTrashHovered] = useState();

  const getCoaching = async () => {
    const response = await fetch(
      `http://localhost:3001/getCoaching?userID=${coachID}`,
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

  function getCoachings() {
    if (coachID !== null || coachID !== undefined) {
      getCoaching();
    }
  }
  function formatDateFromMySQL(mysqlDate) {
    const date = new Date(mysqlDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Monate starten bei 0
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
  function extractTimeFromMySQL(mysqlDateTime) {
    const date = new Date(mysqlDateTime);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }
  useEffect(() => {
    getCoachings();
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
              <p>Game</p>
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
              <p>Participants</p>
            </th>
            <th className={styles.th}></th>
          </tr>
        </div>
        <div className={styles.content}>
          {coaching !== undefined && coaching.length > 0 ? (
            coaching.map((c) => (
              <React.Fragment key={c.id}>
                <tr align="left">
                  <td className={styles.th}>
                    <div style={{ height: "3rem", width: "3rem" }}>
                      <img src={c.IMAGE} alt="gameimg" />
                    </div>
                  </td>
                  <td className={styles.th}>{c.TITLE}</td>
                  <td className={styles.th}>{formatDateFromMySQL(c.DATE)}</td>
                  <td className={styles.th}>{extractTimeFromMySQL(c.START)}</td>
                  <td className={styles.th}>{extractTimeFromMySQL(c.END)}</td>
                  <td className={styles.th}>{c.MEDIA}</td>
                  <td className={styles.th}>{c.PRICE} €</td>
                  <td className={styles.th}>
                    {c.BOOKEDPATICIPANT == null ? 0 : c.BOOKEDPATICIPANT}/
                    {c.PARTICIPANT}
                  </td>
                  <td className={styles.th}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-around",
                        width: "5rem",
                      }}
                    >
                      {!isViewHovered ? (
                        <HiOutlineEye
                          onMouseEnter={() => setIsViewHovered(true)}
                          onMouseLeave={() => setIsViewHovered(false)}
                          style={{ cursor: "pointer" }}
                          onClick={() => console.log("Test")}
                        />
                      ) : (
                        <HiEye
                          onMouseEnter={() => setIsViewHovered(true)}
                          onMouseLeave={() => setIsViewHovered(false)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                      {!isTrashHovered ? (
                        <HiOutlineTrash
                          onMouseEnter={() => setIsTrashHovered(true)}
                          onMouseLeave={() => setIsTrashHovered(false)}
                          style={{ cursor: "pointer" }}
                          onClick={() => console.log("Test")}
                        />
                      ) : (
                        <HiMiniTrash
                          onMouseEnter={() => setIsTrashHovered(true)}
                          onMouseLeave={() => setIsTrashHovered(false)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="8">No courses</td>
            </tr>
          )}
        </div>
      </table>
    </div>
  );
};

export default MyCourses;
