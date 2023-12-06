/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

import styles from "../../styles/coachPages/course.module.css";

const Course = ({ course, setCourse, setOpen }) => {
  function OpenCourse() {
    setCourse(course);
    setOpen(true);
  }

  return (
    <div className={styles.container} onClick={OpenCourse}>
      <div className={styles.containerContent}>
        <p>{course.name}</p>
        <p>{course.date}</p>
        <p>
          {course.start} - {course.end}
        </p>
        <p>
          {course.numberBooked} /{course.participants}
        </p>
        <p>{course.price}</p>
      </div>
    </div>
  );
};

export default Course;
