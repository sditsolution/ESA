import React, { useEffect, useState } from "react";
import styles from "../../styles/beACoach/profile.module.css";
import { HiOutlinePlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import CoachGames from "./coachGames/CoachGames";
const Profile = () => {
  const [games, setGames] = useState([]);
  const [coachGames, setCoachGames] = useState([]);
  const [isSelected, setIsSelected] = useState();
  const [input, setInput] = useState();

  function getGameID(Name) {
    const id = games.filter((g) => g.NAME === Name);
    const { idgame } = id;
    console.log(idgame);
    // if (idgame != null) {
    //   return idgame;
    // }
  }
  function addGame() {
    console.log(isSelected);
    if (isSelected === undefined) {
      setIsSelected(games[0].NAME);
    }
    if (input !== undefined && input != null && isSelected !== undefined) {
      const test = { id: getGameID(isSelected), name: isSelected, rang: input };
      console.log(test);
      setCoachGames(...games, test);
    } else {
      toast.error("Select your current rang to add this game");
    }
  }
  const handleSelection = (event) => {
    setIsSelected(event);
  };
  const handleInput = (event) => {
    setInput(event);
  };
  const getGames = async () => {
    try {
      return await fetch(`http://localhost:3001/getgames`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      })
        .then((response) => response.json())
        .then((data) => {
          setGames(data);
        });
    } catch (error) {
      toast.error("Could not get games");
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <div className={styles.headerContainer}>
          <h3>Game information</h3>
        </div>
        <div className={styles.gameSelection}>
          <div className={styles.selectionContainer}>
            <HiOutlinePlus
              className={styles.addSelection}
              onClick={() => addGame()}
            />
            <select
              className={styles.selection}
              onChange={(e) => handleSelection(e.target.value)}
            >
              {games !== undefined
                ? games.map((g) => (
                    <option key={g.idgame} value={g.NAME}>
                      {g.NAME}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <input
            className={styles.inputRank}
            type="text"
            placeholder="current rang"
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <div>
          {coachGames != null
            ? coachGames.map((g) => (
                <CoachGames key={g} name={g.name} rang={g.rang} />
              ))
            : null}
        </div>
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
