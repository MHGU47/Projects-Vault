// import React from 'react'
import React from 'react';

import '../App.css';
import Navbar from '../components/Navbar';
import GlamSegment from '../components/GlamSegment';
import SortBar from '../components/SortBar';
import SearchSidePanel from '../components/SearchSidePanel';
import styles from './CSS/Library.module.css'
import ScrollToTop from '../ScrollToTop';

function Library() {
  return (
    <div className="App">
        <Navbar/>
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="banner">
                <div className="banner_content">
                    {/* <div>
                        Display all the looks uploaded by users
                    </div>
                    <div>
                        Text
                    </div> */}
                </div>
            </div>
        </header>
        <main className="main">
            <div className={styles.side}>
                
            </div>
            <div className={styles.main}>
                {/* <SortBar/> */}
                <GlamSegment/>
            </div>
        
        </main>
        <footer>

        </footer>
        <ScrollToTop/>
    </div>
  )
}

export default Library