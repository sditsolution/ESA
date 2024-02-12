import React, { useEffect, useState } from "react";
import styles from "../styles/changeEmail.module.css";
import { TextField } from "@mui/material";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const ChangeEmail = () => {
  //USEPARAMS TOKEN holen und mit der Datenbank abgleichen
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [newEmail, setNewEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [enableButton, setEnableButton] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [redirection, setRedirection] = useState(false);

  function handleNewEmailChange(event) {
    setNewEmail(event.value);
  }
  function handleConfirmedEmailChange(event) {
    setConfirmedEmail(event.value);
  }

  const changeEmail = async () => {
    if (ValidateEmail(confirmedEmail)) {
      return await fetch(`http://localhost:3001/updateEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //mode:"corse",
        cache: "no-cache",
        body: JSON.stringify({
          token,
          confirmedEmail,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.serverStatus === 2) {
            toast.success("Email changed confirmed");
            setRedirection(true);
            setNewEmail("");
            setConfirmedEmail("");
          }
        })
        .catch((error) =>
          console.error("Fehler beim Abrufen der Benutzerdaten:", error)
        );
    }
  };
  const ValidateEmail = async (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    if (email.match(validRegex)) {
      setValidateEmail(true);
      return true;
    } else {
      setValidateEmail(false);
      return false;
    }
  };
  function CheckEmail() {
    if (
      ValidateEmail(confirmedEmail) &&
      ValidateEmail(newEmail) &&
      confirmedEmail === newEmail &&
      newEmail.trim() !== "" &&
      confirmedEmail.trim() !== ""
    ) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }

  useEffect(() => {
    CheckEmail();
  }, [newEmail, confirmedEmail]);

  return (
    <div className={styles.container}>
      <h2>ESPORTS ACADEMIA</h2>
      <h3>Email change</h3>
      <div className={styles.contentContainer}>
        <TextField
          id="outlined-basic"
          label={"new Email"}
          name="newEmail"
          variant="outlined"
          size="small"
          style={{ width: "20rem", marginTop: "2rem" }}
          className={styles.textField}
          onChange={(e) => handleNewEmailChange(e.target)}
          disabled={false}
        />
        <TextField
          id="outlined-basic"
          label={"Confirm email"}
          name="confirmedEmail"
          variant="outlined"
          size="small"
          style={{ width: "20rem", marginTop: "2rem" }}
          className={styles.textField}
          onChange={(e) => handleConfirmedEmailChange(e.target)}
          disabled={false}
        />
      </div>
      {redirection && (
        <a href="http://localhost:3000/login">
          Go to login
          <span>
            <HiArrowRightOnRectangle />
          </span>
        </a>
      )}

      <div className={styles.buttonContainer}>
        <button
          className={enableButton ? "primaryBtn" : "primayBtnDisabled"}
          onClick={changeEmail}
          disabled={!enableButton}
        >
          Save email
        </button>
      </div>
    </div>
  );
};

export default ChangeEmail;
