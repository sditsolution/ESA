import React from "react";
import styles from "../../styles/coachPages/coachView.module.css";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const CoachView = ({ name, img, subs }) => {
  return (
    <div className={styles.container}>
      {/* <Link to={`coach/${name}`}> */}
      <img src={img} alt="coachpicture" className={styles.picture} />
      {/* </Link> */}
      <div className={styles.content}>
        <p>{name}</p>
        <p>Subscriber: {subs}</p>
      </div>
    </div>
  );
};

export default CoachView;
