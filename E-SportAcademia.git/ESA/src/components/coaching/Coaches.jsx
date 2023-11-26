import React from "react";
import styles from "../../styles/coaching/Coaches.module.css";
import Coach from "./Coach";

const Coaches = ({ setCoach, setIsSelected, isSelected }) => {
  const coachList = [
    {
      id: 1,
      name: "Dennis",
    },
    { id: 2, name: "Luisa" },
    { id: 3, name: "Pascal" },
    {
      id: 4,
      name: "Maurice",
    },
    { id: 5, name: "Dennis" },
    { id: 6, name: "Dennis" },
    {
      id: 7,
      name: "Dennis",
    },
    {
      id: 8,
      name: "Dennis",
    },
    {
      id: 9,
      name: "Dennis",
    },
    { id: 10, name: "Dennis" },
    {
      id: 11,
      name: "Dennis",
    },
    { id: 12, name: "Dennis" },
    { id: 13, name: "Dennis" },
    {
      id: 14,
      name: "Dennis",
    },
    { id: 15, name: "Dennis" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <input
          className={styles.headerSearch}
          type="text"
          placeholder="search"
        />
        <div className={styles.coachlist}>
          {coachList != null
            ? coachList.map((coach, key) => (
                <Coach
                  key={coach.id}
                  setCoach={setCoach}
                  name={coach.name}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Coaches;
