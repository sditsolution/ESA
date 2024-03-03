import React from "react";
import { useState, useEffect } from "react";
import CoachGames from "../CoachGames";
import Socials from "../../Socials";
import GameSelection from "../GameSelection";
import styles from "../../../../styles/beACoach/profile/gameLink.module.css";

const GameLink = () => {
  const [coachGames, setCoachGames] = useState([]);
  const [isSelected, setIsSelected] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <div className={styles.headerContainer}>
          <h3>Game information</h3>
        </div>
        <div className={styles.gameSelection}>
          <GameSelection
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            coachGames={coachGames}
            setCoachGames={setCoachGames}
          />
        </div>
        <div className={styles.coachGames}>
          {coachGames != null
            ? coachGames.map((g) => (
                <CoachGames key={g.id} name={g.name} rang={g.rang} />
              ))
            : null}
        </div>
      </div>
      <div className={styles.gameContainer}>
        <div className={styles.headerContainer}>
          <h3>Links and socials</h3>
        </div>
        <div className={styles.socialsContainer}>
          <Socials name="Twitch" link="www.hallo.de" />
          <Socials name="Youtube" link="www.hallo.de" />
          <Socials name="Instagram" link="www.hallo.de" />
          <Socials name="TikTok" link="www.hallo.de" />
        </div>
      </div>
    </div>
  );
};

export default GameLink;
