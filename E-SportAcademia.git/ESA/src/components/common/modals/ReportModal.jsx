import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "../../../styles/common/modals/report.module.css";
import ReportDone from "./ReportDone.jsx";

const ReportModal = ({ open, handleClose, name }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const today = new Date();
  const [reported, setReported] = useState(false);

  function handleReport() {
    setReported(true);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 800 }}>
          {!reported ? (
            <div className={styles.containerHeader}>
              <h3
                id="child-modal-title"
                style={{
                  fontSize: "3em",
                  marginBottom: "0",
                  marginTop: "1rem",
                }}
              >
                Report {name}
              </h3>
              <h2>
                {today.getDate()}.{today.getMonth()}.{today.getFullYear()}
              </h2>
              <div className={styles.header}>
                <p>
                  Please try to describe as precisely as possible why the person
                  should be reported.
                </p>
                <select
                  className="combobox"
                  style={{
                    fontSize: "1.1em",
                    height: "2.5rem",
                    marginTop: "2rem",
                  }}
                >
                  <option>select...</option>
                  <option>Offensive name</option>
                  <option>Offensive language</option>
                  <option>Missed the coaching</option>
                </select>

                <textarea
                  rows={10}
                  cols={20}
                  placeholder="type in your text"
                  className={styles.textarea}
                />
              </div>
              <div className={styles.containerBtn}>
                <button className="primaryBtn" onClick={handleReport}>
                  Report
                </button>

                <button className="secondaryBtn">Close</button>
              </div>
            </div>
          ) : (
            <ReportDone />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ReportModal;
