import React from "react";
import styles from "../../styles/settings/personals.module.css";
import TextField from "@mui/material/TextField";

const Personals = ({ label }) => {
  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
        style={{ width: "20rem" }}
        className={styles.textField}
      />
    </div>
  );
};

export default Personals;
