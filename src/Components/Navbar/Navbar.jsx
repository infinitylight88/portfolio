import React, { useState }  from 'react'
import { getImageUrl } from '../../utils'


import styles from "./Navbar.module.css"

const Navbar = () => {
  const [menuOpen,setmenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className= {styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className = {styles.menubtn} 
        src={menuOpen? getImageUrl("nav/closeIcon.png")
         : getImageUrl("nav/menuIcon.png")} alt="menu" 
         onClick={()=> setmenuOpen(!menuOpen)}

         />
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>setmenuOpen(false) }>
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