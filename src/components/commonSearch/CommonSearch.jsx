import React, { useState, useRef, useEffect } from 'react';
import styles from "./CommonSearch.module.css";

const CommonSearch = ({handleFilterChange}) => {

  const [searchData, setSearchData] = useState("");

  const inputField = useRef();

  useEffect(() => {

    const handleKeyDown = (event) => {
      if(event.key === "/") {
        inputField.current.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearchData(newValue);
    handleFilterChange(newValue);
  }

  return (
    <div className={styles.searchFieldWrapper}>
          <input ref={inputField} type="text" name="CountryFilter" placeholder='Search Places' onChange={handleChange} value={searchData}  className={styles.textField}/>
      <div className={styles.ctrlCmd}>Ctrl + /</div>
    </div>
  )
}

export default CommonSearch