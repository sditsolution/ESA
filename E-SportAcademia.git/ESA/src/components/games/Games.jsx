import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/coaching/games.module.css";

const Games = ({ gameId, img, name, numberCoaches }) => {
  const navigation = useNavigate();
  //ohne build Process
  //process.env.PUBLIC_URL mit build Prozess
  const publicUrl = "";
  function handleNavigation() {
    navigation(`/games/${name}`);
  }
  return (
    <div className={styles.container} onClick={() => handleNavigation()}>
      <div className={styles.img}>
        <img src={publicUrl + img} alt={name} />
      </div>
      <div className={styles.content}>
        <label style={{ fontWeight: "bold", fontSize: "1em" }}>{name}</label>
      </div>
    </div>
  );
};

export default Games;
