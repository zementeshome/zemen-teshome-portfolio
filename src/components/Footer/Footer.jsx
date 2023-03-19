import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";
import { FaEnvelope } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer__container">
        <a
          className="footer__link"
          href="mailto: zementeshome@gmail.com"
          rel="noreferrer"
          target="_blank"
          aria-label="email"
        >
          <p className="footer__gmail">
            {" "}
            <FaEnvelope />
          </p>
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/zementeshome/"
          target="
                _blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <p className="footer__linkedin">
            {" "}
            <FaLinkedinIn />
          </p>
        </a>
        <a
          className="footer__link"
          href="https://gitlab.lblw.ca/zemen.teshome"
          target="_blank"
          rel="noreferrer"
          aria-label="Gitlab"
        >
          <p className="footer__gitlab">
            {" "}
            <FaGitlab />
          </p>
        </a>
        <a
          className="footer__link"
          href="https://github.com/zementeshome"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <p className="footer__github">
            {" "}
            <FaGithub />
          </p>
        </a>
      </div>
    </section>
  );
}

export default Footer;
