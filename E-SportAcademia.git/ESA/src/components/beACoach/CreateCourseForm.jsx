import React, { useEffect, useState } from "react";
import styles from "../../styles/beACoach/createCourseForm.module.css";
import FormRow from "./FormRow";
import NumberPicker from "react-widgets/NumberPicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/styles.css";

const CreateCourseForm = ({ onCloseModal }) => {
  const [title, setTitle] = useState("");
  const [participant, setParticipant] = useState(0);
  const [price, setPrice] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [paymentESA, setPaymentESA] = useState(0);
  const [description, setDescription] = useState("");
  const [pricePerParticipant, setPricePerParticipant] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
  function handleTimeChange(event) {
    setSelectedTime(event);
  }
  useEffect(function () {
    Calculation();
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
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
        <div className={styles.rowStyle}>
          <p>Time</p>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
          />
        </div>
        <div className={styles.containerContent}>
          <div className={styles.rowStyle}>
            <p className={styles.paragraph}>Participants</p>
            <NumberPicker
              value={participant}
              onChange={setParticipant}
              style={{ width: "5.25rem" }}
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
        </div>
        <FormRow label="Media / Link">
          <input type="text" style={{ height: "1.3rem", width: "15rem" }} />
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
            <button className="primaryBtn">Choose file</button>
            <label
              style={{
                border: "1px solid rgb(197, 196, 196)",
                borderRadius: "0.2rem",
                width: "10rem",
                padding: "0.5rem",
              }}
            >
              No choosen file
            </label>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className="secondaryBtn" onClick={onCloseModal}>
            Cancel
          </button>
          <button className="primaryBtn">Create Course</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseForm;
