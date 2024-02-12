import React, { useState, useEffect } from "react";
import styles from "../../styles/settings/changePasswordForm.module.css";
import { TextField } from "@mui/material";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";

const ChangePasswordForm = ({ onCloseModal }) => {
  const [userData, setUserData] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();

  function handleOnChange(event) {
    if (event.name === "oldPassword") {
      setOldPassword(event.value);
    } else if (event.name === "newPassword") {
      setNewPassword(event.value);
    } else if (event.name === "confirmedPassword") {
      setConfirmedPassword(event.value);
    }
  }

  function changePassword() {
    bcrypt.compare(oldPassword, userData.PASSWORD, function (err, isMatch) {
      if (err) {
        toast.error("Old password is wrong");
        setNewPassword("");
        setConfirmedPassword("");
      } else if (isMatch) {
        if (newPassword === confirmedPassword) {
          updateUserPassword();
        } else {
          toast.error("New passwords are not equal");
        }
      }
    });
  }

  const updateUserPassword = async () => {
    let cryptedPassword = bcrypt.hashSync(confirmedPassword, 10);
    let userID = userData.USER_ID;
    return await fetch(`http://localhost:3001/updateUserPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //mode:"corse",
      cache: "no-cache",
      body: JSON.stringify({
        userID,
        cryptedPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.serverStatus === 2) {
          toast.success("Password successfully changed");
          onCloseModal();
        } else {
          toast.error("Password change failed");
        }
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen der Benutzerdaten:", error)
      );
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("userContext");
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>Change password</h2>
      <div className={styles.contentContainer}>
        <div className={styles.contentRow}>
          <TextField
            id="outlined-basic"
            name="oldPassword"
            label={"old password"}
            variant="outlined"
            size="small"
            type="password"
            style={{ width: "19rem", marginTop: "1rem" }}
            className={styles.textField}
            onChange={(e) => handleOnChange(e.target)}
          />
          <TextField
            id="outlined-basic"
            label={"new password"}
            name="newPassword"
            variant="outlined"
            size="small"
            style={{ width: "19rem", marginTop: "1rem" }}
            type="password"
            onChange={(e) => handleOnChange(e.target)}
            className={styles.textField}
          />
          <TextField
            id="outlined-basic"
            label={"confirm new password"}
            name="confirmedPassword"
            variant="outlined"
            size="small"
            type="password"
            style={{ width: "19rem", marginTop: "1rem" }}
            className={styles.textField}
            onChange={(e) => handleOnChange(e.target)}
          />
          <div className={styles.buttonContainer}>
            <button
              className="secondaryBtn"
              style={{ marginTop: "2rem" }}
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              className="primaryBtn"
              style={{ marginTop: "2rem" }}
              onClick={changePassword}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
