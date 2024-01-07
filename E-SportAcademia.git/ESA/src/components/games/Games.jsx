import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/coaching/Games.module.css";

const Games = ({ img, name, numberCoaches }) => {
  const navigation = useNavigate();
  function handleNavigation() {
    navigation(`/games/${name}`);
  }
  return (
    <div className={styles.container} onClick={() => handleNavigation()}>
      <div className={styles.img}>
        <img src={img} alt={name} />
      </div>

      <label style={{ fontWeight: "bold", fontSize: "1em" }}>{name}</label>
      <label>coaches:{numberCoaches !== undefined ? 0 : numberCoaches} </label>
    </div>
  );
};

export default Games;
