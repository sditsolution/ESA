import React, { useEffect, useState } from "react";
import styles from "../../styles/beACoach/addCourse.module.css";
import Modal from "../common/modals/Modal";
import CreateCourseForm from "./CreateCourseForm";

const AddCourse = ({ userID }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("userContext");
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
    }
  }, []);
  return (
    <div>
      <button
        className={styles.createCourseBtn}
        onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
      >
        Create Course
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCourseForm
            onCloseModal={() => setIsOpenModal(false)}
            userID={userData.idcoach}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddCourse;
