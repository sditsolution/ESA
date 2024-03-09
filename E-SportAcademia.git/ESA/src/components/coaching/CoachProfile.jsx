import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import image from "../../assets/pictures/NowayExample.png";
import styles from "../../styles/coaching/coachProfile.module.css";

const CoachProfile = () => {
  const navigate = useNavigate();

  const [coaching, setCoaching] = useState([]);
  const { coachname } = useParams();

  const getCoaching = async () => {
    const response = await fetch(
      `http://localhost:3001/getCoaching?userID=${coachname}/courses`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const result = await response.json();
    setCoaching(result);
  };
  useEffect(() => {
    getCoaching();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Profile</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.containerImg}>
            <img src={image} alt="coachpic" className={styles.img} />
          </div>
          <div className={styles.containerSocials}>
            <p style={{ fontWeight: "bold" }}>Socialmedia</p>
            <ul>
              <li>Instagram</li>
              <li>Twitch</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className={styles.rewards}>
            <p style={{ fontWeight: "bold" }}>Erfolge</p>
          </div>
        </div>
        <div className={styles.stars}>Stars</div>
        {/* Sterne (Bewertung) */}
        <div className={styles.containerText}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={styles.containerButton}>
          <button
            className="primaryBtn"
            onClick={() => navigate(`/coaches/${coachname}/courses`)}
          >
            View Course ({coaching.length})
          </button>
          <button className="primaryBtn"> report</button>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
