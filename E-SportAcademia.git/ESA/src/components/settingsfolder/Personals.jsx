import React, { useState } from "react";
import styles from "../../styles/settings/personals.module.css";
import TextField from "@mui/material/TextField";

const Personals = ({ label, value, disable }) => {
  const [textFieldValue, setTextFieldValue] = useState("");

  function handleChange(event) {
    setTextFieldValue(event);
  }
  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
        style={{ width: "20rem" }}
        className={styles.textField}
        defaultValue={value ?? textFieldValue}
        onChange={(e) => handleChange(e.target.value)}
        disabled={disable}
      />
    </div>
  );
};

export default Personals;
