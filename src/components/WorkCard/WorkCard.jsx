import React from "react";

class WorkCard extends React.Component {
  render() {
    return (
      <section className="work">
        <div className="work__card-container">
          <img
            className="work__image"
            src={process.env.PUBLIC_URL + this.props.image}
            alt="project"
          />
          <div className="work__image-info">
            <span>
              <h2 className="work__title">{this.props.title}</h2>
              <p className="work__description">{this.props.description}</p>
              <p className="work__year">{this.props.year}</p>
              <a
                className="work__link-tag"
                href={
                  this.props.title === "loblaw digital"
                    ? "https://gitlab.lblw.ca/zemen.teshome"
                    : "https://github.com/zementeshome"
                }
                target="_blank"
                rel="noreferrer"
              >
                <p className="work__link">{this.props.link}</p>
              </a>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkCard;
