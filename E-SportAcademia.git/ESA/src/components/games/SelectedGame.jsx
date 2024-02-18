import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/games/selectedGame.module.css";
import { useParams } from "react-router-dom";
import CoachingCard from "./CoachingCard";

const SelectedGame = () => {
  const [coaching, setCoaching] = useState();
  const gameid = useParams();

  const getCoaching = async () => {
    const response = await fetch(`http://localhost:3001/getCoachingData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({ game: gameid }),
    });
    const result = await response.json();
    setCoaching(result);
  };

  useEffect(() => {
    getCoaching();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{gameid.gameid}</h2>
      <div className={styles.contentContainer}>
        {coaching !== undefined && coaching !== null && coaching.length > 0 ? (
          coaching.map((c) => (
            <CoachingCard
              key={c.idcoaching}
              coachingid={c.idcoaching}
              coachid={c.idcoach}
              title={c.TITLE}
              img={c.IMG}
              coach={c.INGAMENAME}
              date={c.DATE}
              start={c.START}
              end={c.END}
              participant={c.PARTICIPANT}
              bookedparticipant={c.BOOKEDPATICIPANT}
              price={c.PRICE}
              description={c.DESCRIPTION}
            />
          ))
        ) : (
          <p>No coaching</p>
        )}
      </div>
    </div>
  );
};

export default SelectedGame;
