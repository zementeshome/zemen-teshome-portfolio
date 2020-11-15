import React from 'react'
import WorkCard from './../WorkCard/WorkCard';
import './Work.scss';

function Work(props) {
    return (
        <section className="work">
        <h1 className="work__header">WORK</h1>
        <div className="work__container">
            {props.work.map((workInfo) => <WorkCard key={workInfo.id} image={workInfo.image} title={workInfo.title} description={workInfo.description} year={workInfo.year}/>)}
        </div>
        </section>
    );
};

export default Work;