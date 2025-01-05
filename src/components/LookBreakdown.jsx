import '../App.css';
import React from 'react'
import BreakdownPanel from './BreakdownPanel'
import styles from './CSS/LookBreakdown.module.css'
import SlideShow from './SlideShow';
import {images} from '../constants'
import projects from '../projects.json'

function LookBreakdown({ info: {Name, Description, Images, Status, HLink, Languages}}) {
  return (
    <div className={styles.LooksbookContainer}>
      <div className={styles.title}>
        {Name}
      </div>
      <div className={styles.imagesContainer}>
        <SlideShow slides={Images}/>
      </div>
      <div className={styles.midsection}>
        <div className={styles.lookInfoContainer}>
          <h6>Description</h6>
          <BreakdownPanel desc={Description}/>
        </div>
        <div className={styles.rightSideContainer}>
          <div>{Status}</div>
          {Languages.map((item) => {
              return(<div>{item}</div>)
            })}
        </div>
      </div>
    </div>
  )
}

export default LookBreakdown