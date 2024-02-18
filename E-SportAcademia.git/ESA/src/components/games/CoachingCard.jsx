import React, { useEffect, useState } from "react";
import styles from "../../styles/games/coachingCard.module.css";
import {
  formatDateFromMySQL,
  extractTimeFromMySQL,
} from "../../utilities/dateUtils.js";
import imgPlaceholder from "../../assets/pictures/lolPlaceholder.png";
import { useNavigate } from "react-router-dom";
import PurchaseModal from "../common/modals/PurchaseModal.jsx";
import PurchaseCoachingForm from "./purchase/PurchaseCoachingForm.jsx";
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
  coachid,
  coachingid,
}) => {
  const [isModalOpen, setIsModalOpen] = useState();
  const navigate = useNavigate();
  function directCoach() {
    navigate(`/coaches/${coachid}`);
  }
  useEffect(() => {}, [bookedparticipant]);
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
        <button className="secondaryBtn" onClick={() => directCoach()}>
          View Coach
        </button>
        <button className="primaryBtn" onClick={() => setIsModalOpen(true)}>
          Book now
        </button>
      </div>
      {isModalOpen && (
        <PurchaseModal onClose={() => setIsModalOpen(false)}>
          <PurchaseCoachingForm
            coachingid={coachingid}
            onCloseModal={() => setIsModalOpen(false)}
          />
        </PurchaseModal>
      )}
    </div>
  );
};

export default CoachingCard;
