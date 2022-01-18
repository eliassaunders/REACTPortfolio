import React, { useState } from 'react';
import me from '../../assets/images/me.jpg'

function About() {
    return (
        <div className="aboutClass">
            <h1 className="homeTitle">About Me:</h1>
            <br/>
            <article className="article">
                <p className="textc">Born and raised in Tucson, Arizona, I have always had a passion for coding and technology. Now I am fullstack certified through Trilogy Education and the University of Arizona. Hence, I have created this portfolio to display my newfound skills. Tour the website for my contact info and projects I have completed along with the codebases.</p>
            </article>
            <img className="me" src={me}></img>
         </div>
    )
}

export default About;