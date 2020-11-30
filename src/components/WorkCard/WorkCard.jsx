import React from 'react'

class WorkCard extends React.Component {
    render() {
        return (
            <section className="work">
                <div className="work__card-container">
                <div className="work__image-container">
                <h2 className="work__title">{this.props.title}</h2>
                </div>
                <img className="work__image" src={process.env.PUBLIC_URL + this.props.image} alt="project"/>
        <p className="work__description">{this.props.description}</p>
        <p className="work__year">{this.props.year}</p>
                </div>
            </section>
        )
    }
}

export default WorkCard;
