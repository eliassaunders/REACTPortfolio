import React, { useState } from 'react';
import me from '../../assets/images/me.jpg'

function About() {
    return (
        <div className="aboutClass">
            <h1 className="homeTitle">About Me:</h1>
            <br/>
            <article className="article">
                <p className="textc">I was born and raised in Tucson, Arizona. I always had an interest in computers and sofware development. 
                From an early age I was trying to develop video games. 
                While none of these turned out, it was an introduction into the coding workspace. 
                Now, due to the effects of COVID-19, I am taking a class to get certified in fullstack web development.</p>
            </article>
            <img className="me" src={me}></img>
         </div>
    )
}

export default About;