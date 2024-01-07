import React from "react";
import styles from "../styles/impressum/impressum.module.css";

const Impressum = () => {
  return (
    <div className={styles.container}>
      <h2 style={{ marginLeft: "1rem" }}>Impressum</h2>
      <div className={styles.content}>
        <h3>Unternehmen</h3>
        <div style={{ display: "flex" }}>
          <div className={styles.enterprise}>
            <p>Inhaber: </p>
            <p>Anschrift:</p>
            <p>Ort: </p>
            <p>Telefon: </p>
            <p>USTNummer: </p>
          </div>
          <div className={styles.enterprise}>
            <p>Dennis Reinholz</p>
            <p>Wolfgang-Heinz-Straße 40</p>
            <p>13125 Berlin</p>
            <p>01738786257</p>
            <p>65489643</p>
          </div>
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
