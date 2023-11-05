import React from "react";
import { useState } from "react";
import styles from "../../styles/coaching/CoachInformation.module.css";

const CoachInformation = ({ selectedCoach, viewCourses }) => {
  const [isOpen, setIsOpen] = useState(false);
  function HandleCourses(viewCourses) {
    if (isOpen) {
      setIsOpen(false);
      viewCourses(false);
    } else {
      setIsOpen(true);
      viewCourses(true);
    }
  }

  return (
    <div className={styles.container}>
      {selectedCoach == null ? (
        <h1 styles={styles.h1}>Select a coach for more information</h1>
      ) : (
        <>
          <div className={styles.containerHeader}>
            <div className={styles.headerImg}>Img</div>
            <div className={styles.socials}>
              <h1>{selectedCoach}</h1>
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
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel
              eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
              soluta nobis eleifend option congue nihil imperdiet doming id quod
              mazim placerat facer
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.primaryButton}>Report</button>
            <button className={styles.primaryButton}>Subscribe</button>
            {!isOpen ? (
              <button
                className={styles.primaryButton}
                onClick={() => HandleCourses(viewCourses)}
              >
                View Courses
              </button>
            ) : (
              <button
                className={styles.primaryButton}
                onClick={() => HandleCourses(viewCourses)}
              >
                close
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CoachInformation;
