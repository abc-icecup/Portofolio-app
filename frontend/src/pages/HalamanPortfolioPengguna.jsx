import { useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio-pengguna.css";

import CertificatePortrait from "../components/CertificatePortrait";
import CertificateLandscape from "../components/CertificateLandscape";

import logo from "../assets/images/logo_my_porto.svg";
import menuIcon from "../assets/images/ikon_menu.svg";
import documentIcon from "../assets/images/ikon_dokumen.svg";
import linkIcon from "../assets/images/ikon_link.svg";
import profile1 from "../assets/images/profile1.svg";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

import serti1 from "../assets/images/serti1.png";
import serti2 from "../assets/images/serti2.png";

import figmaIcon from "../assets/images/ikon_figma.png";
import reactIcon from "../assets/images/ikon_react.png";
import nodeIcon from "../assets/images/ikon_nodejs.png";
import canvaIcon from "../assets/images/ikon_canva.png";

function HalamanPortfolioPengguna() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="pf-page">
      <header className="pf-navbar">
        <div className="pf-navbar-container">
          <div className="pf-navbar-left">
            <button className="pf-menu-button" type="button" aria-label="Menu">
              <img src={menuIcon} alt="Menu" />
            </button>

            <div className="pf-logo">
              <img src={logo} alt="Logo MyPorto" />
              <span>MyPorto</span>
            </div>
          </div>

          <div className="pf-icon-circle">
            <img src={documentIcon} alt="Icon Dokumen" />
          </div>
        </div>
      </header>

      <main className="pf-main">
        <section className="pf-card">
          <h2>Welcome To My Portofolio</h2>

          <section className="pf-intro">
            <div className="pf-intro-text">
              <h4>Hello, I’m</h4>
              <h1>Jamal</h1>
              <p>
                Seorang engineer yang berfokus pada pengembangan aplikasi web
                modern dengan pengalaman dalam membangun antarmuka interaktif,
                menggunakan React dan sistem backend pendukung. Memiliki
                ketertarikan kuat pada desain yang bersih, performa aplikasi,
                serta pengalaman pengguna yang baik untuk kebutuhan proyek
                profesional.
              </p>
            </div>

            <div className="pf-photo-wrapper">
              <img src={profile1} alt="Profile Jamal" className="pf-photo" />
            </div>
          </section>

          <section className="pf-skills">
            <h3>Skills</h3>

            <div className="pf-skill-list">
              <div className="pf-skill-card">
                <img src={figmaIcon} alt="Figma" />
                <span>Figma</span>
              </div>

              <div className="pf-skill-card">
                <img src={reactIcon} alt="React" />
                <span>React</span>
              </div>

              <div className="pf-skill-card">
                <img src={nodeIcon} alt="Node.js" />
                <span>Node.Js</span>
              </div>

              <div className="pf-skill-card">
                <img src={canvaIcon} alt="Canva" />
                <span>Canva</span>
              </div>
            </div>
          </section>

          <section className="pf-projects">
            <h3>Projects</h3>

            <div className="pf-project-list">
              <div className="pf-project-card">
                <img src={project1} alt="Website E-commerce" />

                <div className="pf-project-overlay">
                  <div className="pf-project-text">
                    <h4>Website E-Commerce Fashion (Frontend)</h4>

                    <Link to="/project-detail">
                      <button type="button">Detail</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pf-project-card">
                <img src={project2} alt="UI/UX Design Aplikasi Mobile" />

                <div className="pf-project-overlay">
                  <div className="pf-project-text">
                    <h4>UI/UX Design Aplikasi Mobile Travel Online</h4>

                    <Link to="/project-detail">
                      <button type="button">Detail</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pf-project-card">
                <img src={project3} alt="Poster Promosi Event" />

                <div className="pf-project-overlay">
                  <div className="pf-project-text">
                    <h4>Poster Promosi Event Seminar Arkeologi</h4>

                    <Link to="/project-detail">
                      <button type="button">Detail</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pf-certificates">
            <h3>Certificates</h3>

            <div className="pf-certificate-list">
              <button
                type="button"
                className="pf-certificate-card"
                onClick={() => setSelectedCertificate("portrait")}
              >
                <img src={serti1} alt="Certificate 1" />
              </button>

              <button
                type="button"
                className="pf-certificate-card"
                onClick={() => setSelectedCertificate("landscape")}
              >
                <img src={serti2} alt="Certificate 2" />
              </button>
            </div>
          </section>

          <section className="pf-contact">
            <h3>Contact</h3>

            <div className="pf-contact-item">
              <span className="pf-contact-icon">
                <img src={linkIcon} alt="Link Contact" />
              </span>

              <a href="mailto:jamal@gmail.com">jamal@gmail.com</a>
            </div>
          </section>
        </section>
      </main>

      {selectedCertificate === "portrait" && (
        <CertificatePortrait
          image={serti1}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      {selectedCertificate === "landscape" && (
        <CertificateLandscape
          image={serti2}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}

export default HalamanPortfolioPengguna;