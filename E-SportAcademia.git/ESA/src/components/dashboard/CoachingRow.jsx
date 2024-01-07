import React from "react";
import styles from "../../styles/dashboard/coachingRow.module.css";

const CoachingRow = ({
  img,
  coach,
  coursename,
  date,
  start,
  end,
  media,
  price,
  cancel,
}) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="imgText" className={styles.image} />
      <p>{coach}</p>
      <p>{coursename}</p>
      <p>{date}</p>
      <p>{start}</p>
      <p>{end}</p>
      <p>{media}</p>
      <p>{price}</p>
      <button className="primaryBtn">Cancel</button>
    </div>
  );
};

export default CoachingRow;
