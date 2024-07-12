import React from 'react'
import styles from './Footer.module.css'
import { getImageUrl } from '../../utils'

const Footer = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p>Feel free to get in-touch</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:napokoliderrick88@gmail.com">napooliderrick88@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt=""/>
          <a href="https://www.linkedin.com/messaging/thread/new/">Derrick Napokoli</a>
        </li>
        <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt=""/>
        <a href="https://github.com/infinitylight88">Derrick Napokoli </a>
        </li>
        
        
      </ul>
    </footer>
  )
}

export default Footer