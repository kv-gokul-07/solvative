import React, { useState } from 'react';
import styles from "./CommonSearch.module.css";

const CommonSearch = ({handleFilterChange}) => {

  const [searchData, setSearchData] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearchData(newValue);
    handleFilterChange(newValue)
  }
  return (
    <div className={styles.searchFieldWrapper}>
          <input type="text" name="CountryFilter" placeholder='Search Places' onChange={handleChange} value={searchData}  className={styles.textField}/>
      <div className={styles.ctrlCmd}>Ctrl + /</div>
    </div>
  )
}

export default CommonSearch