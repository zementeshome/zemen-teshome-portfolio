import React from 'react'
import Header from './../Header/Header';
import './About.scss';

class About extends React.Component {

myDivToFocus = React.createRef()

handleOnClick = (e) => {
    let div = document.getElementsByClassName("about__text")
    div = {display: 'block'};
    if(this.myDivToFocus.current) {
        this.myDivToFocus.current.scrollIntoView({
            style: 'block',
            behavior: 'smooth',
            block: 'nearest'
        })
    }
}
render() {
    return (
        <section className="about">
            <Header />
        <div className="about__image-container">
        <img className="about__image" src={process.env.PUBLIC_URL + 'assets/images/memoji-laptop.png'} alt="zemen memoji"/>
        </div>
        <button className="about__button" onClick={this.handleOnClick}>Click me</button>
            <div className="about__text" ref={this.myDivToFocus}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                {/* <p className="about__text">Hello</p> */}
            </div>
        </section>
    )
}

}

export default About;
