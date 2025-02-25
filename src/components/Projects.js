import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    // Gère l'ouverture/fermeture du modal
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };
    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    // Configuration du slider
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3, // 3 slides en desktop
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,     // Sous 768px, on passe à 1 slide
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    let sectionName, projects;

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.projects;

      // On recrée vos "miniatures" mais on les met chacune dans un <div> pour le carousel
      projects = this.props.resumeProjects.map((project, index) => {
        return (
            <div key={index}className="d-flex justify-content-center">

              <div
                  className="col-sm-12 col-md-6 col-lg-8"
                  style={{ cursor: "pointer" }}
              >
              <span className="portfolio-item d-block">
                <div className="foto" onClick={() => detailsModalShow(project)}>
                  <div>
                    <img
                        src={project.images[0]}
                        alt="projectImages"
                        height="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                    />
                    <span className="project-date">{project.startDate}</span>
                    <br />
                    <p className="project-title-settings mt-3">
                      {project.title}
                    </p>
                  </div>
                </div>
              </span>
              </div>
            </div>
        );
      });
    }

    return (
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>

            {/* On remplace la row bootstrap par le slider */}
            <div className="col-md-12 mx-auto">
              <Slider {...settings}>
                {projects}
              </Slider>
            </div>

            {/* Modal pour les détails du projet */}
            <ProjectDetailsModal
                show={this.state.detailsModalShow}
                onHide={detailsModalClose}
                data={this.state.deps}
            />
          </div>
        </section>
    );
  }
}

export default Projects;
