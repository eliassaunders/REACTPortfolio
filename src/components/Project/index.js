import React from 'react'
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap'


function Project(props) {
    
    return (
        <section className="myCard">
            {props.projects.map(project => (
            <Card key={project.id} className="cardish">
                <CardTitle>{project.name}</CardTitle>
                <img className="card-image-top imgs" src={require(`../../assets/images/${project.name.replace()}.PNG`).default}></img>
            </Card>
            ))}
        </section>
    )
}

export default Project;