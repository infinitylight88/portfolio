import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../About/About.module.css'


const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")}
                    alt="Vector Illustration of Girl sitting with laptop" className={styles.aboutImage} />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a front end developer with expereance in building
                                responcive and optimised websites
                            </p>
                        </div>
                    </li>

                    <li  className={styles.aboutItem}> 
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have expereance building fast and optimised apps and APIs
                            </p>
                        </div>
                    </li>

                    <li  className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI/UX-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>I have designed multiple landing pages and have
                                created design systems.
                            </p>
                        </div>
                    </li>
                </ul>


            </div>


        </section>
    )
}

export default About