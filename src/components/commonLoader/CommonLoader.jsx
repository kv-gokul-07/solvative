import React from 'react';
import styles from "./CommonLoader.module.css";

const CommonLoader = () => {
  return (
    <div className={styles?.loaderWrapper}>
        <div className={styles?.loader}></div>
    </div>
  )
}

export default CommonLoader