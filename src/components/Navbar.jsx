import React, { useState } from 'react';
import classNames from 'classnames';
import { Outlet, Link } from "react-router-dom"
import styles from './CSS/NavBar.module.css'
import icon from '../icons/menu.svg'

const Navbar = () => {
  const [divClass, setDivClass] = useState("");

  const changeClass = () => {
    console.log(1234)
    if(divClass === styles.responsive) {
      setDivClass("")
    } else {
      setDivClass(styles.responsive)
    }
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.title}>
        Marcus
      </div>
      <div className={classNames(styles.buttons, divClass)}>
        <Link to="/">Home</Link>      
        <Link to="/Library">Projects</Link>
        <Link to="/Looksbook" className="btn-end">About</Link>
        <a className={classNames(styles.icon)} onClick={changeClass}>
          <img src={icon} alt="menu"/>
        </a>
      </div>
      <Outlet/>
    </div>
  )
}

export default Navbar