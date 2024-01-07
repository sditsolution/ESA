import React, { useEffect } from "react";
import { useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import CoachView from "./CoachView.jsx";
import "../../styles/app.css";
import exampleImg from "../../assets/pictures/NowayExample.png";
import styles from "../../styles/coachPages/allCoaches.module.css";
import { IndeterminateCheckBox } from "@mui/icons-material";
import searchBoxStyle from "../../styles/ui/searchbox.module.css";
import ComboBox from "../../ui/ComboBox.jsx";
import NoCoach from "./NoCoach.jsx";

const AllCoaches = ({ onHandleCoach, setCoach }) => {
  const [kategory, setKategory] = useState();
  const [resultKategory, setResultKategory] = useState();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const coaches = [
    {
      id: 1,
      name: "Noway4you",
      game: "League of Legends",
      img: exampleImg,
    },
    { id: 2, name: "Dennis", img: exampleImg, game: "World of Warcraft" },
    { id: 3, name: "Luisa", img: exampleImg, game: "Clash of Clans" },
    {
      id: 4,
      name: "Pascal",
      img: exampleImg,
      game: "Valorant",
    },
    { id: 6, name: "Marco", img: exampleImg, game: "World of Warcraft" },

    { id: 7, name: "Marco", img: exampleImg, game: "World of Warcraft" },

    { id: 8, name: "Marco", img: exampleImg, game: "World of Warcraft" },

    { id: 9, name: "Marco", img: exampleImg, game: "World of Warcraft" },

    { id: 10, name: "Marco", img: exampleImg, game: "World of Warcraft" },

    { id: 11, name: "Marco", img: exampleImg, game: "World of Warcraft" },
  ];

  function handleCoachView(coach) {
    navigate(`/coaches/${coach.name}`);
  }
  function handleChange(event) {
    setKategory(event);
    if (event === "Valorant") {
      setResultKategory(coaches.filter((c) => c.game === "Valorant"));
    } else if (event === "All Games") {
      setResultKategory(coaches);
    } else if (event === "League of Legends") {
      setResultKategory(coaches.filter((c) => c.game === "League of Legends"));
    } else if (event === "World of Warcraft") {
      setResultKategory(coaches.filter((c) => c.game === "World of Warcraft"));
    } else if (event === "Clash of Clans") {
      setResultKategory(coaches.filter((c) => c.game === "Clash of Clans"));
    } else if (event === "Counter Strike 2") {
      setResultKategory(coaches.filter((c) => c.game === "Counter Strike 2"));
    } else if (event === "World of Tanks") {
      setResultKategory(coaches.filter((c) => c.game === "World of Tanks"));
    } else if (event === "Clash Royal") {
      setResultKategory(coaches.filter((c) => c.game === "Clash Royal"));
    }
  }
  function handleSearch(e) {
    let filteredBySearch;
    e.preventDefault();
    setSearch(e.target.value);

    if (search.length === 1) {
      //TODO: Search are never 0, no reset to list
      filteredBySearch = resultKategory;
    } else {
      filteredBySearch = resultKategory.filter((c) =>
        c.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
    setResultKategory(filteredBySearch);
  }
  useEffect(() => {
    if (resultKategory === undefined) {
      setResultKategory(coaches);
    }
  }, [search, resultKategory]);

  return (
    <div className={styles.container}>
      <h1>Coaches</h1>
      <div className={styles.searchCoach}>
        <select
          className="combobox"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="All Games">All Games</option>
          <option value="League of Legends">League of Legends</option>
          <option value="Valorant">Valorant</option>
          <option value="Clash of Clans">Clash of Clans</option>
          <option value="Counter Strike 2">Counter Strike 2</option>
          <option value="World of Warcraft">World of Warcarft</option>
          <option value="World of Tanks">World of Tanks</option>
          <option value="Clash of Clans">Clash Royal</option>
        </select>
        <input
          className="searchbox"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div className={styles.coachProfiles}>
        {resultKategory !== undefined ? (
          resultKategory.map((c) => (
            <>
              {" "}
              <div
                className={styles.coachViewContainer}
                onClick={() => handleCoachView(c)}
              >
                <CoachView key={c.id} name={c.name} img={c.img} />
              </div>
            </>
          ))
        ) : (
          <NoCoach />
        )}
      </div>
    </div>
  );
};

export default AllCoaches;
