import React from "react";
import styles from "../../styles/coachPages/coachView.module.css";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const CoachView = ({ name, img }) => {
  return (
    <div className={styles.container}>
      {/* <Link to={`coach/${name}`}> */}
      <img src={img} alt="coachpicture" className={styles.picture} />
      {/* </Link> */}
      <p>{name}</p>
      <p>Subscriber:</p>
    </div>
  );
};

export default CoachView;
