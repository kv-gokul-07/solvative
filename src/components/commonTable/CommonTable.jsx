import React from 'react';
import styles from "./CommonTable.module.css";
import CommonLoader from '../commonLoader/CommonLoader';


const CommonTable = ({tableData, onOptionChangeHandler, limit}) => {

    console.log(tableData)
  return (
    <div className={styles.tableWrapper}>
        {tableData?.loader ? 
            <CommonLoader />   :
            !tableData?.countryData?.length > 0 ? 
            <>
                <h1>No Data Found</h1>
            </> : <>
            <table className={styles.table}>
                <tr>
                    <th className={`${styles.tableItem} ${styles.tableHead}`}>#</th>
                    <th className={`${styles.tableItem} ${styles.tableHead}`}>Place Name</th>
                    <th className={`${styles.tableItem} ${styles.tableHead}`}>Country</th>
                </tr>
                {tableData?.countryData?.map((data, index) => {
                    return (
                        <tr>
                            <td className={styles.tableItem}>{index + 1}</td>
                            <td className={styles.tableItem}>{data?.name || "NA"}</td>
                            <td className={`${styles.tableItem}`}>
                                <div className={styles.countryImg}>
                                    {data?.country || "NA"}
                                    <img className={styles.img} src={`https://flagsapi.com/${tableData?.countryCode || "AD"}/flat/64.png`}  alt="countryImage" />
                                </div>
                            </td>
                        </tr>
                    )})}
            </table>
            <div className={styles.selectWrapper}>
                Limit:&nbsp;
                <select onChange={onOptionChangeHandler} value={limit} className={styles.limitSelector}>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                </select>
            </div> :
        </>
        }
     
        
    </div>  
  )
}

export default CommonTable