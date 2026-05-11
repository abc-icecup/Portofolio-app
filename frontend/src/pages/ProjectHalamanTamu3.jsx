import { Link } from "react-router-dom";

import project3 from "../assets/images/project3.png";
import logo from "../assets/images/logo_my_porto.svg";
import iconSource from "../assets/images/ikon_source.png";
import techIcon from "../assets/images/ikon_underline.png";
import codeIcon from "../assets/images/ikon_code.svg";

function ProjectHalamanTamu3() {
  return (
    <div className="gt3-page">
      <header className="gt3-navbar">
        <div className="gt3-navbar-container">
          <div className="gt3-logo">
            <img src={logo} alt="Logo MyPorto" />
            <span>MyPorto</span>
          </div>

          <div className="gt3-auth-buttons">
            <Link to="/signin" className="gt3-auth-btn gt3-sign-in-btn">
              Sign In
            </Link>
            <Link to="/signup" className="gt3-auth-btn gt3-sign-up-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="gt3-main">
        <section className="gt3-layout">
          <div className="gt3-content">
            <Link to="/portfolio-tamu" className="gt3-back-btn">
              ← Back
            </Link>

            <h1>Poster Promosi Event Seminar Teknologi</h1>

            <div className="gt3-blue-line"></div>

            <p>
              Mendesain poster digital untuk promosi seminar teknologi dengan
              visual yang menarik dan informatif. Poster dirancang untuk
              kebutuhan media sosial dan publikasi online.
            </p>

            <button className="gt3-source-btn" type="button">
              <img src={iconSource} alt="Source icon" />
              <span>Source</span>
            </button>

            <div className="gt3-tech-area">
              <h4>
                <img src={techIcon} alt="Technology icon" />
                Technology Used
              </h4>

              <div className="gt3-tech-list">
                <span>Canva</span>
                <span>Adobe Photoshop</span>
              </div>
            </div>
          </div>

          <div className="gt3-image-side">
            <div className="gt3-image-wrapper">
              <img
                src={project3}
                alt="Poster Promosi Event"
                className="gt3-image"
              />

              <div className="gt3-image-icon">
                <img src={codeIcon} alt="Code icon" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectHalamanTamu3;