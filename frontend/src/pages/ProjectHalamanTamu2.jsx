import { Link } from "react-router-dom";

import project2 from "../assets/images/project2.png";
import logo from "../assets/images/logo_my_porto.svg";
import iconSource from "../assets/images/ikon_source.png";
import techIcon from "../assets/images/ikon_underline.png";
import codeIcon from "../assets/images/ikon_code.svg";

function ProjectHalamanTamu2() {
  return (
    <div className="gt2-page">
      <header className="gt2-navbar">
        <div className="gt2-navbar-container">
          <div className="gt2-logo">
            <img src={logo} alt="Logo MyPorto" />
            <span>MyPorto</span>
          </div>

          <div className="gt2-auth-buttons">
            <Link to="/signin" className="gt2-auth-btn gt2-sign-in-btn">
              Sign In
            </Link>
            <Link to="/signup" className="gt2-auth-btn gt2-sign-up-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="gt2-main">
        <section className="gt2-layout">
          <div className="gt2-content">
            <Link to="/portfolio-tamu" className="gt2-back-btn">
              ← Back
            </Link>

            <h1>UI/UX Design Aplikasi Mobile Belajar Online</h1>

            <div className="gt2-blue-line"></div>

            <p>
              Merancang desain UI/UX untuk aplikasi mobile pembelajaran online
              dengan fokus pada kemudahan navigasi dan pengalaman pengguna.
              Desain mencakup halaman onboarding, dashboard, dan halaman kursus.
            </p>

            <button className="gt2-source-btn" type="button">
              <img src={iconSource} alt="Source icon" />
              <span>Source</span>
            </button>

            <div className="gt2-tech-area">
              <h4>
                <img src={techIcon} alt="Technology icon" />
                Technology Used
              </h4>

              <div className="gt2-tech-list">
                <span>Figma</span>
                <span>Adobe Illustrator</span>
              </div>
            </div>
          </div>

          <div className="gt2-image-side">
            <div className="gt2-image-wrapper">
              <img
                src={project2}
                alt="UI/UX Design Aplikasi Mobile Belajar Online"
                className="gt2-image"
              />

              <div className="gt2-image-icon">
                <img src={codeIcon} alt="Code icon" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectHalamanTamu2;