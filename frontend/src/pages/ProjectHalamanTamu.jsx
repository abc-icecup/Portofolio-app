import { Link } from "react-router-dom";
import "./ProjectHalamanTamu.css";

import project1 from "../assets/images/project1.png";
import logo from "../assets/images/logo_my_porto.svg";
import iconSource from "../assets/images/ikon_source.png";
import techIcon from "../assets/images/ikon_underline.png";
import codeIcon from "../assets/images/ikon_code.svg";

function ProjectHalamanTamu1() {
  return (
    <div className="gt1-page">
      <header className="gt1-navbar">
        <div className="gt1-navbar-container">
          <div className="gt1-logo">
            <img src={logo} alt="Logo MyPorto" />
            <span>MyPorto</span>
          </div>

          <div className="gt1-auth-buttons">
            <Link to="/signin" className="gt1-auth-btn gt1-sign-in-btn">
              Sign In
            </Link>
            <Link to="/signup" className="gt1-auth-btn gt1-sign-up-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="gt1-main">
        <section className="gt1-layout">
          <div className="gt1-content">
            <Link to="/portfolio-tamu" className="gt1-back-btn">
              ← Back
            </Link>

            <h1>Website E-Commerce Fashion (Frontend)</h1>

            <div className="gt1-blue-line"></div>

            <p>
              Membangun antarmuka website e-commerce fashion yang responsif dan
              interaktif. Website ini menampilkan katalog produk, fitur
              pencarian, dan halaman detail produk dengan pengalaman pengguna
              yang modern.
            </p>

            <button className="gt1-source-btn" type="button">
              <img src={iconSource} alt="Source icon" />
              <span>Source</span>
            </button>

            <div className="gt1-tech-area">
              <h4>
                <img src={techIcon} alt="Technology icon" />
                Technology Used
              </h4>

              <div className="gt1-tech-list">
                <span>Axios</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Javascript</span>
              </div>
            </div>
          </div>

          <div className="gt1-image-side">
            <div className="gt1-image-wrapper">
              <img
                src={project1}
                alt="Website E-Commerce Fashion"
                className="gt1-image"
              />

              <div className="gt1-image-icon">
                <img src={codeIcon} alt="Code icon" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectHalamanTamu1;