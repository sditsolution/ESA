import React from "react";
import styles from "../../styles/beACoach/createCourse.module.css";
import MyCourses from "./MyCourses";
import AddCourse from "./AddCourse";

const CreateCourse = ({ userID }) => {
  return (
    <div>
      <h2>Your coachings</h2>
      <div className={styles.container}>
        <MyCourses coachID={userID.idcoach} />
        <AddCourse userID={userID.idcoach} />
      </div>
    </div>
  );
};

export default CreateCourse;
