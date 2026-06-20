import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import NavigationLayout from "../navigation/NavigationLayout";
import AddProjectModal from "../components/AddProjectModal";
import "./Projects.css";



function Projects() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProjects =
      async () => {

        try {

          const token =
            localStorage.getItem("token");

          const response =
            await fetch(
              "http://localhost:5000/projects",
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          const data =
            await response.json();

          setProjects(data);

        } catch (error) {

          console.error(
            "Gagal mengambil projects:",
            error
          );

        } finally {

          setLoading(false);

        }
      };

    fetchProjects();

  }, []);

  if (loading) {
    return (
      <NavigationLayout>
        <div style={{ padding: "40px" }}>
          Loading...
        </div>
      </NavigationLayout>
    );
  }

  return (
    <NavigationLayout>

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

        {showModal && (
          <AddProjectModal
            onClose={() => setShowModal(false)}
          />
        )}

        <div className="projects-page-grid">

          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() =>
                navigate(`/projects/${project.id}`)
              }
            >

              <img
                src={project.thumbnail}
                alt={project.name}
              />

              <div className="project-overlay">

                <h3>{project.name}</h3>

                <button className="details-btn">
                  Details &gt;
                </button>

              </div>

              <div className="card-actions">

                <button
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();

                    console.log("edit");
                  }}
                >
                  ✏️
                </button>

                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();

                    console.log("delete");
                  }}
                >
                  🗑️
                </button>

              </div>

            </div>
          ))}

          {projects.length === 0 && (
            <div className="empty-projects">
              Anda belum memiliki project.
              <br />
              Klik "Add Project" untuk menambahkan project pertama.
            </div>
          )}

        </div>        

      </div>

    </NavigationLayout>
  );
}

export default Projects;