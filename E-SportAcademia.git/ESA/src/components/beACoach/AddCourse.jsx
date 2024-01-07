import React, { useState } from "react";
import styles from "../../styles/beACoach/addCourse.module.css";
import Modal from "../common/modals/Modal";
import CreateCourseForm from "./CreateCourseForm";

const AddCourse = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
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
          <CreateCourseForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCourse;
