import React, { useState } from "react";
import Personals from "./Personals";
import styles from "../../styles/settings/profile.module.css";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Profile</h1>
      </div>
      <div className={styles.profileContainer}>
        <div
          className={styles.profile}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {" "}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className={styles.personals}>
          <Personals label="Name" />
          <Personals label="Lastname" />
          <Personals label="Phone" />

          <Personals label="Gender" />
          <Personals label="Email" />
        </div>
        <div className={styles.personals}>
          <Personals label="Day of Brith" />
          <Personals label="Adress" />
          <Personals label="PLZ" />
          <Personals label="country" />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className="primaryBtn">Save</button>
      </div>
    </div>
  );
};

export default Profile;
