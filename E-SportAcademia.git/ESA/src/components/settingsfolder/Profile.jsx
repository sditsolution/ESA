import React, { useState } from "react";
import Personals from "./Personals";
import styles from "../../styles/settings/profile.module.css";
import EditIcon from "@mui/icons-material/Edit";
import picture from "../../assets/pictures/NowayExample.png";
const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.containerContent}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1>Profile</h1>
        </div>
        <div
          className={styles.profileContainer}
          onClick={() => console.log("change")}
        >
          <div
            className={styles.profile}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <EditIcon className={styles.editIcon} />
            ) : (
              <img src={picture} alt="profilpicture" />
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className={styles.personals}>
            <Personals label="Name" />
            <Personals label="Lastname" />
            <Personals label="Day of Brith" />
            <Personals label="Gender" />
          </div>
          <div className={styles.personals}>
            <Personals label="Phone" />
            <Personals label="Adress" />
            <Personals label="PLZ" />
            <Personals label="country" />
            <div className={styles.btnContainer}>
              <button className={styles.btn}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
