import React from 'react'
import { getImageUrl } from '../../utils'

const ProjectCard = ( { project, id }) => {
  return (
    <div >
                        <img src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.skills.map((skill, id) => {
                                return <li key={id}>{skill}</li>
                            })}
                        </ul>
                        <div>
                            <a href={project.demo}>Demo</a>
                            <a href={project.source}>Source</a>
                        </div>

                    </div>
  )
}

export default ProjectCard