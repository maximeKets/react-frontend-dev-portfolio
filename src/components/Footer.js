import React, { Component } from "react";

class Footer extends Component {
  render() {
    let name, phone, email;

    // Récupérer les données depuis props
    if (this.props.sharedBasicInfo) {
      name = this.props.sharedBasicInfo.name;
      phone = this.props.sharedBasicInfo.phone; // Par ex. "123456789"
      email = this.props.sharedBasicInfo.email; // Par ex. "contact@exemple.com"
    }

    return (
        <footer>
          <div className="col-md-12">
            {/* Section liens (ici téléphone et email) */}
            <div className="social-links">
            <span className="m-4">
              {/* Lien tel */}
              <a href={phone ? `tel:${phone}` : "#"}>
                <i className="fa fa-phone"></i>
              </a>
            </span>
              <span className="m-4">
              {/* Lien mailto */}
                <a href={email ? `mailto:${email}` : "#"}>
                <i className="fa fa-envelope"></i>
              </a>
            </span>
            </div>

            {/* Section Copyright */}
            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  Copyright &copy;{" "}
                  {name ? name : "Inconnu"}
                </small>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
