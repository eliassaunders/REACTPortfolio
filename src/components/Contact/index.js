import React from 'react';

function Contact() {

    return (
        <div className="contactDiv">
            <form className="contactForm" onSubmit={verify}>

                <h1 className="formTitle">Contact Me:</h1>

                <br/>

                <input placeholder="Enter full name" className="name-input" required></input>

                <input placeholder="Enter email" className="email-input" required></input>

                <textarea placeholder="Contact Body" className="body-text" required></textarea>

                <button type='submit' className="buttun">Submit</button>

        
        </form>
        
         </div >
    )

    function verify(event) {
        event.preventDefault()

        const name = document.querySelector('.name-input').value
        const email = document.querySelector('.email-input').value
        const body = document.querySelector('.body-text').value

        console.log(name)
        console.log(email)
        console.log(body)

    
        if (!name || !email || !body) {
            alert('You need to complete all fields.')
        }
        if (!email.match(/.+@.+\..+/)) {
            alert('You need to enter a valid email address.')
        } else {
            alert("Message Sent!")
        }
    }
    
}




export default Contact