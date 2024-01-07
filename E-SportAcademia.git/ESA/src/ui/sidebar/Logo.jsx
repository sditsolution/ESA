import React from "react";
import styles from "../../styles/ui/sidebar/logo.module.css";
import logo from "../../assets/pictures/2.png";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={logo} alt="ESPORTS-ACADEMIA" />
    </div>
  );
};

export default Logo;
