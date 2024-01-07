import React from "react";
import { useState } from "react";
import styles from "../styles/ui/searchbox.module.css";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="search"
      onChange={handleChange}
      value={searchInput}
      className={styles.searchbox}
    />
  );
};

export default SearchBox;
