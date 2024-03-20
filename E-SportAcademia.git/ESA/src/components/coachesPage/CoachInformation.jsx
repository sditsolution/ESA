import React from "react";
import { useState } from "react";
import styles from "../../styles/coachPages/CoachInformation.module.css";
import ReportModal from "../common/modals/ReportModal";
import placeholer from "../../assets/pictures/ProfilePlaceholder.png";

const CoachInformation = ({ setOpenCourses, coach }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openReport, setOpenReport] = useState(false);

  function OpenHandleReport() {
    if (openReport) {
      setOpenReport(false);
    } else {
      setOpenReport(true);
    }
  }
  function CloseHandleReport() {
    setOpenReport(false);
  }

  function HandleCourses(viewCourses) {
    if (isOpen) {
      setIsOpen(false);
      setOpenCourses(false);
    } else {
      setIsOpen(true);
      setOpenCourses(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.headerImg}>
          <img
            src={coach.img != undefined ? placeholder : coach.img}
            alt="img"
          />
        </div>
        {/* Todo: global css für buttons, icons etc */}
        <div className={styles.socials}>
          <h1>{coach.name}</h1>
          <div className={styles.socialList}>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Twitch</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.coachText}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className="primaryBtn">Subscribe</button>
        <button className="secondaryBtn" onClick={OpenHandleReport}>
          Report
        </button>
        {openReport && (
          <ReportModal
            open={openReport}
            handleClose={CloseHandleReport}
            name={coach.name}
          />
        )}
        {!isOpen ? (
          <button
            className="secondaryBtn"
            onClick={() => HandleCourses(setOpenCourses)}
          >
            View Courses{" "}
          </button>
        ) : (
          <button
            className="secondaryBtn"
            onClick={() => HandleCourses(setOpenCourses)}
          >
            close
          </button>
        )}
      </div>
    </div>
  );
};

export default CoachInformation;
