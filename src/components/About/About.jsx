import React, { useRef, useEffect, useState } from "react";
import Header from "./../Header/Header";
import "./About.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link as ScrollLink } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import AboutImage from "../AboutImage/AboutImage";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import Arrow from "../../BackgroundImage/iconmonstr-arrow-66.svg";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "ABOUT ME",
    subtitle:
      "hi, i'm zemen and i build things. i'm a software developer who is passionate about building user-friendly, accessible components. when i'm not coding, i'm usually digging for music.",
  },
  {
    title: "SKILLS",
    subtitle: "",
  },
];

function About() {
  const [background] = useState("#000000");

  const aboutRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.to(aboutRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: "ease",
    });
  }, [background]);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="about">
      <Header />
      <div className="about__image-container" ref={aboutRef}>
        <AboutImage />
        <ScrollLink
          className="about__scroll"
          to="me"
          smooth={true}
          duration={1000}
        >
          <img
            className="about__arrow"
            src={
              process.env.PUBLIC_URL + "/assets/images/iconmonstr-arrow-65.svg"
            }
            alt=""
          />
        </ScrollLink>
      </div>
      <section className="about__section-2" id="me">
        {sections.map(({ title, subtitle }) => {
          return (
            <div key={title} className="about__text-container" ref={addToRefs}>
              <h2 className="about__header">{title}</h2>
              <div className="about__text-box">
                <p className="about__text">{subtitle}</p>
              </div>
            </div>
          );
        })}
        <div className="about__skills" ref={addToRefs}>
          <div className="about__flex">
            <p className="about__skills-icon">
              <FaHtml5 />
            </p>
            <p className="about__skills-icon">
              <FaCss3Alt />{" "}
            </p>
            <p className="about__skills-icon">
              <FaSass />{" "}
            </p>
            <p className="about__skills-icon">
              {" "}
              <FaJs />{" "}
            </p>
            <p className="about__skills-icon">
              {" "}
              <FaReact />{" "}
            </p>
            <p className="about__skills-icon">
              {" "}
              <SiTypescript />{" "}
            </p>
            <p className="about__skills-icon">
              <FaNodeJs />{" "}
            </p>
            <p className="about__skills-icon">
              <SiFirebase />
            </p>
            <p className="about__skills-icon">
              <SiRedux />
            </p>
            <p className="about__skills-icon">
              <SiJest />
            </p>
            <p className="about__skills-icon">
              <SiStorybook />
            </p>
            <p className="about__skills-icon">
              {" "}
              <FaGithub />
            </p>
            <p className="about__skills-icon">
              <FaTerminal />
            </p>
          </div>
        </div>
        <img
          className="about__scroll-top"
          ref={aboutRef}
          src={Arrow}
          alt="arrow"
          onClick={() => {
            scroll.scrollToTop();
          }}
        />
      </section>
    </section>
  );
}
export default About;
