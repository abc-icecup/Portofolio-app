import { Link } from "react-router-dom";
import "./ProjectDetails.css";

import project1 from "../assets/images/project1.png";
import logo from "../assets/images/logo_my_porto.svg";
import icon from "../assets/images/ikon_dokumen.svg";
import iconSource from "../assets/images/ikon_source.png";
import techIcon from "../assets/images/ikon_underline.png";
import codeIcon from "../assets/images/ikon_code.svg";

function ProjectDetails() {
  return (
    <div className="p1-page">
      <header className="p1-navbar">
        <div className="p1-navbar-container">
          <div className="p1-navbar-left">
            <button className="p1-menu-button" type="button" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="p1-logo">
              <img src={logo} alt="Logo MyPorto" />
              <span>MyPorto</span>
            </div>
          </div>

          <div className="p1-icon-circle">
            <img src={icon} alt="Icon Portfolio" />
          </div>
        </div>
      </header>

      <main className="p1-main">
        <section className="p1-layout">
          <div className="p1-content">
            <Link to="/portfolio" className="p1-back-btn">
              ← Back
            </Link>

            <h1>Website E-Commerce Fashion (Frontend)</h1>

            <div className="p1-blue-line"></div>

            <p>
              Membangun antarmuka website e-commerce fashion yang responsif dan
              interaktif. Website ini menampilkan katalog produk, fitur
              pencarian, dan halaman detail produk dengan pengalaman pengguna
              yang modern.
            </p>

            <button className="p1-source-btn" type="button">
              <img src={iconSource} alt="Source icon" />
              <span>Source</span>
            </button>

            <div className="p1-tech-area">
              <h4>
                <img src={techIcon} alt="Technology icon" />
                Tools Used
              </h4>

              <div className="p1-tech-list">
                <span>Axios</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Javascript</span>
              </div>
            </div>
          </div>

          <div className="p1-image-side">
            <div className="p1-image-wrapper">
              <img src={project1} alt="Project Detail" className="p1-image" />

              <div className="p1-image-icon">
                <img src={codeIcon} alt="Code icon" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectDetails;