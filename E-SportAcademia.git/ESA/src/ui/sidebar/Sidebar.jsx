import React from "react";
import styles from "../../styles/ui/sidebar.module.css";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;
