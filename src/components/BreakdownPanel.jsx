import React from 'react'
import styles from './CSS/BreakdownPanel.module.css'

function BreakdownPanel() {
  return (
    <div className={styles.itemComponent}>
      <div className={styles.itemBox}>
        <img className={styles.itemIcon} src="https://via.placeholder.com/50"></img>
        <div className={styles.itemType}>INSERT COMPONENT HERE</div>
      </div>
      <div className={styles.itemName}>INSERT SPECIFIC NAME HERE</div>
    </div>
  )
}

export default BreakdownPanel