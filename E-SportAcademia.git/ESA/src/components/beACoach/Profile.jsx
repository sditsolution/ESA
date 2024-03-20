import React, { useEffect, useState } from "react";
import styles from "../../styles/beACoach/profile.module.css";
import GameLink from "../beACoach/coachGames/profile/GameLink.jsx";
import Description from "./coachGames/profile/Description.jsx";
import toast from "react-hot-toast";
import BankAccount from "./coachGames/profile/BankAccount.jsx";
const Profile = () => {
  const [userData, setUserData] = useState();
  const [userDataLink, setUserDataLink] = useState();
  const [description, setDescription] = useState();
  const [twitch, setTwitch] = useState();
  const [youtube, setYoutube] = useState();
  const [instagram, setInstagram] = useState();
  const [tikTok, setTiktok] = useState();
  const [twitterX, setTwitterX] = useState();

  const UpdateProfile = async () => {
    let userID = userData.idcoach;
    return await fetch(`http://localhost:3001/updateProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        userID,
        description,
        twitch,
        youtube,
        instagram,
        tikTok,
        twitterX,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          toast.success(`Updated profile successfully`);
        } else if (data.serverStatus === -1) {
          toast.error("Failed update profile");
        }
      });
  };
  const getSocials = async (id) => {
    const { idcoach } = id;
    return await fetch(`http://localhost:3001/getSocials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        idcoach,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserDataLink(data[0]);
        setDescription(data[0].DESCRIPTION);
        setTwitch(data[0].TWITCH);
        setYoutube(data[0].YOUTUBE);
        setInstagram(data[0].INSTAGRAM);
        setTiktok(data[0].TIKTOK);
        setTwitterX(data[0].TWITTERX);
      });
  };
  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString !== undefined) {
      setUserData(JSON.parse(userDataString));
      getSocials(JSON.parse(userDataString));
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 style={{ marginLeft: "5rem" }}>Profile</h2>
      </div>
      <div className={styles.content}>
        <GameLink
          setTwitch={setTwitch}
          setYoutube={setYoutube}
          setInstagram={setInstagram}
          setTiktok={setTiktok}
          setTwitterX={setTwitterX}
          twitch={twitch}
          youtube={youtube}
          tikTok={tikTok}
          instagram={instagram}
          twitterX={twitterX}
        />
        <Description
          setDescription={setDescription}
          description={description}
        />
      </div>
      <div className={styles.bankContainer}>
        <BankAccount />
      </div>
      <div className={styles.helpContainer}>
        <div className={styles.buttonContainer}>
          <button className="secondaryBtn">Discard</button>
          <button className="primaryBtn" onClick={UpdateProfile}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
