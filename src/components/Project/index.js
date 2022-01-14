import React from 'react'
import github from '../../assets/images/iconmonstr-github-1.svg'

function Project(props) {
    return (
        <div className="aboutClass">
            <h1 className="homeTitle text">My Projects</h1>
        <section className="myCard">
            {props.projects.map(project => (
            <section key={project.id} className="cardish">
                <p className="project-title text">{project.name}</p>
                <a href={project.gitHub} target="_blank">
                    <img alt="Github" src={github} className="svg"></img>
                </a>    
                    <a href={project.link} target="_blank">
                        <img className="card-image-top imgs" src={require(`../../assets/images/${project.name.replace()}.PNG`).default}/>
                    </a>
            </section>
            ))}
        </section>
        </div>
    )
}

export default Project;