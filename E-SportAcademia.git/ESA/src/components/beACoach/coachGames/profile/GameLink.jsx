import React from "react";
import { useState, useEffect } from "react";
import CoachGames from "../CoachGames";
import Socials from "../../Socials";
import GameSelection from "../GameSelection";
import styles from "../../../../styles/beACoach/profile/gameLink.module.css";

const GameLink = () => {
  const [coachGames, setCoachGames] = useState([]);
  const [isSelected, setIsSelected] = useState();

  const [twitch, setTwitch] = useState();
  const [instagram, setInstagram] = useState();
  const [youtube, setYoutube] = useState();
  const [tikTok, setTiktok] = useState();
  const [x, setX] = useState();

  function handleSocials(event) {
    if (event.name === "Twitch") {
      setTwitch(event.value);
    } else if (event.name === "Instagram") {
      setInstagram(event.value);
    } else if (event.name === "Youtube") {
      setYoutube(event.value);
    } else if (event.name === "TikTok") {
      setTiktok(event.value);
    } else if (event.name === "X") {
      setX(event.value);
    }
  }
  useEffect(() => {}, [twitch, instagram, youtube, tikTok, x]);
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
          <Socials name="Twitch" link="www.hallo.de" setInput={handleSocials} />
          <Socials
            name="Youtube"
            link="www.hallo.de"
            setInput={handleSocials}
          />
          <Socials
            name="Instagram"
            link="www.hallo.de"
            setInput={handleSocials}
          />
          <Socials name="TikTok" link="www.hallo.de" setInput={handleSocials} />
          <Socials name="X" link="www.hallo.de" setInput={handleSocials} />
        </div>
      </div>
    </div>
  );
};

export default GameLink;
