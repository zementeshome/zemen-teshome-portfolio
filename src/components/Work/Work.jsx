import React from 'react'
import WorkCard from './../WorkCard/WorkCard';
import Header from './../Header/Header';
import './Work.scss';
// import { FaGithub } from 'react-icons/fa'

function Work(props) {
    return (
        <section className="work">
            <Header />
        <h1 className="work__header">WORK</h1>
        {/* <p className="work__github"> <FaGithub size={30} style={{color: 'white'}}/></p> */}
        <div className="work__container">
            {props.work.map((workInfo) => <WorkCard key={workInfo.id} image={workInfo.image} title={workInfo.title} description={workInfo.description} year={workInfo.year} link={workInfo.link}/>)}
        </div>
        {/* <img src={process.env.PUBLIC_URL + 'assets/images/github.png'} alt="github"/> */}
        </section>
    );
};

export default Work;