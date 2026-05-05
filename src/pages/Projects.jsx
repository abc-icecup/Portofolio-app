import React, { useState } from "react";
import Sidebar from "../navigation/Sidebar";
import Topbar from "../navigation/Topbar";
import AddProjectModal from "../components/AddProjectModal";
import "./Projects.css";

import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";

const projectsData = [
  {
    id: 1,
    title: "Website E-Commerce Fashion (Frontend)",
    image: p1,
  },
  {
    id: 2,
    title: "UI/UX Design Aplikasi Mobile Belajar Online",
    image: p2,
  },
  {
    id: 3,
    title: "Poster Promosi Event Seminar Teknologi",
    image: p3,
  },
  {
    id: 4,
    title: "Website E-Commerce Fashion (Frontend)",
    image: p1,
  },
];

function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="projects-page">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="projects-container">
          <div className="projects-header">
            <h1>Your Projects</h1>
            
             <button
                className="add-btn"
                onClick={() => setShowModal(true)}
              >
                + Add Project
              </button>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                  <h3>{project.title}</h3>
                  <button className="details-btn">Details &gt;</button>
                </div>

                <div className="card-actions">
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL (INI YANG PENTING) */}
      {showModal && (
        <AddProjectModal onClose={() => setShowModal(false)} />
      )}

    </div>
  );
}

export default Projects;