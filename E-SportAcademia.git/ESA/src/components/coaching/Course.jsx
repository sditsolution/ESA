import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/coaching/course.module.css";
import image from "../../assets/pictures/courseTestpng.png";
import Modal from "../common/modals/Modal";
import ViewCoachingForm from "./ViewCoachingForm";
import PurchaseModal from "../common/modals/PurchaseModal";
import PurchaseCoachingForm from "../games/purchase/PurchaseCoachingForm";
const Course = () => {
  const [coaching, setCoaching] = useState([]);
  const { coachname } = useParams();
  const [coach, setCoach] = useState();
  const [selectedCoaching, setSelectedCoaching] = useState();
  const [isViewCoachingModalOpen, setIsViewCoachingModalOpen] = useState(false);
  const [isPurchchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const getCoaching = async () => {
    const response = await fetch(
      `http://localhost:3001/getCoaching?userID=${coachname}/courses`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const result = await response.json();
    setCoaching(result);
  };
  const getCoachName = async () => {
    const response = await fetch(`http://localhost:3001/getcoachname`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        coachid: coachname,
      }),
    });
    const result = await response.json();
    setCoach(result[0].INGAMENAME);
  };

  function handleSelection(coaching) {
    setSelectedCoaching(coaching);
    setIsViewCoachingModalOpen(true);
  }
  function handlePurchaseModal(coaching) {
    setSelectedCoaching(coaching);
    setIsPurchaseModalOpen(true);
  }
  useEffect(() => {
    getCoaching();
    getCoachName();
  }, []);
  return (
    <>
      <div style={{ marginLeft: "5rem" }}>
        <h2>Coachings from {coach}</h2>
      </div>
      <div className={styles.rootContainer}>
        <div className={styles.container}>
          <table>
            <div className={styles.containerHeader}>
              <tr align="left">
                {/* <th className={styles.th}>
              <p style={{ width: "5rem" }}></p>
            </th> */}
                <th className={styles.th}>
                  <p></p>
                </th>
                <th className={styles.title}>
                  <p>Game</p>
                </th>
                <th className={styles.title}>
                  <p>Title</p>
                </th>
                <th className={styles.th}>
                  <p>Participants</p>
                </th>
                <th className={styles.th}>
                  <p>Price</p>
                </th>
                <th className={styles.th}>
                  <p>Media</p>
                </th>
                <th className={styles.th}>
                  <p></p>
                </th>
              </tr>
            </div>
            <div className={styles.content}>
              {coaching !== undefined
                ? coaching.map((c) => (
                    <React.Fragment key={c.id}>
                      <div style={{ marginTop: "1rem" }}>
                        <tr style={{ display: "flex", alignItems: "center" }}>
                          {/* <td className={styles.th}>{c.img}</td> */}
                          <td className={styles.th}>
                            <img
                              src={c.IMAGE}
                              alt="coursePic"
                              style={{
                                height: "100%",
                                width: "30%",
                                objectFit: "contain",
                              }}
                            />
                          </td>
                          <td className={styles.title}>{c.NAME}</td>
                          <td className={styles.title}>{c.TITLE}</td>
                          <td className={styles.th}>
                            {c.PARTICIPANT}/
                            {c.BOOKEDPATICIPANT != null
                              ? c.BOOKEDPATICIPANT
                              : 0}
                          </td>
                          <td className={styles.th}>{c.PRICE}</td>
                          <td className={styles.th}>{c.MEDIA}</td>

                          <td className={styles.th}>
                            <div className={styles.buttonContainer}>
                              <button
                                className={styles.viewButton}
                                onClick={() => handleSelection(c)}
                              >
                                View
                              </button>
                              <button
                                className={
                                  c.BOOKEDPATICIPANT === c.PARTICIPANT
                                    ? styles.bookButtonEnabled
                                    : styles.bookButton
                                }
                                onClick={() => handlePurchaseModal(c)}
                                disabled={c.BOOKEDPATICIPANT === c.PARTICIPANT}
                              >
                                Book
                              </button>
                            </div>
                          </td>
                        </tr>
                      </div>
                    </React.Fragment>
                  ))
                : null}
            </div>
          </table>
        </div>
      </div>
      {isViewCoachingModalOpen && (
        <Modal onClose={() => setIsViewCoachingModalOpen(false)}>
          <ViewCoachingForm coaching={selectedCoaching} />
        </Modal>
      )}
      {isPurchchaseModalOpen && (
        <PurchaseModal onClose={() => setIsPurchaseModalOpen(false)}>
          <PurchaseCoachingForm
            coachingid={selectedCoaching.idcoaching}
            title={selectedCoaching.TITLE}
            price={selectedCoaching.PRICE}
            data={selectedCoaching.DATE}
            start={selectedCoaching.START}
            end={selectedCoaching.END}
            img={selectedCoaching.IMAGE}
          />
        </PurchaseModal>
      )}
    </>
  );
};

export default Course;
