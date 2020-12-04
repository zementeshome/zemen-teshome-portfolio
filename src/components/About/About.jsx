import React from 'react'
import Header from './../Header/Header';
import './About.scss';
// import { Link } from 'react-scroll';

class About extends React.Component {


// myDivToFocus = React.createRef()

// handleOnClick = (e) => {
//     // let div = document.getElementsByClassName("about__text")
//     // div = {display: 'block'};
//     if(this.myDivToFocus.current) {
//         this.myDivToFocus.current.scrollIntoView({
//             style: 'block',
//             behavior: 'smooth',
//             block: 'nearest'
//         })
//     }
// }
render() {
    // console.log(Link)
    return (
        <div>
            <Header />
            <section className="about">
            <div className="about__content">
                <h2 className="about__header">Section One Text Block Reveal</h2>
                <h3 className="about__sub-heading">Text Block Reveal On Page Scroll</h3>
                <p className="about__words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="about__more">Read More</button>
            </div>
            </section>
            <section className="about">
                <div className="about__content">
                <h2 className="about__header">Section Two Text Block Reveal</h2>
                <h3 className="about__sub-heading">Text Block Reveal On Page Scroll</h3>
                <p className="about__words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="about__more">Read More</button>
                </div>
            </section>
            <section className="about">
                <div className="about__content">
                <h2 className="about__header">Section Three Text Block Reveal</h2>
                <h3 className="about__sub-heading">Text Block Reveal On Page Scroll</h3>
                <p className="about__words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="about__more">Read More</button>
                </div>
            </section>
            <section className="about">
                <div className="about__content">
                <h2 className="about__header">Section Four Text Block Reveal</h2>
                <h3 className="about__sub-heading">Text Block Reveal On Page Scroll</h3>
                <p className="about__words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="about__more">Read More</button>
                </div>
            </section>
            <section className="about">
                <div className="about__content">
                <h2 className="about__header">Section Five Text Block Reveal</h2>
                <h3 className="about__sub-heading">Text Block Reveal On Page Scroll</h3>
                <p className="about__words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="about__more">Read More</button>
                </div>
            </section>
            {/* <script src="scroll-out.js"></script>
            <script type="text/javascript">
                Scroll
            </script> */}
            </div>
    )
}

}

{/* <div className="about__image-container">
        <img className="about__image" src={process.env.PUBLIC_URL + 'assets/images/memoji-laptop.png'} alt="zemen memoji"/>
        </div>
        {/* <Link smooth={true} to="aboutext" duration={1000}className="about__scroll">hey</Link> */}
            // <div className="about__text" id="aboutext">
            // <h2 className="about__header">About Me</h2>
            // Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                {/* <p className="about__text">Hello</p> */}
    

export default About;
