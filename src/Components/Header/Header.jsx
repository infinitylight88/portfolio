import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../Header/Header.module.css"

// header component

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className= {styles.title}>Hi, I'm Derrick</h1>
        <p className={styles.description}>A self taught full stack developer with 5 years of expereance using
          react and nodejs. Reach out if you would like to learn more
        </p>
        <a href="mailto:myemail@gmail.com" className={styles.contactbtn}> contact me</a>
         </div>
      <img src={getImageUrl("hero/Loved.jpg")} alt="hero" className={styles.heroimg} />
      <div className={styles.topblur}></div>
      <div className={styles.botomblur}></div>
    </section>
  )
}

export default Header