import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import styles from './Expereance.module.css';

const Expereance = () => {
    return (
        <section className={styles.container} id='expereance'>
            <h2 className={styles.title}>Expereance</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {

                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    
                                    <ul>
                                        {historyItem.experiences.map((expereance, id) => {
                                            return (
                                                <li key={id}>
                                                    {expereance}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </li>
                        )

                    })}
                </ul>
            </div>

        </section>
    )
}

export default Expereance