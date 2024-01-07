import React from "react";
import image from "../../assets/pictures/NowayExample.png";
import styles from "../../styles/coaching/coachProfile.module.css";

const CoachProfile = () => {
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
            <ul>
              <li>Instagram</li>
              <li>Twitch</li>
              <li>Youtube</li>
            </ul>
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
            dolor sit amet.
          </p>
        </div>
        <div className={styles.containerButton}>
          <button className="primaryBtn"> report</button>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
