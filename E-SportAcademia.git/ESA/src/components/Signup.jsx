import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./../styles/ui/signUp.module.css";
import TextField from "@mui/material/TextField";
import bcrypt from "bcryptjs";

const SignUp = () => {
  const [inGameName, setInGameName] = useState("");
  const [policy, setPolicy] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const navigate = useNavigate();

  function handleInGameName(e) {
    setInGameName(e);
  }
  function validateEmailState() {
    if (ValidateEmail(email)) {
      setValidateEmail(true);
      setSignIn(false);
    } else {
      setValidateEmail(false);
      setSignIn(true);
    }
  }
  function handlePolicy() {
    //false für isChecked und true für unChecked
    setPolicy((policy) => !policy);
  }
  function handleFirstname(e) {
    setFirstName(e);
  }
  function handleLastname(e) {
    setLastName(e);
  }
  function handleEmail(e) {
    setEmail(e);
  }
  function handlePassword(e) {
    setPassword(e);
  }
  function handleConfirmedPassword(e) {
    setConfirmedPassword(e);
  }
  const ValidateEmail = async (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    if (email.match(validRegex)) {
      setValidateEmail(false);
      return true;
    } else {
      setValidateEmail(true);
      return false;
    }
  };
  function handleSignIn() {
    if (
      inGameName.trim() !== "" &&
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      ValidateEmail(email) &&
      password.trim() !== "" &&
      confirmedPassword.trim() !== "" &&
      policy
    ) {
      if (password === confirmedPassword && !validateEmail) {
        setSignIn(true);
      } else {
        setSignIn(false);
      }
    } else {
      setSignIn(false);
    }
  }
  function restStates() {
    setInGameName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setConfirmedPassword("");
    setPassword("");
    setPolicy("");
  }
  const signUp = async () => {
    let auth = 0;
    let cryptedPassword = bcrypt.hashSync(password, 10);
    return await fetch(`http://localhost:3001/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //mode:"corse",
      cache: "no-cache",
      body: JSON.stringify({
        inGameName,
        firstName,
        lastName,
        email,
        cryptedPassword,
        auth,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          navigate("/login");
        }
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen der Benutzerdaten:", error)
      );
  };

  useEffect(
    function () {
      handleSignIn();
    },
    [
      inGameName,
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      policy,
      validateEmail,
    ]
  );
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h1>E-Sports Academia</h1>
          <h2>Sign Up</h2>
        </div>
        <div className={styles.profileInformation}>
          <TextField
            id="outlined-basic"
            label="In-Game name"
            variant="outlined"
            size="small"
            style={{ width: "23.5rem" }}
            onChange={(e) => {
              handleInGameName(e.target.value);
              handleSignIn();
            }}
            className={styles.nameInput}
          />
          <div className={styles.profileName}>
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              size="small"
              style={{ width: "11rem" }}
              onChange={(e) => {
                handleFirstname(e.target.value);
                handleSignIn();
              }}
              className={styles.nameInput}
            />
            <TextField
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              size="small"
              style={{ width: "11rem" }}
              onChange={(e) => {
                handleLastname(e.target.value);
                handleSignIn();
              }}
              className={styles.nameInput}
            />
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            error={validateEmail}
            style={{ width: "23.5rem", marginTop: "1rem" }}
            onChange={(e) => {
              handleEmail(e.target.value);
              validateEmailState();
              handleSignIn();
            }}
            className={styles.profilInput}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            type="password"
            style={{ width: "23.5rem", marginTop: "1rem" }}
            onChange={(e) => {
              handlePassword(e.target.value);
              handleSignIn();
            }}
            className={styles.profilInput}
          />
          <TextField
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
            size="small"
            type="password"
            style={{ width: "23.5rem", marginTop: "1rem" }}
            onChange={(e) => {
              handleConfirmedPassword(e.target.value);
              handleSignIn();
            }}
            className={styles.profilInput}
          />
        </div>
        <div className={styles.policy}>
          <input
            type="checkbox"
            checked={policy}
            onChange={(e) => {
              handlePolicy();
              handleSignIn();
            }}
          />
          <p>I accept the Terms of Use & Privacy Policy</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={signIn ? "primaryBtn" : "primayBtnDisabled"}
            onClick={() => signUp()}
          >
            Sign Up
          </button>
          <div style={{ marginTop: "1rem", fontSize: "0.75em" }}>
            <p href="" style={{ textDecoration: "none" }}>
              Already signed up?{" "}
              <span>
                {" "}
                <a href="http://localhost:3000/login">Login</a>
              </span>
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
