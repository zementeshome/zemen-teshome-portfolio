import React from 'react'
import Header from './../Header/Header';
import './Contact.scss';

function Contact() {
        return (
            <section className="contact">
                <Header />
            <img className="contact__image" src={process.env.PUBLIC_URL + '/assets/images/v1.svg'} alt="background"/>
            </section>
        )
    }

export default Contact;