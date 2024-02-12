import React, { useEffect, useState, useContext } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Personals from "./Personals";
import styles from "../../styles/settings/profile.module.css";
import picture from "../../assets/pictures/NowayExample.png";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useParams } from "react-router-dom";

const Profile = ({ userData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [birthDate, setBirthDate] = useState(
    dayjs("01.01.1900", { format: "DD.MM.YYYY" })
  );
  const [phone, setPhone] = useState();
  const [adress, setAdress] = useState();
  const [plz, setPlz] = useState();
  const [country, setCountry] = useState();
  const [nation, setNation] = useState();
  const [credentials, setCredentials] = useState();
  const credentialId = useParams();

  function handleDateChange(newValue) {
    setBirthDate(newValue);
  }
  function handlePhoneChange(event) {
    setPhone(event);
  }
  function handleAdressOnChange(event) {
    setAdress((prevAdress) => event);
  }
  function handlePLZOnChange(event) {
    setPlz(event);
  }
  function handleCountryOnChange(event) {
    setCountry(event);
  }
  function handleNationOnChange(event) {
    setNation(event);
  }
  function setInitalValues(values) {
    if (birthDate === undefined) {
      setBirthDate(values.DATEOFBRITH);
    }
    if (phone === undefined) {
      setPhone(values.PHONE);
    }
    if (adress === undefined) {
      setAdress(values.STREET);
    }
    if (plz === undefined) {
      setPlz(values.PLZ);
    }
    if (country === undefined) {
      setCountry(values.COUNTRY);
    }
    if (nation === undefined) {
      setNation(values.NATION);
    }
  }
  function discard() {
    if (birthDate !== credentials.DATEOFBRITH) {
      setBirthDate(credentials.DATEOFBRITH);
    }
    if (phone !== credentials.PHONE) {
      setPhone(credentials.PHONE);
    }
    if (adress !== credentials.STREET) {
      console.log("Backend" + credentials.STREET);
      console.log("Frontend" + adress);
      setAdress(credentials.STREET);
    }
    if (plz !== credentials.PLZ) {
      setPlz(credentials.PLZ);
    }
    if (country !== credentials.COUNTRY) {
      setCountry(credentials.COUNTRY);
    }
    if (nation !== credentials.NATION) {
      setNation(credentials.NATION);
    }
  }

  const getCredentials = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/getUsercredential?credential=${credentialId.credential}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const creds = await response.json();
      setCredentials(creds);
      setInitalValues(creds);
      return creds;
    } catch (error) {
      console.error("Error fetching credentials:", error);
      throw error;
    }
  };

  const save = async () => {
    const userCredentialId = userData.USERCREDENTIAL;
    return await fetch(`http://localhost:3001/updateCredential`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        userCredentialId,
        birthDate,
        phone,
        adress,
        plz,
        country,
        nation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          toast.success("Successfull");
        }
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen der Benutzerdaten:", error)
      );
  };

  useEffect(() => {
    getCredentials();
  }, []);

  return (
    <>
      {userData && credentials && (
        <>
          <div
            className={styles.profileContainer}
            onClick={() => console.log("change")}
          >
            <div
              className={styles.profile}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <HiOutlinePencilSquare className={styles.editIcon} />
              ) : (
                <img
                  src={picture}
                  alt="profilpicture"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.personals}>
              <Personals label="Name" value={userData.NAME} disable={true} />
              <Personals
                label="Lastname"
                value={userData.LASTNAME}
                disable={true}
              />
              <TextField
                id="outlined-basic"
                label={"Date of birth"}
                variant="outlined"
                size="small"
                style={{ width: "20rem", marginTop: "1rem" }}
                className={styles.textField}
                defaultValue={birthDate?.format("DD.MM.YYYY")}
                onChange={(e) => handleDateChange(e.target.value)}
              />
            </div>
            <div className={styles.personals}>
              <TextField
                id="outlined-basic"
                label={"Phone"}
                variant="outlined"
                size="small"
                style={{ width: "20rem", marginTop: "1rem" }}
                className={styles.textField}
                defaultValue={credentials?.PHONE ?? ""}
                onChange={(e) => handlePhoneChange(e.target.value)}
                disabled={false}
              />
              <TextField
                id="outlined-basic"
                label={"Adress"}
                variant="outlined"
                size="small"
                style={{ width: "20rem", marginTop: "1rem" }}
                className={styles.textField}
                defaultValue={credentials?.STREET ?? ""}
                onChange={(e) => handleAdressOnChange(e.target.value)}
                disabled={false}
              />
              <TextField
                id="outlined-basic"
                label={"PLZ"}
                variant="outlined"
                size="small"
                style={{ width: "20rem", marginTop: "1rem" }}
                className={styles.textField}
                defaultValue={credentials?.PLZ ?? ""}
                onChange={(e) => handlePLZOnChange(e.target.value)}
                disabled={false}
              />
              <TextField
                id="outlined-basic"
                label={"County"}
                variant="outlined"
                size="small"
                style={{ width: "20rem", marginTop: "1rem" }}
                className={styles.textField}
                defaultValue={credentials?.COUNTRY ?? ""}
                onChange={(e) => handleCountryOnChange(e.target.value)}
                disabled={false}
              />
              <TextField
                id="outlined-basic"
                label={"Nation"}
                variant="outlined"
                size="small"
                style={{ width: "20rem", marginTop: "1rem" }}
                className={styles.textField}
                defaultValue={credentials?.NATION ?? ""}
                onChange={(e) => handleNationOnChange(e.target.value)}
                disabled={false}
              />
              <div className={styles.btnContainer}>
                <button className="primaryBtn" onClick={() => save()}>
                  Save
                </button>
                <button className="primaryBtn" onClick={() => discard()}>
                  Discard
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
