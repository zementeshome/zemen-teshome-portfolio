import React, { useRef, useEffect, useState } from 'react'
import Header from './../Header/Header';
import './About.scss';
import gsap from 'gsap';
import  { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBorderNone } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll} from 'react-scroll'
import AboutImage from '../AboutImage/AboutImage';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaTerminal } from 'react-icons/fa';
import { SiMicrosoftoffice } from 'react-icons/si';



gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: 'ABOUT ME',
        subtitle: "hi, i'm zemen and i build things. i'm a full stack developer with a professional background in public relations and communications. i recently made the transition into tech and i've been loving every second of it. i'm passionate about building user-friendly, accessible, nice-to-look at websites. when i'm not coding, i'm usually digging for music."
    },
    {
        title: 'SKILLS',
        subtitle: ''
    },
]

function About() {

    const [background, setBackground] = useState('#000000');
    // const [scroll, setScroll] = useState(false);

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
                toggleActions: 'play none none reverse'
            }
        });
    })

    },[])

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }  
    };

    // const scrollDown = () => {
    //     scroll ? setScroll('about__section-id') : setScroll(false)
    // }
    console.log(scroll.scrollToTop)
    return(
        <section className="about">
            <Header/>
            <div className="about__image-container" ref={aboutRef}>
                <AboutImage />
        {/* <img className="about__image" src={process.env.PUBLIC_URL + 'assets/images/memoji-laptop.png'} alt="zemen memoji"/> */}
        <ScrollLink className="about__scroll" to="me" smooth={true} duration={1000}><img className="about__arrow" src={process.env.PUBLIC_URL + '/assets/images/iconmonstr-arrow-65.svg'} alt=""/></ScrollLink>
        </div>
        <section className="about__section-2" id="me">
            {/* <div className="about__text-container">
            <h1 className="about__header">ABOUT ME</h1>
            <p className="about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div> */}
            {
                sections.map(({title, subtitle}) => {
                    return (
                        <div key={title} className="about__text-container" ref={addToRefs}>
                            <h2 className="about__header">{title}</h2>
                            <div className="about__text-box">
                            <p className="about__text">{subtitle}</p>
                            </div>
                        </div>
                    )
                })
            }
            <div className="about__skills" ref={addToRefs}>
            <p className="about__skills-icon"><FaHtml5 /></p>
            <p className="about__skills-icon"><FaCss3Alt /> </p>
            <p className="about__skills-icon"><FaSass /> </p>
            <p className="about__skills-icon"> <FaJs /> </p>
            <p className="about__skills-icon"> <FaReact /> </p>
            <p className="about__skills-icon"> <FaAngular /> </p>
            </div>
            <div className="about__skills-second" ref={addToRefs}>
            <p className="about__skills-icon"><FaNodeJs /> </p>
            <p className="about__skills-icon"><SiFirebase /></p>
            <p className="about__skills-icon"><SiMysql /></p>
            <p className="about__skills-icon"> <FaGithub /></p>
            <p className="about__skills-icon"><FaTerminal /></p>
            <p className="about__skills-icon"><SiMicrosoftoffice /></p>
            </div>
            <img className="about__scroll-top" ref={aboutRef} src={process.env.PUBLIC_URL + 'assets/images/iconmonstr-arrow-66.svg'} alt="arrow" onClick={() => {
          scroll.scrollToTop()   
        }}/>
            {/* <button className="about__button" onClick={() => {
          scroll.scrollToTop();
        }}>scroll to top</button> */}
            </section>
        </section>
    )
}
export default About;
