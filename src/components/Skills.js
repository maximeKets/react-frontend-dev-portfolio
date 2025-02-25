import React, { Component } from "react";

class Skills extends Component {
    render() {
        let sectionName, skills, cards;

        // Vérifier la disponibilité des données
        if (this.props.sharedSkills && this.props.resumeBasicInfo) {
            // Récupération du nom de section
            sectionName = this.props.resumeBasicInfo.section_name.skills;

            // 1) Mapper les "icons" (compétences)
            skills = this.props.sharedSkills.icons.map((skill, i) => {
                return (
                    <li className="list-inline-item mx-3" key={i}>
                        <div className="text-center skills-tile">
              <span className="material-icons" style={{ fontSize: "220%" }}>
                {skill.iconName}
              </span>

                            <p
                                className="text-center"
                                style={{ fontSize: "60%", marginTop: "4px" }}
                            >
                                {skill.name}
                            </p>
                        </div>
                    </li>
                );
            });

            // 2) Mapper les "cards" (si elles existent)
            if (this.props.sharedSkills.cards) {
                cards = this.props.sharedSkills.cards.map((card, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    className="card-img-top"
                                    src={card.img}
                                    alt="Card illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                });
            }
        }

        return (
            <section id="skills">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <h1 className="section-title">
                            <span className="text-white">{sectionName}</span>
                        </h1>
                    </div>


                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                    </div>


                    {cards && (
                        <div className="row justify-content-center mt-4">
                            {cards}
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Skills;
