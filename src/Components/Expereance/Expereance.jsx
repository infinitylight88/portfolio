import React from 'react'
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'

const Expereance = () => {
  return (
    <section id='expereance'>
        <h2>Expereance</h2>
        <div>
            <div>
                {
                    skills.map((skill, id) => {
                        return <div key={idd}>
                            <img src={skill.getImageUrl(skill.imggeSrc)} alt={skill.title} />
                             </div>
                    })
                }
            </div>
            <ul></ul>
        </div>

    </section>
  )
}

export default Expereance