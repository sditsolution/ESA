import React, { useEffect, useState } from "react";
import Container from "./Container.jsx";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CreateCourse from "./CreateCourse.jsx";
import styles from "../../styles/beACoach/BeACoach.module.css";

const BeACoach = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [joinNow, setJoinNow] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  useEffect(() => {}, [isChecked, joinNow]);

  return (
    <div className={styles.contentContainer}>
      {joinNow ? (
        <CreateCourse />
      ) : (
        <div className={styles.content}>
          <Container header="How to coach?">
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Container>
          <Container header="How does it work?">
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Container>
          <Container header="Why join our team?">
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Container>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex" }}>
              <FormControlLabel
                required
                control={
                  <Checkbox checked={isChecked} onChange={handleChange} />
                }
                label="I agree all terms from E-Sports Academia"
              />
            </div>

            <button
              className={isChecked ? "primaryBtn" : "primayBtnDisabled"}
              disabled={!isChecked}
              onClick={() => setJoinNow(true)}
            >
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeACoach;
