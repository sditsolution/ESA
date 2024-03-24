import React from "react";
import styles from "../../styles/coachPages/coachlist.module.css";
import Course from "./Course.jsx";
import { useState } from "react";
//wird nicht mehr benutzt
const CourseList = ({ setCourse, setOpen }) => {
  const course = [];
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
