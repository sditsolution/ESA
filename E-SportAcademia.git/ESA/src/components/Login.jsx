import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.containerLayout}>
        <div className={styles.containerLogin}>
          <label className={styles.loginLabel}>LOGIN</label>
          <div className={styles.containerInput}>
            {/* <label className={styles.fromLabel}>Email</label> */}
            <input type="text" placeholder="email" className={styles.input} />
            {/* <label className={styles.fromLabel}>Password</label> */}
            <input
              type="text"
              placeholder="password"
              className={styles.input}
            />
            <label>forgot your password?</label>
            {!isLoggedIn && (
              <label
                style={{ color: "red", width: "25rem", paddingTop: "1rem" }}
              >
                Email or password are incorrect
              </label>
            )}
            <button
              className={styles.containerLoginBtn}
              onClick={() => navigate("home")}
            >
              Login
            </button>
          </div>
        </div>
        <div className={styles.containerSignUp}>
          <h1 className={styles.SignUpHeader}>
            E-Sport <br /> Academia
          </h1>
          <button className={styles.SignUpButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
