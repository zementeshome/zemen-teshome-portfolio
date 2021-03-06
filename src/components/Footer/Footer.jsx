import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa';
import './Footer.scss';
import { FaEnvelope } from 'react-icons/fa'


function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="footer__container">
                <a className="footer__link" href="https://github.com/zementeshome" target="_blank" rel="noreferrer"><p className="footer__github"> <FaGithub /></p></a>
                <a className="footer__link" href="https://www.linkedin.com/in/zementeshome/" target="
                _blank" rel="noreferrer"><p className="footer__linkedin"> <FaLinkedinIn /></p></a>
                <a className="footer__link" href="mailto: zementeshome@gmail.com" rel="noreferrer" target="_blank"><p className="footer__gmail"> <FaEnvelope /></p></a>
           </div>
        </section>
      )
    }

export default Footer;
