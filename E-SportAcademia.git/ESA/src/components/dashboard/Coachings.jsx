import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard/Coachings.module.css";
import {
  formatDateFromMySQL,
  extractTimeFromMySQL,
} from "./../../utilities/dateUtils";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import { HiEye } from "react-icons/hi2";
import CoachingRow from "./CoachingRow";

const Coachings = ({ userdata }) => {
  // Api call mit allen Terminen die man gebucht hat
  const [bookedCoaching, setBookedCoaching] = useState();
  const [isViewHovered, setIsViewHovered] = useState();
  const [isTrashHovered, setIsTrashHovered] = useState();

  const getMyBookedCoaching = async () => {
    if (userdata !== undefined) {
      const { USER_ID } = userdata;
      const response = await fetch(`http://localhost:3001/getbookedCoaching`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify({
          USER_ID,
        }),
      });
      const result = await response.json();
      console.log(result);
      setBookedCoaching(result);
    }
  };
  useEffect(() => {
    getMyBookedCoaching();
  }, [userdata]);
  if (userdata !== undefined) {
    return (
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

              <th className={styles.th}></th>
            </tr>
          </div>
          <div className={styles.content}>
            {bookedCoaching !== undefined && bookedCoaching.length > 0 ? (
              bookedCoaching.map((c) => (
                <React.Fragment key={c.id}>
                  <tr align="left">
                    <td className={styles.th}>
                      <div style={{ height: "3rem", width: "3rem" }}>
                        <img src={c.IMAGE} alt="gameimg" />
                      </div>
                    </td>
                    <td className={styles.th}>{c.TITLE}</td>
                    <td className={styles.th}>{formatDateFromMySQL(c.DATE)}</td>
                    <td className={styles.th}>
                      {extractTimeFromMySQL(c.START)}
                    </td>
                    <td className={styles.th}>{extractTimeFromMySQL(c.END)}</td>
                    <td className={styles.th}>{c.MEDIA}</td>
                    <td className={styles.th}>{c.PRICE} €</td>
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
  }
};

export default Coachings;
