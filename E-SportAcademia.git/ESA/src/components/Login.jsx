import styles from "../styles/Login.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "./../App.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, logoutUser } = useContext(UserContext);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();
  const [userContext, setUserContext] = useState();

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/getUser?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
          body: JSON.stringify({
            frontendPassword: password,
          }),
        }
      );

      let backendData;

      if (response.status === 401) {
        // Anmeldeinformationen ungültig
        setUserContext(null);
        toast.error("Wrong email or password ");
        return;
      }

      if (!response.ok) {
        console.error("Fehler");
        toast.error("An error occurred while logging in");
        return;
      }

      try {
        backendData = await response.json();
      } catch (jsonError) {
        console.error("Fehler beim Analysieren der JSON-Antwort:", jsonError);
        toast.error("An error occurred while parsing the server response");
        return;
      }

      const { AUTHORZIED: auth } = backendData;

      if (CheckAuth(auth)) {
        setUserContext(backendData);
        localStorage.setItem("user", JSON.stringify(backendData));
        navigate("/dashboard");
      } else {
        setUserContext(null);
        toast.error("Authentication failed");
      }
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerdaten:", error);
      toast.error("An error occurred while fetching user data");
    }
  };
  function CheckAuth(authStatus) {
    if (authStatus === 1) {
      return true;
    } else {
      return false;
    }
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString !== undefined) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);
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
            <button className="primaryBtn" onClick={() => getUserData()}>
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
