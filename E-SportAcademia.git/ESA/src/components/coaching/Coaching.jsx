import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/coaching/Coaching.module.css";
import Games from "../games/Games.jsx";
import Spinner from "../../ui/Spinner.jsx";
import Profilplaceholder from "../../assets/pictures/ProfilePlaceholder.png";

// eslint-disable-next-line react/prop-types
const Coaching = ({ onHandleNavigation }) => {
  // hier daten fetchen und aufliste
  const [gamesData, setGamesData] = useState([]);
  const [kategory, setKategory] = useState("ALL");
  const [resultKategory, setResultKategory] = useState();
  const [selection, setSelection] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let allIndex;

  const getGames = async () => {
    const response = await fetch(`http://localhost:3001/getGames`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });
    const result = await response.json();
    setGamesData(result);
  };
  function getSelection(result) {
    //set for unique items
    const uniqueCategoriesMap = new Map();
    result.forEach((item) => {
      uniqueCategoriesMap.set(item.KATEGORYNAME, item.idgamekategory);
    });
    //add "All" at first place
    const uniqueCategoriesArray = [...Array.from(uniqueCategoriesMap)];
    uniqueCategoriesArray.push(["ALL", 0]);
    setSelection(uniqueCategoriesArray);
    allIndex = uniqueCategoriesArray.findIndex((item) => item[0] === "ALL");
  }
  const getGameKategory = async () => {
    const response = await fetch(`http://localhost:3001/getGameKategory`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });
    const result = await response.json();
    getSelection(result);
  };

  function handleChange(event) {
    setKategory(event);
    //MMO:0 MOBA:1 ACTION:2 MMORPG:3 ALL:4
    if (event === selection[0][0]) {
      setResultKategory(gamesData.filter((g) => g.KATEGORYID === 1));
    } else if (event === selection[1][0]) {
      setResultKategory(gamesData.filter((g) => g.KATEGORYID === 2));
    } else if (event === selection[2][0]) {
      setResultKategory(gamesData.filter((g) => g.KATEGORYID === 3));
    } else if (event === selection[3][0]) {
      setResultKategory(gamesData.filter((g) => g.KATEGORYID === 4));
    } else if (event === selection[4][0]) {
      setResultKategory(gamesData);
    }
  }
  useEffect(() => {
    getGameKategory();
    getGames();
  }, [resultKategory, selection]);

  return (
    <div className={styles.contentContainer}>
      <h2 className="header">Games</h2>
      <div className={styles.searchContainer}>
        <select
          value={kategory}
          className="combobox"
          onChange={(e) => handleChange(e.target.value)}
        >
          {selection !== undefined
            ? selection.map((kat, id) => (
                <option key={kat} value={kat[0]}>
                  {kat[0]}
                </option>
              ))
            : ""}
        </select>
      </div>
      <div className={styles.test}>
        {resultKategory != null
          ? resultKategory.map((game, key) => (
              <Games
                img={game.IMAGE == null ? Profilplaceholder : game.IMAGE}
                name={game.NAME}
                key={game.idgame}
                gameId={game.idgame}
                onHandleNavigation={onHandleNavigation}
              />
            ))
          : gamesData != null
          ? gamesData.map((game, key) => (
              <Games
                img={game.IMAGE == null ? Profilplaceholder : game.IMAGE}
                name={game.NAME}
                key={game.idgame}
                gameId={game.idgame}
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
