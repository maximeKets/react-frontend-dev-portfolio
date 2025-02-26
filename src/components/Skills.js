import React, {Component} from "react";

class Skills extends Component {
    render() {
        let sectionNameSkill, skills, cards, sectionNameInspiration;

        if (this.props.sharedSkills && this.props.resumeBasicInfo) {
            sectionNameSkill = this.props.resumeBasicInfo.section_name.skills;
            sectionNameInspiration = this.props.resumeBasicInfo.section_name.inspirations;
            skills = this.props.sharedSkills.icons.map((skill, i) => {
                return (
                    <li className="list-inline-item mx-3" key={i}>
                        <div className="text-center skills-tile ">
                            <span className="material-icons" style={{fontSize: "220%"}}>
                                {skill.iconName}
                            </span>
                            <p className="text-center" style={{fontSize: "60%", marginTop: "4px"}}>
                                {skill.name}
                            </p>
                        </div>
                    </li>
                );
            });

            if (this.props.sharedSkills.cards) {
                cards = this.props.sharedSkills.cards.map((card, index) => {
                    return (
                        <li className="list-inline-item mx-3 mb-4" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={card.img} alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title text-dark ">{card.title}</h4>
                                    <p className="card-text text-dark ">{card.text}</p>
                                </div>
                            </div>
                        </li>
                    );
                });
            }
        }

        return (
            <section id="skills">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <h1 className="section-title">
                            <span className="text-white">{sectionNameSkill}</span>
                        </h1>
                    </div>

                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                    </div>

                    <div className="col-md-12">
                        <h1 className="section-title">
                            <span className="text-white">{sectionNameInspiration}</span>
                        </h1>
                    </div>

                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto ">{cards}</ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
