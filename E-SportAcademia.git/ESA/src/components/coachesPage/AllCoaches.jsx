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
import styles from "../../styles/coachPages/allCoaches.module.css";
import NoCoach from "./NoCoach.jsx";
import Profilplaceholder from "../../assets/pictures/ProfilePlaceholder.png";

const AllCoaches = ({ onHandleCoach, setCoach }) => {
  const [kategory, setKategory] = useState();
  const [gameData, setGameData] = useState();
  const [coaches, setCoaches] = useState();
  const [resultKategory, setResultKategory] = useState();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [selection, setSelection] = useState();

  function handleCoachView(coach) {
    navigate(`/coaches/${coach.idcoach}`);
  }

  const getCoaches = async () => {
    const response = await fetch(`http://localhost:3001/getcoaches`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });
    const result = await response.json();
    setCoaches(result);
  };

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
    getCoaches();
  }, [search, resultKategory]);

  return (
    <div className={styles.container}>
      <h1>Coaches</h1>
      <div className={styles.searchCoach}>
        <input
          className="searchbox"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div className={styles.coachProfiles}>
        {coaches !== undefined && coaches !== null ? (
          coaches.map((c) => (
            <div
              className={styles.coachViewContainer}
              onClick={() => handleCoachView(c)}
              key={c.idcoach}
            >
              {/* Counter for subscriber */}
              <CoachView
                name={c.INGAMENAME}
                img={c.IMAGE == null ? Profilplaceholder : c.IMAGE}
                subs={0}
              />
            </div>
          ))
        ) : (
          <NoCoach />
        )}
      </div>
    </div>
  );
};

export default AllCoaches;
