import React from "react";
import styles from "../../styles/coachArea/bookedCourse.module.css";

const BookedCourse = ({ name, date, participant, media }) => {
  return (
    <div className={styles.container} onClick={() => console.log("Course")}>
      <p>{name}</p>
      <p>
        {date.day}.{date.month}.{date.year}
      </p>
      <p>
        {date.time.hour}:{date.time.minute}
      </p>
      <p>{participant}</p>
      <p>{media}</p>
    </div>
  );
};

export default BookedCourse;
