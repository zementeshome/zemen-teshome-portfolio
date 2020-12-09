import React from 'react'
import Header from './../Header/Header';
import './Contact.scss';

function Contact() {
        return (
            <section className="contact">
                <Header />
                <h1 className="contact__header">CONTACT</h1>
                <p className="contact__message">let's get in touch</p>
                <div className="contact__container">
                <h2 className="contact__sub-heading">email</h2>
                <p className="contact__info">zementeshome@gmail.com</p>
                <h2 className="contact__sub-heading">linkedin</h2>
                <p className="contact__info">linkedin.com/zementeshome</p>
                <h2 className="contact__sub-heading">github</h2>
                <p className="contact__info">github.com/zementeshome</p>
                </div>
                {/* <hr /> */}
                <h2 className="contact__sub-heading">credits</h2>
                <a className="contact__link" href="https://www.instagram.com/gemini_baybee_/"> <p className="contact__credit">background design on home page done by <span>zena teferi</span></p></a>
            {/* <img className="contact__image" src={process.env.PUBLIC_URL + '/assets/images/v1.svg'} alt="background"/> */}
            </section>
        )
    }

export default Contact;