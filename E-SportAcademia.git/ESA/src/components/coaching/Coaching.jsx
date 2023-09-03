import React from "react";
import styles from "../../styles/coaching/Coaching.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const Coaching = () => {
  const data = [
    "America",
    "India",
    "Australia",
    "Argentina",
    "Ireland",
    "Indonesia",
    "Iceland",
    "Japan",
  ];

  return (
    <div className={styles.header}>
      <header>Coaching</header>
      <div className={styles.container}>
        <div className={styles.gaming}>
          <div className={styles.searchCb}>
            <select name="games" className={styles.gamingCb}>
              <option value="lol">League of Legends</option>
              <option value="cs">Counter Strike</option>
              <option value="valo">Valorant</option>
              <option value="wow">World of Warcarft</option>
            </select>
            <input
              type="text"
              className={styles.search}
              placeholder="Search..."
            />
          </div>
          <div className={styles.coachContainer}>
            <p>Noway4you</p>
          </div>
        </div>
        <div className={styles.selectedCoach}>
          {/* <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs aria-label="basic tabs example">
                <Tab label="Item One" />
                <Tab label="Item Two" />
              </Tabs>
            </Box>
          </Box> */}
          <div className={styles.selectedCoachHeader}>
            {/* <img src="" alt="Picture" className={styles.coachImg} /> */}
            <div className={styles.coachImg}>
              <InsertPhotoIcon style={{ fontSize: 200 }} />
            </div>
            <div>
              <h1>Noway4you</h1>
              <p>Frederik Stürmer</p>
            </div>
          </div>
          <p className={styles.selectedCoachDescription}>
            {/* 150Words */}
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
          <div className={styles.selectCoachbuttons}>
            <button className={styles.selectedCoachButton}>Report</button>
            <button className={styles.selectedCoachButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
