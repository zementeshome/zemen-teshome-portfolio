import React from 'react'
import Header from './../Header/Header';
import './Contact.scss';

function Contact() {
        return (
            <section className="contact">
                <Header />
                <h1 className="contact__header">CONTACT</h1>
                  <p className="contact__message">drop me a line</p>
            <div className="contact__container">
                <h2 className="contact__sub-heading">email</h2>
                  <a className="contact__link" href="mailto: zementeshome@gmail.com" target="_blank" rel="noreferrer"><p className="contact__info">zementeshome@gmail.com</p></a>
                <h2 className="contact__sub-heading">linkedin</h2>
                  <a className="contact__link" href="https://www.linkedin.com/in/zementeshome/" target="_blank" rel="noreferrer"><p className="contact__info">linkedin.com/zementeshome</p></a>
                <h2 className="contact__sub-heading">github</h2>
                  <a className="contact__link" href="https://github.com/zementeshome" target="_blank" rel="noreferrer"><p className="contact__info">github.com/zementeshome</p></a>
            </div>
                <h2 className="contact__sub-heading">credits</h2>
                  <a className="contact__link" href="https://www.instagram.com/gemini_baybee_/" target="_blank" rel="noreferrer"> <p className="contact__credit">background design on home page done by <span>zena teferi</span></p></a>
          </section>
        )
    }
    
export default Contact;