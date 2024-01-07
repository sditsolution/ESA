import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/coaching/Coaching.module.css";
import Games from "../games/Games.jsx";
import img from "../../assets/pictures/lol.png";
import axios from "axios";
import ComboBox from "../../ui/ComboBox.jsx";
import { Search } from "@mui/icons-material";
import SearchBox from "../../ui/SearchBox.jsx";
import Spinner from "../../ui/Spinner.jsx";

// eslint-disable-next-line react/prop-types
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

  //funktioniert noch nicht
  if (loading) {
    console.log(loading);
    return <Spinner />;
  }

  return (
    <div className={styles.contentContainer}>
      <h1 className="header">Games</h1>
      <div className={styles.searchContainer}>
        <ComboBox />
        <SearchBox />
      </div>
      <div className={styles.test}>
        {gamesData != null
          ? gamesData.map((game, key) => (
              <Games
                img={game.background_image}
                name={game.name}
                key={game.id}
                onHandleNavigation={onHandleNavigation}
                numberCoaches={0}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Coaching;
