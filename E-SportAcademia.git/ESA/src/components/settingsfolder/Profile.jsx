import React, { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Personals from "./Personals";
import styles from "../../styles/settings/profile.module.css";
import picture from "../../assets/pictures/NowayExample.png";

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
            <HiOutlinePencilSquare className={styles.editIcon} />
          ) : (
            <img
              src={picture}
              alt="profilpicture"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.personals}>
          <Personals label="Name" />
          <Personals label="Lastname" />
          <Personals label="Date of brith" />
          {/* Datefield : https://mui.com/x/react-date-pickers/date-field/*/}
          <Personals label="Gender" />
        </div>
        <div className={styles.personals}>
          <Personals label="Phone" />
          <Personals label="Adress" />
          <Personals label="PLZ" />
          <Personals label="country" />
          <div className={styles.btnContainer}>
            <button className="primaryBtn">Save</button>
            <button className="primaryBtn">Discard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
