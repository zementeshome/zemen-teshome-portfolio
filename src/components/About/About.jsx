import React, { useRef, useEffect, useState } from 'react'
import Header from './../Header/Header';
import './About.scss';
import gsap from 'gsap';
import  { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBorderNone } from 'react-icons/fa';
// import { useEffect } from 'react'
// import ScrollOut from 'scroll-out';
// import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: 'title 1',
        subtitle: 'subtitle 1'
    },
    {
        title: 'title 2',
        subtitle: 'subtitle 2'
    },
    {
        title: 'title 3',
        subtitle: 'subtitle 3'
    }
]

function About() {

    const [background, setBackground] = useState('#262626')

    const aboutRef = useRef(null)
    const revealRefs = useRef([]);
    revealRefs.current = [];

    const toggleBackground = () => {
        const color = background !== '#262626' ? '#5a7d95' : '#1b4943'
        setBackground(color);
    }

    useEffect(() => {
        gsap.to(aboutRef.current, {
            duration: 1,
            backgroundColor: background,
            ease: 'none'
        });
    }, [background])

    useEffect(() => {
        gsap.from(aboutRef.current, {
        duration: 1, 
        autoAlpha:0, 
        ease: 'none',
        delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        gsap.fromTo(el, {
            autoAlpha: 0
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                id: `section-${index+1}`,
                trigger: el,
                start: 'top center+=100',
                toggleActions: 'play none none reverse',
                markers: true
            }
        });
    })

    },[])

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }  
    };

    return(
        <section className="about">
            <Header/>
            <div className="about__image-container" ref={aboutRef}>
        <img className="about__image" src={process.env.PUBLIC_URL + 'assets/images/memoji-laptop.png'} alt="zemen memoji"/>
        <button className="about__button" onClick={() => toggleBackground()}>click me</button>
        </div>
        <section className="about__section-2">
            {/* <div className="about__text-container">
            <h1 className="about__header">ABOUT ME</h1>
            <p className="about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div> */}
            {
                sections.map(({title, subtitle}) => {
                    return (
                        <div key={title} className="about__text-container" ref={addToRefs}>
                            <h2 className="about__header">{title}</h2>
                            <p className="about__text">{subtitle}</p>
                        </div>
                    )
                })
            }
            </section>
        </section>
    )
}
export default About;
