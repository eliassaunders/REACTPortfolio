import React from 'react';

function Contact() {

    return (
        <div className="contactDiv">
            <form className="contactForm" onSubmit={verify}>

                <h1 className="formTitle">Contact Me:</h1>

                <br/>

                <input placeholder="Enter full name" className="name-input"></input>

                <input placeholder="Enter email" className="email-input"></input>

                <textarea placeholder="Contact Body" className="body-text"></textarea>

                <button type='submit' className="buttun" onClick={verify}>Submit</button>

        
        </form>
        
         </div >
    )

    function verify(event) {
        const name = document.querySelector('.name-input')
        const email = document.querySelector('.email-input')
        const body = document.querySelector('.body-text')
    
        console.log('hello')
    
        if (!name || !email || !body) {
            alert('You need to complete all fields.')
        }
        if (email !== /.+\@.+\..+/) {
            alert('You need to enter a valid email address.')
        }
    }
    
}




export default Contact