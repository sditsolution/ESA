import React from "react";
import { useState } from "react";
import styles from "../../styles/beACoach/container.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Container = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else setIsOpen(true);
  }
  return (
    <div className={isOpen ? styles.container : styles.containerClose}>
      <div className={styles.header} onClick={handleOpen}>
        <h1>{header}</h1>
        <div>
          {isOpen ? (
            <RemoveIcon style={{ fontSize: "2.5rem" }} />
          ) : (
            <AddIcon style={{ fontSize: "2.5rem" }} />
          )}
        </div>
      </div>
      <div className={styles.contentText}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Container;
