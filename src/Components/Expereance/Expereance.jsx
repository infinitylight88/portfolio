import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'

const Expereance = () => {
  return (
    <section id='expereance'>
        <h2>Expereance</h2>
        <div>
            <div>
                {
                    skills.map((skill, id) => {
                        return <div key={id}>
                            <div><img src={skill.getImageUrl(skill.imggeSrc)} alt={skill.title} /></div>
                            <p>{skills.title}</p>
                             </div>
                    })
                }
            </div>
            <ul>
                {history.map((historyItem, id ) => {

                    return(
                        <li key={id}>
                            <img src= {getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
                            <div>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.expereances.map((expereance, id) =>{
                                        return(
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