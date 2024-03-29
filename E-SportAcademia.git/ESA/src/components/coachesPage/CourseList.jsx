import React from "react";
import styles from "../../styles/coachPages/coachlist.module.css";
import Course from "./Course.jsx";
import { useState } from "react";

const CourseList = ({ setCourse, setOpen }) => {
  const courses = [
    {
      id: 1,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 1,
    },
    {
      id: 2,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },

    {
      id: 3,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 4,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 5,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 6,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 7,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 8,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 9,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 10,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 11,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 12,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 13,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 14,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 15,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 16,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 17,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 18,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 19,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 20,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
    {
      id: 21,
      name: "Last hitting",
      date: "17.11.2023",
      start: "17:00",
      end: "19:00",
      participants: 1,
      where: "discord",
      price: "50€",
      numberBooked: 0,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Courses</h1>
      <div className={styles.containerCourse}>
        {courses !== undefined
          ? courses.map((c) => (
              <Course
                course={c}
                key={c.id}
                setCourse={setCourse}
                setOpen={setOpen}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default CourseList;
