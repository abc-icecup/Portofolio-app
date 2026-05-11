import { Link } from "react-router-dom";

import project2 from "../assets/images/project2.png";
import logo from "../assets/images/logo_my_porto.svg";
import icon from "../assets/images/ikon_dokumen.svg";
import iconSource from "../assets/images/ikon_source.png";
import techIcon from "../assets/images/ikon_underline.png";
import codeIcon from "../assets/images/ikon_code.svg";

function ProjectHalamanPengguna2() {
  return (
    <div className="p2-page">
      <header className="p2-navbar">
        <div className="p2-navbar-container">
          <div className="p2-navbar-left">
            <button className="p2-menu-button" type="button" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="p2-logo">
              <img src={logo} alt="Logo MyPorto" />
              <span>MyPorto</span>
            </div>
          </div>

          <div className="p2-icon-circle">
            <img src={icon} alt="Icon Portfolio" />
          </div>
        </div>
      </header>

      <main className="p2-main">
        <section className="p2-layout">
          <div className="p2-content">
            <Link to="/portfolio" className="p2-back-btn">
              ← Back
            </Link>

            <h1>UI/UX Design Aplikasi Mobile Belajar Online</h1>

            <div className="p2-blue-line"></div>

            <p>
              Merancang desain UI/UX untuk aplikasi mobile pembelajaran online
              dengan fokus pada kemudahan navigasi dan pengalaman pengguna.
              Desain mencakup halaman onboarding, dashboard, dan halaman kursus.
            </p>

            <button className="p2-source-btn" type="button">
              <img src={iconSource} alt="Source icon" />
              <span>Source</span>
            </button>

            <div className="p2-tech-area">
              <h4>
                <img src={techIcon} alt="Technology icon" />
                Technology Used
              </h4>

              <div className="p2-tech-list">
                <span>Figma</span>
                <span>Adobe Illustrator</span>
              </div>
            </div>
          </div>

          <div className="p2-image-side">
            <div className="p2-image-wrapper">
              <img src={project2} alt="Project Detail" className="p2-image" />

              <div className="p2-image-icon">
                <img src={codeIcon} alt="Code icon" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectHalamanPengguna2;