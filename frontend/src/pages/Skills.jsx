import React, { useState } from "react";
import "./Skills.css";

// Integrasi Navigasi Kelompok
import Sidebar from "../navigation/Sidebar";
import Topbar from "../navigation/Topbar";

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 2, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 3, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 4, name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [skillName, setSkillName] = useState('');
  const [skillIcon, setSkillIcon] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleAddClick = () => {
    setIsEditMode(false);
    setSkillName('');
    setSkillIcon('');
    setShowModal(true);
  };

  const handleEditClick = (skill) => {
    setIsEditMode(true);
    setSkillName(skill.name);
    setSkillIcon(skill.icon);
    setSelectedId(skill.id);
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    if (isEditMode) {
      const updatedSkills = skills.map(s => 
        s.id === selectedId ? { ...s, name: skillName } : s
      );
      setSkills(updatedSkills);
    } else {
      const newSkill = {
        id: Date.now(),
        name: skillName,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg'
      };
      setSkills([...skills, newSkill]);
    }
    setShowModal(false);
  };

  const confirmDelete = () => {
    setSkills(skills.filter(s => s.id !== selectedId));
    setShowDeleteModal(false);
  };

  return (
    <div>
      <Topbar />
      <Sidebar />

      {/* Pembungkus Konten Utama Dashboard */}
      <div className="content">
        <div className="skills-container" style={{ padding: '0 0 40px 0' }}>
          
          <div className="skills-header">
            <div>
              <h2>Your Skills</h2>
            </div>
            <button onClick={handleAddClick} className="btn-add-skill">
              <span className="material-icons">add</span>
              <span>Add Skills</span>
            </button>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
                
                <div className="skill-actions">
                  <button onClick={() => handleEditClick(skill)} className="action-btn">
                    <span className="material-icons">edit</span>
                  </button>
                  <button onClick={() => handleDeleteClick(skill.id)} className="action-btn">
                    <span className="material-icons">close</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL INPUT SKILL */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <button onClick={() => setShowModal(false)} className="modal-close">
                  <span className="material-icons">close</span>
                </button>

                <h3 className="modal-title">
                  {isEditMode ? 'Edit Skill Anda' : 'Tambahkan Skill Anda'}
                </h3>

                <div className="preview-circle">
                  {skillIcon || isEditMode ? (
                    <img src={skillIcon} alt="preview" />
                  ) : (
                    <span className="material-icons" style={{color: '#ccc', fontSize: '40px'}}>image</span>
                  )}
                </div>

                <div className="input-group">
                  <label>Nama Skill/Tools</label>
                  <input 
                    type="text" 
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="Canva"
                  />
                </div>

                <div className="modal-footer">
                  <button onClick={() => setShowModal(false)} className="btn-cancel">Batal</button>
                  <button onClick={handleSave} className="btn-save">Simpan</button>
                </div>
              </div>
            </div>
          )}

          {/* MODAL CONFIRM DELETE */}
          {showDeleteModal && (
            <div className="modal-overlay">
              <div className="modal-content" style={{maxWidth: '300px'}}>
                 <button onClick={() => setShowDeleteModal(false)} className="modal-close">
                  <span className="material-icons">close</span>
                </button>
                <p style={{fontWeight: 'bold', margin: '20px 0'}}>Anda yakin ingin menghapus skill ini??</p>
                <div className="modal-footer">
                  <button onClick={() => setShowDeleteModal(false)} className="btn-cancel">Cancel</button>
                  <button onClick={confirmDelete} className="btn-confirm-delete">Delete</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;