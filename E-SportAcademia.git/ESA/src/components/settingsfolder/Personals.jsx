import React from "react";
import styles from "../../styles/settings/personals.module.css";
import TextField from "@mui/material/TextField";

const Personals = ({ label }) => {
  return (
    <div className={styles.container}>
      <div>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          size="big"
          style={{ width: "20rem", fontSize: "100px" }}
          className={styles.textField}
        />
      </div>
    </div>
  );
};

export default Personals;
