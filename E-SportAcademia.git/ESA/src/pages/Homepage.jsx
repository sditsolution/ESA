import React, { useEffect, useState } from "react";
import styles from "../styles/Homepage.module.css";
import Login from "../components/Login.jsx";

const Homepage = () => {
  const [items, setItems] = useState([]);

  return (
    <div className={styles.app}>
      <div className={styles.containerLogin}>
        <Login />
      </div>
    </div>
  );
};

export default Homepage;
