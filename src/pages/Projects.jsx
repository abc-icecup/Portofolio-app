import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Website E-Commerce Fashion (Frontend)",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "UI/UX Design Aplikasi Mobile Belajar Online",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "Poster Promosi Event Seminar Teknologi",
    image: "/images/project3.jpg",
  },
  {
    id: 4,
    title: "UI/UX Design Aplikasi Mobile Belajar Online",
    image: "/images/project2.jpg",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="projects-container">
          <div className="projects-header">
            <h1>Your Projects</h1>
            <button className="add-btn">+ Add Project</button>
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
    </div>
  );
}

export default Projects;