import React from "react";
import styles from "../../styles/coachArea/courses.module.css";
import BookedCourse from "./BookedCourse";

const Courses = () => {
  const myCoachings = [
    {
      id: 1,
      coursename: "Lasthitting",
      date: { time: { hour: 18, minute: 30 }, day: 17, month: 11, year: 2023 },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: { time: { hour: 18, minute: 30 }, day: 17, month: 11, year: 2023 },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: { time: { hour: 18, minute: 30 }, day: 17, month: 11, year: 2023 },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: { time: { hour: 18, minute: 30 }, day: 17, month: 11, year: 2023 },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: {
        time: { hour: 18, minute: 30 },
        day: 17,
        month: 11,
        year: 2023,
      },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: {
        time: { hour: 18, minute: 30 },
        day: 17,
        month: 11,
        year: 2023,
      },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: {
        time: { hour: 18, minute: 30 },
        day: 17,
        month: 11,
        year: 2023,
      },
      participant: "Dennis",
      media: "discord",
    },
    {
      id: 1,
      coursename: "Lasthitting",
      date: { time: { hour: 18, minute: 30 }, day: 17, month: 11, year: 2023 },
      participant: "Dennis",
      media: "discord",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>History</h1>
      </div>
      <div className={styles.myCoachings}>
        {myCoachings !== undefined
          ? myCoachings.map((course, key) => (
              <BookedCourse
                name={course.coursename}
                date={course.date}
                participant={course.participant}
                media={course.media}
                key={course.id}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Courses;
