import React from 'react'
import github from '../../assets/images/iconmonstr-github-1.svg'
import linkedin from '../../assets/images/iconmonstr-linkedin-2.svg'
import gmail from '../../assets/images/icons8-gmail.svg'

function Footer() {
    return (
        <div className="footer">
            <a href='https://github.com/eliassaunders' target="_blank">
                <img className="footerC" src={github}></img>
            </a>
            <a href='https://www.linkedin.com/in/elias-saunders-5a0389208/' target="_blank">
                <img className="footerC" src={linkedin}></img>
            </a>
            <a href='https://mail.google.com/mail/?to=eliasashtonsaunders@gmail.com#compose' target="_blank">
                <img className="footerC" src={gmail}></img>
            </a>
        </div>
    )
}

export default Footer;