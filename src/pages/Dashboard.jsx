import Sidebar from "../navigation/Sidebar";
import Topbar from "../navigation/Topbar";
import "./Dashboard.css";

import ProjectsIcon from "../assets/projectsLogo.svg?react";
import SkillsIcon from "../assets/skillsLogo.svg?react";
import CertificatesIcon from "../assets/certificatesLogo.svg?react";

import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import c1 from "../assets/cert1.jpg";
import c2 from "../assets/cert2.jpg";

export default function Dashboard() {
  const projects = [p1, p2, p3];
  const certificates = [c1, c2];
  const skills = ["Figma", "React", "Node.js", "Canva"];

  return (
    <div>
      <Topbar />
      <Sidebar />

        <div className="content">
          <div className="title">
            <h1>Your Portofolio</h1>
            <span>⭐</span>
          </div>

          {/* STAT */}
          <div className="stats">
            <div className="card">
              <div className="card-text">
                <p>Total Projects</p>
                <h2>{projects.length}</h2>
              </div>
              <div className="card-icon">
                <ProjectsIcon />
              </div>
            </div>

            <div className="card">
              <div className="card-text">
                <p>Total Certificate</p>
                <h2>{certificates.length}</h2>
              </div>
              <div className="card-icon">
                <CertificatesIcon />
              </div>
            </div>

            <div className="card">
              <div className="card-text">
                <p>Total Skills</p>
                <h2>{skills.length}</h2>
              </div>
              <div className="card-icon">
                <SkillsIcon />
              </div>
            </div>
          </div>

          {/* PROJECT */}
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((img, i) => (
              <div className="project-card" key={i}>
                <img src={img} />

                <div className="overlay">
                  <h3>Project {i + 1}</h3>
                  <button className="details-btn">Details &gt;</button>
                </div>
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>

          {/* CERTIFICATE */}
          <h2>Certificates</h2>
          <div className="cert">
            {certificates.map((img, i) => (
              <img key={i} src={img} />
            ))}
          </div>
        </div>
      
    </div>
  );
}