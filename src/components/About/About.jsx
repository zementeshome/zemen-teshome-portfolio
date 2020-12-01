import React from 'react'
import Header from './../Header/Header';
import './About.scss';

function About() {
    return (
        <section className="about">
            <Header />
        <div className="about__image-container">
        <img className="about__image" src={process.env.PUBLIC_URL + 'assets/images/memoji-laptop.png'} alt="zemen memoji"/>
        </div>
        </section>
    )
}

export default About;
