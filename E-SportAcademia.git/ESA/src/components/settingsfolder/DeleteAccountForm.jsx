import React from "react";
import { useContext } from "react";
import styles from "../../styles/settings/deleteAccountForm.module.css";
import toast from "react-hot-toast";
import { UserContext } from "./../../App.jsx";

const DeleteAccountForm = ({ onCloseModal, userID }) => {
  const { logoutUser } = useContext(UserContext);
  const DeleteAccount = async () => {
    return await fetch(`http://localhost:3001/deleteAccount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({ userID }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          onCloseModal();
          toast.success(`Account successfully deleted`);
          //TODO: muss noch getestet werden
          logoutUser();
        } else if (data.serverStatus === -1) {
          toast.error("Failed deleting account");
        }
      })
      .catch((error) => toast.error("Delete account failed."));
  };

  return (
    <div className={styles.container}>
      <h3>Delete Account</h3>
      <div className={styles.content}>
        <p>Do you want to delete your account?</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className="secondaryBtn" onClick={onCloseModal}>
          Abort
        </button>
        <button className="primaryBtn" onClick={DeleteAccount}>
          Yes, I´m sure
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountForm;
