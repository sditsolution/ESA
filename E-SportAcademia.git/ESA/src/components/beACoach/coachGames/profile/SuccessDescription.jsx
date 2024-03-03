import React from "react";
import Success from "./Success";
import Description from "./Description";
import styles from "../../../../styles/beACoach/profile/successDescription.module.css";

const SuccessDescription = () => {
  return (
    <div className={styles.container}>
      <Success />
      <Description />
    </div>
  );
};

export default SuccessDescription;
