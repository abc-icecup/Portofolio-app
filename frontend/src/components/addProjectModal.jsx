import React, { useState } from "react";
import "./AddProjectModal.css";

function AddProjectModal({ onClose }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [links, setLinks] = useState([""]);

  // Upload image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle multiple links
  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name,
      desc,
      links,
      image,
    };

    console.log("DATA PROJECT:", newProject);

    onClose(); // tutup modal
  };

  return (
    <div className="project-modal-overlay">
      <div className="project-modal-content">
        
        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Tambahkan Proyek Anda</h2>

        <form onSubmit={handleSubmit}>
          
          {/* UPLOAD */}
          <label>Upload Gambar</label>
          <div className="upload-box">
            {preview ? (
              <img src={preview} alt="preview" />
            ) : (
              <span>+</span>
            )}
            <input type="file" onChange={handleImageChange} />
          </div>

          {/* NAMA */}
          <label>Nama Project</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* DESKRIPSI */}
          <label>Deskripsi</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          {/* LINK */}
          <label>Link Project/Demo</label>
          <div className="link-group">
            {links.map((link, index) => (
              <input
                key={index}
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
              />
            ))}

            <button
              type="button"
              className="add-link-btn"
              onClick={addLinkField}
            >
              +
            </button>
          </div>

          {/* BUTTON */}
          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Batal
            </button>

            <button type="submit" className="save-btn">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;