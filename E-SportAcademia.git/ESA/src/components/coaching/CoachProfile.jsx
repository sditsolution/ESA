import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import image from "../../assets/pictures/NowayExample.png";
import styles from "../../styles/coaching/coachProfile.module.css";
import { SocialIcon } from "react-social-icons";
import placeholer from "../../assets/pictures/ProfilePlaceholder.png";
import StarRating from "../../ui/StarRating";

const CoachProfile = () => {
  const navigate = useNavigate();

  const [coaching, setCoaching] = useState([]);
  const [coachInfo, setCoachInfo] = useState();
  const { coachname: coachid } = useParams();

  const getCoaching = async () => {
    const response = await fetch(
      `http://localhost:3001/getCoaching?userID=${coachid}/courses`,
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
  const getCoachInformation = async () => {
    const response = await fetch(
      `http://localhost:3001/getCoachInformation?userID=${coachid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const result = await response.json();
    setCoachInfo(result[0]);
  };
  useEffect(() => {
    getCoaching();
    getCoachInformation();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{coachInfo != undefined ? coachInfo.INGAMENAME : "Profile"}</h3>
      </div>
      {coachInfo !== undefined ? (
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.containerImg}>
              <img
                src={image != undefined ? placeholer : coachInfo.IMAGE}
                alt="coachpic"
                className={styles.img}
              />
              <div className={styles.stars}>
                <StarRating size={20} />
              </div>
            </div>
          </div>
          {/* Sterne (Bewertung) */}
          <div className={styles.containerText}>
            <p>{coachInfo.DESCRIPTION}</p>
          </div>
          <div className={styles.buttomContainer}>
            <div className={styles.socialsContainer}>
              <SocialIcon
                network="instagram"
                url={coachInfo.INSTAGRAM}
                style={{ height: "2rem", width: "2rem" }}
              />
              <SocialIcon
                network="youtube"
                url={coachInfo.YOUTUBE}
                style={{ height: "2rem", width: "2rem" }}
              />
              <SocialIcon
                network="twitter"
                url={coachInfo.TWITTERX}
                style={{ height: "2rem", width: "2rem" }}
              />
              <SocialIcon
                network="tiktok"
                url={coachInfo.TIKTOK}
                style={{ height: "2rem", width: "2rem" }}
              />
              <SocialIcon
                network="twitch"
                url={coachInfo.TWITCH}
                style={{ height: "2rem", width: "2rem" }}
              />
            </div>

            <div className={styles.containerButton}>
              <button
                className="primaryBtn"
                onClick={() => navigate(`/coaches/${coachid}/courses`)}
              >
                View Course ({coaching.length})
              </button>
              {/* <button className="primaryBtn"> report</button> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CoachProfile;
