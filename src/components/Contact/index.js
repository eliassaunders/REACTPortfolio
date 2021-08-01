import React from 'react';

function Contact () {
    return (
        <div>
        <form className="contactForm">

            <h1>Contact Me</h1>

            <input placeholder="Enter full name" className="name-input"></input>

           <input placeholder="Enter email" className="email-input"></input> 

           <textarea placeholder="Contact Body" className="body-text"></textarea>

           <button type='submit' className="buttun">Submit</button>

        
        </form>
        
         </div>
    )
}

export default Contact