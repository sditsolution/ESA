import styles from "../styles/Login.module.css";
import logo from "../images/ESportAcademia.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img alt="logo" src={logo} className={styles.logo} />
      <div className={styles.containerLogin}>
        <label className={styles.fromLabel}>Email</label>
        <input type="text" placeholder="email" />
        <label className={styles.fromLabel}>Password</label>
        <input type="text" placeholder="password" />
        <button
          className={styles.containerLoginBtn}
          onClick={() => navigate("home")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
