import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/coaching/games.module.css";

const Games = ({ gameId, img, name, numberCoaches }) => {
  const navigation = useNavigate();
  function handleNavigation() {
    navigation(`/games/${name}`);
  }
  return (
    <div className={styles.container} onClick={() => handleNavigation()}>
      <div className={styles.img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.content}>
        <label style={{ fontWeight: "bold", fontSize: "1em" }}>{name}</label>
      </div>
    </div>
  );
};

export default Games;
