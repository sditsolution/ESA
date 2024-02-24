import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/beACoach/createCourseForm.module.css";
import FormRow from "./FormRow";
import NumberPicker from "react-widgets/NumberPicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/styles.css";
import toast from "react-hot-toast";

const CreateCourseForm = ({ onCloseModal, userID }) => {
  const inputFile = useRef(null);
  const [selectedGame, setSelectedGame] = useState(1);
  const [gameIndex, setGameIndex] = useState(1);
  const [games, setGames] = useState([0]);
  const [title, setTitle] = useState("");
  const [participant, setParticipant] = useState(0);
  const [price, setPrice] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [paymentESA, setPaymentESA] = useState(0);
  const [description, setDescription] = useState("");
  const [pricePerParticipant, setPricePerParticipant] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [media, setMedia] = useState("");

  function handleTitle(e) {
    setTitle(e);
  }
  function Calculation() {
    let temp = 0;
    let payment = 0;
    if (
      price !== undefined &&
      participant !== undefined &&
      price > 0 &&
      participant > 0
    ) {
      temp = price / participant;
      setPricePerParticipant(Math.round(temp));
      payment = Math.round(price * 0.1);
      setPaymentESA(payment);
      setRevenue(price - payment);
    }
  }
  function handleDescription(e) {
    setDescription(e);
  }
  const handleDateChange = (event) => {
    const formattedDate = convertToMySQLFormat(event);
    setSelectedDate(formattedDate);
  };
  const convertToMySQLFormat = (isoDateString) => {
    const dateObject = new Date(isoDateString);
    const mysqlDateString = dateObject
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    return mysqlDateString;
  };
  const convertToMySQLTimeFormat = (isoTimeString) => {
    const currentDate = new Date();
    const isoDateTimeString = `${currentDate
      .toISOString()
      .slice(0, 10)}T${isoTimeString}Z`;

    const dateObject = new Date(isoDateTimeString);
    const mysqlDateTimeFormat = dateObject
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    return mysqlDateTimeFormat;
  };
  function handleStartTimeChange(event) {
    const formattedTime = convertToMySQLTimeFormat(event);
    setSelectedStartTime(formattedTime);
  }
  function handleEndTimeChange(event) {
    const formattedTime = convertToMySQLTimeFormat(event);
    setSelectedEndTime(formattedTime);
  }
  function handleMedia(e) {
    setMedia(e);
  }
  const handleGameChange = (event) => {
    const selectedIndex = event.target.value;
    console.log(selectedIndex);
    setGameIndex(selectedIndex);
    setSelectedGame(games[selectedIndex]);
  };
  function OpenFileDialog() {
    inputFile.current.click();
    // setSelectedFile(inputFile);
  }
  function handleSelectedFile(e) {
    const file = e.target.files[0];
    setSelectedFile(file);
  }
  function createCoaching() {
    if (
      selectedGame !== 0 &&
      title.trim() !== "" &&
      price >= 0 &&
      participant >= 0 &&
      description !== "" &&
      media !== "" &&
      selectedDate !== null &&
      selectedStartTime !== null &&
      selectedEndTime !== null
    ) {
      setIsDisabled(false);
    }
  }
  const getGames = async () => {
    const response = await fetch(`http://localhost:3001/getgames`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });
    const result = await response.json();
    setGames(result);
  };
  const insertCoaching = async () => {
    return await fetch(`http://localhost:3001/createCoaching`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        gameIndex,
        title,
        selectedDate,
        selectedStartTime,
        selectedEndTime,
        price,
        participant,
        paymentESA,
        revenue,
        description,
        media,
        userID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.serverStatus === 2) {
          toast.success("Successfull");
          onCloseModal();
        }
      })
      .catch((error) => toast.error("Failed update account settings"));
  };

  useEffect(
    function () {
      Calculation();
      createCoaching();
      getGames();
    },
    [price, participant, description]
  );

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Create your coaching in</h2>
        <select
          onChange={handleGameChange}
          value={selectedGame !== null ? games.indexOf(selectedGame) : ""}
          className={styles.selection}
        >
          {games.map((game) => (
            <option key={game.idgame} value={game.idgame}>
              {game.NAME}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.containerContent}>
        <FormRow label="Titel">
          <input
            type="text"
            onChange={(e) => handleTitle(e.target.value)}
            style={{ height: "1.3rem", width: "15rem" }}
          />
        </FormRow>
        <div className={styles.rowStyle}>
          <p>Date</p>
          <input
            type="date"
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
        <div className={styles.rowStyle}>
          <p>Start</p>
          <input
            type="time"
            onChange={(e) => handleStartTimeChange(e.target.value)}
          />
        </div>
        <div className={styles.rowStyle}>
          <p>End</p>
          <input
            type="time"
            onChange={(e) => handleEndTimeChange(e.target.value)}
          />
        </div>
        <div className={styles.containerContent}>
          <div className={styles.rowStyle}>
            <p className={styles.paragraph}>Price</p>
            <NumberPicker
              value={price}
              onChange={setPrice}
              style={{ width: "5.25rem" }}
            />
          </div>

          <div className={styles.rowStyle}>
            <p>Participants</p>
            <NumberPicker
              value={participant}
              onChange={setParticipant}
              style={{ width: "5.25rem" }}
            />
          </div>
          <div className={styles.rowStyle}>
            <p>Price per participant</p>
            <p>{pricePerParticipant} €</p>
          </div>
          <div className={styles.rowStyle}>
            <p>Payments to ESA</p>
            <p>{paymentESA} €</p>
          </div>
          <div className={styles.rowStyle}>
            <p>Your revenue</p>
            <p>{revenue} €</p>
          </div>
        </div>
        <FormRow label="Media / Link">
          <input
            type="text"
            style={{ height: "1.3rem", width: "15rem" }}
            value={media}
            onChange={(e) => handleMedia(e.target.value)}
          />
        </FormRow>
        <div className={styles.containerContent}>
          <div className={styles.rowStyle2}>
            <p className={styles.paragraph}>Description</p>
            <textarea
              className={styles.textarea}
              placeholder="type your text"
              onChange={(e) => handleDescription(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.containerContent}>
          <div className={styles.rowStyle}>
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
              onChange={(e) => handleSelectedFile(e)}
              accept=".pdf, .jpg, .png"
            />
            <button className="primaryBtn" onClick={OpenFileDialog}>
              Choose file
            </button>
            <label
              style={{
                border: "1px solid rgb(197, 196, 196)",
                borderRadius: "0.2rem",
                width: "10rem",
                padding: "0.5rem",
              }}
            >
              {selectedFile !== undefined
                ? selectedFile.name
                : "No choosen file"}
            </label>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className="secondaryBtn" onClick={onCloseModal}>
            Cancel
          </button>
          <button
            className={!isDisabled ? "primaryBtn" : "primayBtnDisabled"}
            onClick={insertCoaching}
            disabled={isDisabled}
          >
            Create coaching
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseForm;
