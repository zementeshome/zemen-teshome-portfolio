import React from 'react';
import WorkCard from './../WorkCard/WorkCard';
import Header from './../Header/Header';
import './Work.scss';
import { animateScroll as scroll} from 'react-scroll';
import Arrow from '../../BackgroundImage/iconmonstr-arrow-66.svg';

function Work(props) {
    return (
        <section className="work">
            <Header />
            <h1 className="work__header">WORK</h1>
        <div className="work__container">
            {props.work.map((workInfo) => <WorkCard key={workInfo.id} image={workInfo.image} title={workInfo.title} description={workInfo.description} year={workInfo.year} link={workInfo.link}/>)}
        </div>
            <img className="work__scroll-top" src={Arrow} alt="arrow" onClick={() => {
          scroll.scrollToTop()   
        }}/>
      </section>
    );
  };

export default Work;