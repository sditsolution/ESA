import React from "react";
import styles from "../../../styles/impressum/impressum.module.css";

const Impressum = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Impressum</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.enterprise}>
          {" "}
          <h3>Unternehmen</h3>
          <p>Inhaber: Dennis Reinholz</p>
          <p>Anschrift: Wolfgang-Heinz-Straße 40</p>
          <p>Ort: 13125 Berlin</p>
          <p>Telefon: 0173/8786257</p>
          <p>USTNummer: 65489643</p>
        </div>
        <div className={styles.service}>
          <h3>Service</h3>
          <p>Email: reinholz.dennis@gmx.de</p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
