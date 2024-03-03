import React from "react";
import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import styles from "../../../styles/beACoach/gameSelection.module.css";

const GameSelection = ({
  isSelected,
  setIsSelected,
  coachGames,
  setCoachGames,
}) => {
  const [games, setGames] = useState([]);
  const [rank, setRank] = useState();

  function getGameID(Name) {
    const id = games.filter((g) => g.NAME === Name);
    const gameid = id[0].idgame;
    if (gameid != null) {
      return gameid;
    }
  }
  const handleSelection = (event) => {
    setIsSelected(event);
  };
  function addGame() {
    if (isSelected === undefined) {
      setIsSelected(games[0].NAME);
    }
    if (
      rank !== undefined &&
      rank != null &&
      rank.length > 0 &&
      isSelected !== undefined
    ) {
      const game = { id: getGameID(isSelected), name: isSelected, rang: rank };
      if (!isIdAlreadyPresent(game.id, coachGames)) {
        setCoachGames((prevGames) => [...prevGames, game]);
      } else {
        toast.error("Game already added.");
      }
    } else {
      toast.error("Select your current rang to add this game");
    }
  }
  function isIdAlreadyPresent(id, gamesArray) {
    return gamesArray.some((game) => game.id === id);
  }
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
  function handleInput(event) {
    setRank(event);
  }
  useEffect(() => {
    getGames();
  }, []);
  return (
    <>
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
    </>
  );
};

export default GameSelection;
