import React, { useState } from "react";
import styles from "../../styles/dashboard/coachingRow.module.css";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import { HiEye } from "react-icons/hi2";
const CoachingRow = ({
  img,
  coachingid,
  coach,
  title,
  date,
  start,
  end,
  media,
  price,
}) => {
  const [isTrashHovered, setIsTrashHovered] = useState();
  const [isViewHovered, setIsViewHovered] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.rowElement}>
        <img src={img} alt="imgText" className={styles.image} />
      </div>
      <div className={styles.rowElement}>
        <p>{coach}</p>
      </div>
      <div className={styles.rowElement}>
        <p>{title}</p>
      </div>
      <div className={styles.rowElement}>
        <p>{date}</p>
      </div>
      <div className={styles.rowElement}>
        <p>{start}</p>
      </div>
      <div className={styles.rowElement}>
        <p>{end}</p>
      </div>
      <div className={styles.rowElement}>
        <p>{media}</p>
      </div>
      <div className={styles.rowElement}>
        <p>{price}</p>
      </div>
      <div className={styles.actionContainer}>
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
    </div>
  );
};

export default CoachingRow;
