import { Link } from "react-router-dom";

import project3 from "../assets/images/project3.png";
import logo from "../assets/images/logo_my_porto.svg";
import icon from "../assets/images/ikon_dokumen.svg";
import iconSource from "../assets/images/ikon_source.png";
import techIcon from "../assets/images/ikon_underline.png";
import codeIcon from "../assets/images/ikon_code.svg";

function ProjectHalamanPengguna3() {
  return (
    <div className="p3-page">
      <header className="p3-navbar">
        <div className="p3-navbar-container">
          <div className="p3-navbar-left">
            <button className="p3-menu-button" type="button" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="p3-logo">
              <img src={logo} alt="Logo MyPorto" />
              <span>MyPorto</span>
            </div>
          </div>

          <div className="p3-icon-circle">
            <img src={icon} alt="User Icon" />
          </div>
        </div>
      </header>

      <main className="p3-main">
        <section className="p3-layout">
          <div className="p3-content">
            <Link to="/portfolio" className="p3-back-btn">
              ← Back
            </Link>

            <h1>Poster Promosi Event Seminar Teknologi</h1>

            <div className="p3-blue-line"></div>

            <p>
              Mendesain poster digital untuk promosi seminar teknologi dengan
              visual yang menarik dan informatif. Poster dirancang untuk
              kebutuhan media sosial dan publikasi online.
            </p>

            <button className="p3-source-btn" type="button">
              <img src={iconSource} alt="Source icon" />
              <span>Source</span>
            </button>

            <div className="p3-tech-area">
              <h4>
                <img src={techIcon} alt="Technology icon" />
                Technology Used
              </h4>

              <div className="p3-tech-list">
                <span>Canva</span>
                <span>Adobe Photoshop</span>
              </div>
            </div>
          </div>

          <div className="p3-image-side">
            <div className="p3-image-wrapper">
              <img
                src={project3}
                alt="Poster Promosi Event"
                className="p3-image"
              />

              <div className="p3-image-icon">
                <img src={codeIcon} alt="Code icon" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectHalamanPengguna3;