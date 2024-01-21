import styles from "../styles/Login.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/getUser?email=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP-Fehler! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
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
  // const { NAME, EMAIL, PASSWORD } = userData;

  function CheckLoginData() {
    getUserData();
    console.log(userData);
  }

  useEffect(() => {}, [email]);

  return (
    <div className={styles.container}>
      <div className={styles.containerLayout}>
        <div className={styles.containerLogin}>
          <label className={styles.loginLabel}>LOGIN</label>
          <div className={styles.containerInput}>
            {/* <label className={styles.fromLabel}>Email</label> */}
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
