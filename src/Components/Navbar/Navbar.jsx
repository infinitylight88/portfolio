import React, { useState }  from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className= {styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className = {styles.menubtn} src={getImageUrl("nav/menuIcon.png")} alt="" />
        <ul className={styles.menuitems}>
          <li><a href="about">About</a></li>
          <li><a href="Expereance">Expereance</a></li>
          <li><a href="Project">Project</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar