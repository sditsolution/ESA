import React, { useState } from "react";
import styles from "../../styles/beACoach/profile.module.css";
import { HiMiniPlus } from "react-icons/hi2";
const Profile = () => {
  const [games, setGames] = useState([]);
  const [coachGames, setCoachGames] = useState();
  const [isSelected, setIsSelected] = useState();

  function addGame() {
    setCoachGames(...games, isSelected);
  }

  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <div className={styles.headerContainer}>
          <h3>Game information</h3>
        </div>
        <div className={styles.gameSelection}>
          <select
            className={styles.selection}
            onChange={(e) => setIsSelected(e.target.value)}
          >
            <option>League</option>
          </select>
          <HiMiniPlus
            className={styles.addSelection}
            onClick={() => addGame()}
          />
        </div>
        {coachGames !== undefined && coachGames !== null
          ? coachGames.map((g) => {
              <p>test</p>;
            })
          : null}
      </div>
      <div className={styles.gameContainer}>
        <div className={styles.headerContainer}>
          <h3>Profile</h3>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
