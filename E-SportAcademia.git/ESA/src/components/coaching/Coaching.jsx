import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/coaching/Coaching.module.css";
import Games from "./Games";
import img from "../../assets/pictures/lol.png";
import axios from "axios";

const Coaching = ({ onHandleNavigation }) => {
  // hier daten fetchen und aufliste
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let nameTest = "leagueofLegends";

  // Define your RAWG API key and endpoint
  const api_key = "b5cfcb0f1b474eafb34453ca0ec9fa6f";
  const endpoint = "games";

  // Define any query parameters (if needed)
  const params = {
    key: api_key,
    page: "2",
    page_size: "50",
    // Additional parameters (e.g., 'page', 'search', 'platforms', etc.)
  };
  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/${endpoint}`, { params })
      .then((response) => {
        setGamesData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <header>Games</header>
      <div className={styles.containerSearch}>
        <div className={styles.gaming}>
          <div className={styles.searchKategory}>
            <select className={styles.kategoryCB}>
              <option>search</option>
              <option value="mmo">MMO</option>
              <option value="rpg">RPG</option>
              <option value="moba">MOA</option>
            </select>
          </div>
          <div className={styles.sortby}>
            <label className={styles.sortbyLabel}>sort by</label>
            <select className={styles.kategoryCB}>
              <option>Count coaches</option>
              <option>Name</option>
            </select>
          </div>
        </div>
        <div className={styles.containerGames}>
          <Games
            img={img}
            name={"League of Legends"}
            numberCoaches={100}
            onHandleNavigation={onHandleNavigation}
          />

          {gamesData != null
            ? gamesData.map((game, key) => (
                <Games
                  img={game.background_image}
                  name={game.name}
                  key={game.id}
                  onHandleNavigation={onHandleNavigation}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Coaching;
