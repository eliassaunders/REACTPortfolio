import React from 'react'
import github from '../../assets/images/iconmonstr-github-1.svg'
import link from '../../assets/images/paper-clip-svgrepo-com.svg'

function Project(props) {
    return (
        <section className="myCard">
            {props.projects.map(project => (
            <section key={project.id} className="cardish">
                <p className="project-title">{project.name}</p>
                <a href={project.gitHub}>
                    <img alt="Github" src={github} className="svg"></img>
                </a>    
                <a href={project.link}>
                    <img alt="Link" src={link} className="svg"></img>
                </a>
                <img className="card-image-top imgs" src={require(`../../assets/images/${project.name.replace()}.PNG`).default}></img>
            </section>
            ))}
        </section>
    )
}

export default Project;