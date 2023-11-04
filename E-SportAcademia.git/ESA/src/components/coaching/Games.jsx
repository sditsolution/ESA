import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/coaching/Games.module.css";

const Games = ({ img, name, numberCoaches, onHandleNavigation }) => {
  return (
    <div
      className={styles.container}
      onClick={() => onHandleNavigation("selectedGame", name)}
    >
      <Link to={`games/${name}`}>
        <div className={styles.img}>
          <img src={img} />
        </div>
        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>{name}</label>
        <label>{numberCoaches} coaches</label>
      </Link>
    </div>
  );
};

export default Games;
