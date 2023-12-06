import React from "react";
import styles from "../../styles/dashboard/SubsCoaches.module.css";
import SubscribedCoach from "./SubscribedCoach";

const SubsCoaches = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h1>Subcribed Coaches</h1>
      </div>
      <div className={styles.subslist}>
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
        <SubscribedCoach name={"Noway4you"} />
      </div>
    </div>
  );
};

export default SubsCoaches;
