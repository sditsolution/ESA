import React from "react";
import styles from "../../styles/beACoach/createCourseForm.module.css";
import FormRow from "./FormRow";
import NumberPicker from "react-widgets/NumberPicker";
import "react-widgets/styles.css";

const CreateCourseForm = ({ onCloseModal }) => {
  return (
    <div className={styles.container}>
      <h2>Create your course</h2>
      <div className={styles.containerContent}>
        <FormRow label="Titel">
          <input type="text" style={{ height: "1.3rem", width: "15rem" }} />
        </FormRow>
        <div className={styles.containerContent}>
          <div className={styles.rowStyle}>
            <p className={styles.paragraph}>Price</p>
            <NumberPicker style={{ width: "6rem" }} />
          </div>
        </div>
        <div className={styles.containerContent}>
          <div className={styles.rowStyle}>
            <p className={styles.paragraph}>Participants</p>
            <NumberPicker style={{ width: "6rem" }} />
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
