import React from 'react'
import Header from './../Header/Header';
import './Contact.scss';

function Contact() {
        return (
            <section className="contact">
                <Header />
                <h1 className="contact__header">CONTACT</h1>
                <h2 className="contact__sub-heading">EMAIL</h2>
                <p className="contact__info">zementeshome@gmail.com</p>
                <h2 className="contact__sub-heading">LINKEDIN</h2>
                <p className="contact__info">linkedin.com/zementeshome</p>
                <h2 className="contact__sub-heading">GITHUB</h2>
                <p className="contact__info">github.com/zementeshome</p>
            <img className="contact__image" src={process.env.PUBLIC_URL + '/assets/images/v1.svg'} alt="background"/>
            </section>
        )
    }

export default Contact;