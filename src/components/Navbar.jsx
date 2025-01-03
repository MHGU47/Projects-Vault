import React, { useState } from 'react';
import classNames from 'classnames';
import{Outlet, Link} from "react-router-dom"
import styles from './CSS/NavBar.module.css'
import icon from '../icons/menu.svg'

const Navbar = () => {
  const [divClass, setDivClass] = useState("");

  const changeClass = () => {
    console.log(1234)
    if(divClass === styles.responsive){setDivClass("")}
    else {setDivClass(styles.responsive)}
  }

  return (
    <div className={styles.navBar}>
        <div className={classNames(styles.buttons, divClass)}>
          <Link  to="/">Home</Link>
          <Link  to="/Looksbook">Looksbook</Link>
          <Link  to="/Library" className="btn-end">Library</Link>
          <a className={classNames(styles.icon)} onClick={changeClass}>
            {/* <i class="fa fa-bars"></i> */}
            <img src={icon}/>
          </a>
        </div>
        <Outlet/>
      </div>
  )
}

export default Navbar