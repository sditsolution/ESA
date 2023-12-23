import React from "react";
import CoachInformation from "./CoachInformation.jsx";
import styles from "../../styles/coachPages/coachProfile.module.css";
import { useState } from "react";
import CourseList from "./CourseList.jsx";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const CoachProfile = ({ coach }) => {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState();
  const [openCourses, setOpenCourses] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
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

  return (
    <div className={styles.container}>
      <div className={styles.containerInformation}>
        <CoachInformation coach={coach} setOpenCourses={setOpenCourses} />
      </div>
      {openCourses ? (
        <div className={styles.containerCourseList}>
          <CourseList setCourse={setCourse} setOpen={setOpen} />{" "}
        </div>
      ) : null}
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 800, height: 1000 }}>
            <h3
              id="child-modal-title"
              style={{ fontSize: "3em", marginBottom: "0", marginTop: "1rem" }}
            >
              {course.name}
            </h3>
            <div className={styles.containerCourseModal}>
              <h1>Courseinformation</h1>
              <p className={styles.paragraphDate}>Date: {course.date}</p>
              <div className={styles.modalAppointment}>
                <p className={styles.paragraphTime}>
                  Start: {course.start} - End: {course.end}
                </p>
              </div>
            </div>
            <div className={styles.modalWhere}>
              <p>Where: {course.where}</p>
              <p>
                Places: {course.numberBooked}/{course.participants}
              </p>
            </div>
            {/* 200 Words */}
            <div className={styles.modalDescription}>
              <h1>Description</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                sit amet,
              </p>
            </div>
            <div>
              <button className="primaryBtn" onClick={handleClose}>
                Purchase {course.price}
              </button>
              <button className="secondaryBtn" onClick={handleClose}>
                Close
              </button>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default CoachProfile;
