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
    {
      id: 2,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 3,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 4,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 5,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 6,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },

    {
      id: 7,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },

    {
      id: 8,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },

    {
      id: 9,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },

    {
      id: 10,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 11,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 12,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 13,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 14,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 15,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 16,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 17,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 18,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 19,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 20,
      img: "../assets/pictures/NowayExample.png",
      coach: "Noway4you",
      Coursename: "Lasthitting",
      Date: "19.09.2034",
      Start: "17:00",
      End: "19:00",
      Media: "Zoom",
      Price: 50,
    },
    {
      id: 21,
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
