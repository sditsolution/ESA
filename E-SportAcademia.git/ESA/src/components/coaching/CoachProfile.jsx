import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import image from "../../assets/pictures/NowayExample.png";
import styles from "../../styles/coaching/coachProfile.module.css";

const CoachProfile = () => {
  const navigate = useNavigate();
  const test = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Profile</h3>
        <button onClick={() => console.log(test)}>dasdasdas</button>
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
            onClick={() => navigate(`/coaches/${test.coachname}/courses`)}
          >
            View Course(10)
          </button>
          <button className="primaryBtn"> report</button>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
