import React from "react";
import styles from "../../styles/beACoach/createCourse.module.css";
import MyCourses from "./MyCourses";
import AddCourse from "./AddCourse";

const CreateCourse = () => {
  return (
    <div className={styles.container}>
      <MyCourses />
      <AddCourse />
    </div>
  );
};

export default CreateCourse;
