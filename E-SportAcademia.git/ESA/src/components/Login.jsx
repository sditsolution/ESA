import styles from "../styles/Login.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import bcrypt from "bcryptjs";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function CheckAuth(authStatus) {
    console.log(authStatus);
    if (authStatus) {
      return true;
    } else {
      toast.error("Email is not verified");
      return false;
    }
  }

  const getUserData = async () => {
    try {
      return await fetch(`http://localhost:3001/getUser?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((data) => {
          const { PASSWORD: passwordBackend, AUTHORZIED: auth } = data;

          if (CheckAuth(auth)) {
            CheckPassword(passwordBackend);
          }
        });
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerdaten:", error);
      throw error;
    }
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function CheckPassword(backendPassword) {
    bcrypt.compare(password, backendPassword, function (err, isMatch) {
      if (err) {
        console.error("Fehler bei der Passwortüberprüfung:", err);
        // Hier können Sie entsprechend auf den Fehler reagieren
      } else if (isMatch) {
        navigate("/dashboard");
        // Hier können Sie den Benutzer authentifizieren oder andere Aktionen durchführen
      } else {
        toast.error("Email or password are incorrect!");
        // Hier können Sie entsprechend auf ein inkorrektes Passwort reagieren
      }
    });
  }

  function CheckLoginData() {
    getUserData();
  }

  useEffect(() => {}, [email]);

  return (
    <div className={styles.container}>
      <div className={styles.containerLayout}>
        <div className={styles.containerLogin}>
          <label className={styles.loginLabel}>LOGIN</label>
          <div className={styles.containerInput}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              style={{ width: "16rem" }}
              onChange={(e) => {
                handleEmailChange(e);
              }}
              className={styles.nameInput}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              style={{ width: "16rem" }}
              onChange={(e) => handlePasswordChange(e)}
              className={styles.nameInput}
            />
            <a href="www.google.de">forgot your password?</a>
            {!isLoggedIn && (
              <label
                style={{ color: "red", width: "25rem", paddingTop: "1rem" }}
              >
                Email or password are incorrect
              </label>
            )}
            <button className="primaryBtn" onClick={() => CheckLoginData()}>
              Login
            </button>
          </div>
        </div>
        <div className={styles.containerSignUp}>
          <h1 className={styles.SignUpHeader}>
            E-Sport <br /> Academia
          </h1>
          <button className="secondaryBtn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
