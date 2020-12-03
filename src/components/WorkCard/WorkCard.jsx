import React from 'react';
import { Link } from 'react-router-dom';
// import { FaGithub } from 'react-icons/fa';

class WorkCard extends React.Component {
    render() {
        return (
            <section className="work">
                <div className="work__card-container">
                <img className="work__image" src={process.env.PUBLIC_URL + this.props.image} alt="project"/>
                <div className="work__image-info">
                <h2 className="work__title">{this.props.title}</h2>
                 <p className="work__description">{this.props.description}</p>
                <p className="work__year">{this.props.year}</p>
                <a className="work__link-tag" href="https://github.com/zementeshome" target="_blank" rel="noreferrer">
                <p className="work__link">{this.props.link}</p></a>
                </div>
                {/* <p className="work__github"> <FaGithub size={30} style={{color: 'white'}}/></p> */}
                </div>
            </section>
        )
    }
}

export default WorkCard;

