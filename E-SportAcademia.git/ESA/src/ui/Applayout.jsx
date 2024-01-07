import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "../ui/Header";
import styles from "../styles/ui/applayout.module.css";

const Applayout = () => {
  return (
    <div className={styles.applayout}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Applayout;
