import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/beACoach/createCourseForm.module.css";
import FormRow from "./FormRow";
import NumberPicker from "react-widgets/NumberPicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/styles.css";

const CreateCourseForm = ({ onCloseModal }) => {
  const inputFile = useRef(null);
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
    const selectedDate = new Date(event);
    setSelectedDate(selectedDate);
  };
  function handleStartTimeChange(event) {
    setSelectedStartTime(event);
  }
  function handleEndTimeChange(event) {
    setSelectedEndTime(event);
  }
  function handleMedia(e) {
    setMedia(e);
  }
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
    } else {
      console.log("true");
    }
  }
  useEffect(function () {
    Calculation();
    createCoaching();
  });
  return (
    <div className={styles.container}>
      <h2>Create your coaching</h2>
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
            value={selectedStartTime}
            onChange={(e) => handleStartTimeChange(e.target.value)}
          />
        </div>
        <div className={styles.rowStyle}>
          <p>End</p>
          <input
            type="time"
            value={selectedEndTime}
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
            onClick={createCoaching}
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
