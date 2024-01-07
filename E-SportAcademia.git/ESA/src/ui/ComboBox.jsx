import React from "react";
import styles from "../styles/ui/combobox.module.css";

const ComboBox = () => {
  return (
    <select className={styles.comboBox}>
      <option>search</option>
      <option value="mmo">MMO</option>
      <option value="rpg">RPG</option>
      <option value="moba">MOA</option>
    </select>
  );
};

export default ComboBox;
