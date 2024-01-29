import React from "react";
import styles from "../../styles/coaching/course.module.css";
import image from "../../assets/pictures/courseTestpng.png";

const Course = () => {
  const courses = [
    {
      courseId: 1,
      content: {
        img: image,
        title: "Wave Management",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 50,
        media: "discord",
      },
    },
    {
      courseId: 2,
      content: {
        img: image,
        title: "Wave Managenmentd awdasd ads a dasdaw daddadadwadsd",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 50,
        media: "discord",
      },
    },
    {
      courseId: 3,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 4,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 5,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 6,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 7,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 8,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 9,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 11,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 12,
      content: {
        img: "",
        title: "Zed plays adoiaüdnüasodhüsdpja",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 13,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 1,
        price: 150,
        media: "zoom",
      },
    },
    {
      courseId: 14,
      content: {
        img: "",
        title: "Zed plays",
        description: "",
        participants: 4,
        bookedParticipants: 3,
        price: 200,
        media: "zoom",
      },
    },
  ];
  return (
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
            {courses !== undefined
              ? courses.map((c) => (
                  <div key={c.id} style={{ marginTop: "1rem" }}>
                    <tr style={{ display: "flex", alignItems: "center" }}>
                      {/* <td className={styles.th}>{c.img}</td> */}
                      <td className={styles.th}>
                        <img
                          src={c.content.img}
                          alt="coursePic"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "fill",
                          }}
                        />
                      </td>
                      <td className={styles.title}>{c.content.title}</td>
                      <td className={styles.th}>
                        {c.content.bookedParticipants}/{c.content.participants}
                      </td>
                      <td className={styles.th}>{c.content.price}</td>
                      <td className={styles.th}>{c.content.media}</td>

                      <td className={styles.th}>
                        <button className={styles.viewButton}>View</button>
                      </td>
                    </tr>
                  </div>
                ))
              : null}
          </div>
        </table>
      </div>
    </div>
  );
};

export default Course;
