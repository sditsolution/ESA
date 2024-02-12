import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/settings/account.module.css";
import Switch from "@mui/material/Switch";
import Modal from "../common/modals/Modal";
import toast, { Toaster } from "react-hot-toast";
import ChangePasswordForm from "./ChangePasswordForm";
import DeleteAccountForm from "./DeleteAccountForm";

const Account = ({ userData, credentials }) => {
  const [NotifyChecked, setNotifyChecked] = useState(true);
  const [language, setLanguage] = useState();
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const [deleteAccountIsOpen, setDeleteAccountIsOpen] = useState(false);

  const handleOnChangeNotification = (event) => {
    setNotifyChecked(event.target.checked);
    updateAccount();
  };
  const handleLanguageOnChange = (event) => {
    setLanguage(event);
    updateAccount();
  };

  const updateAccount = async () => {
    const { idcredential } = credentials;
    return await fetch(`http://localhost:3001/updateAccount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        NotifyChecked,
        language,
        idcredential,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          toast.success("Successfull");
        }
      })
      .catch((error) => toast.error("Failed update account settings"));
  };
  const EmailChangeRequest = async () => {
    let userName = userData.NAME;
    let userID = userData.USER_ID;
    let email = userData.EMAIL;

    return await fetch(`http://localhost:3001/changeEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        email,
        userName,
        userID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          toast.success(`Change request send to:\n ${email}`);
        }
      })
      .catch((error) => toast.error("Failed update account settings"));
  };

  useEffect(() => {}, []);
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.notification}>
          <p style={{ fontSize: "1.3em" }}>Notification</p>
          <Switch
            defaultChecked={credentials?.NOTIFICATION}
            checked={NotifyChecked}
            onChange={handleOnChangeNotification}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className={styles.password}>
          <label style={{ fontSize: "1.3em" }}>Language</label>
          <select
            className="comboBox"
            onChange={(e) => handleLanguageOnChange(e.target.value)}
            defaultValue={credentials?.LANGUAGE}
          >
            <option>Englisch</option>
            <option>German</option>
          </select>
        </div>
        <div className={styles.password}>
          <div>
            <p style={{ fontSize: "1.3em" }}>Email</p>
            <p>{userData?.EMAIL}</p>
          </div>
          <button className="primaryBtn" onClick={EmailChangeRequest}>
            Change
          </button>
        </div>
        <div className={styles.password}>
          <p style={{ fontSize: "1.3em" }}>Password</p>
          <button
            className="primaryBtn"
            onClick={() =>
              setPasswordIsOpen((passwordIsOpen) => !passwordIsOpen)
            }
          >
            Change
          </button>
          {passwordIsOpen && (
            <Modal onClose={() => setPasswordIsOpen(false)}>
              <ChangePasswordForm
                onCloseModal={() => setPasswordIsOpen(false)}
              />
            </Modal>
          )}
          {deleteAccountIsOpen && (
            <Modal onClose={() => setDeleteAccountIsOpen(false)}>
              <DeleteAccountForm
                onCloseModal={() => setDeleteAccountIsOpen(false)}
                userID={userData.USER_ID}
              />
            </Modal>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5rem",
          }}
        >
          <button
            className="primaryDeleteBtn"
            onClick={() => setDeleteAccountIsOpen(true)}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
