import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

function Footer() {
    return (
        <section className="footer">
            <div className="footer__container">
           <p className="footer__github"> <FaGithub size={30} style={{color: 'white'}}/></p>
           <p className="footer__linkedin"> <FaLinkedinIn size={30} style={{color: 'white'}}/></p>
           <p className="footer__gmail"> <FaGoogle size={30} style={{color: 'white'}}/></p>
           </div>
        </section>
    )
}

export default Footer;
