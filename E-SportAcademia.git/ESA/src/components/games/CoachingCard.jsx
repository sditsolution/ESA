import React from "react";
import styles from "../../styles/games/coachingCard.module.css";
import {
  formatDateFromMySQL,
  extractTimeFromMySQL,
} from "../../utilities/dateUtils.js";
import imgPlaceholder from "../../assets/pictures/lolPlaceholder.png";

const CoachingCard = ({
  title,
  img,
  coach,
  date,
  start,
  end,
  participant,
  price,
  description,
  bookedparticipant,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4>{title}</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img
            src={img == null ? imgPlaceholder : img}
            alt="Hier kommt ein bild rein"
          />
        </div>
        <div className={styles.coachingDetail}>
          <ul>
            <li>{coach}</li>
            <li>{formatDateFromMySQL(date)}</li>
            <li>
              {extractTimeFromMySQL(start)} <span>-</span>{" "}
              {extractTimeFromMySQL(end)}
            </li>
            <li>
              Places: {bookedparticipant == null ? 0 : bookedparticipant}/
              {participant}
            </li>
            <li>{price} €</li>
          </ul>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className="secondaryBtn">View Coach</button>
        <button className="primaryBtn">Book now</button>
      </div>
    </div>
  );
};

export default CoachingCard;
