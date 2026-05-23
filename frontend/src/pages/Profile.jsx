import React, { useState, useRef } from 'react';
import './Profile.css';

// Integrasi Navigasi Kelompok
import NavigationLayout from "../navigation/NavigationLayout";

const Profile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
    email: '',
  });

  // DIUBAH: State sosial media diubah menjadi array untuk menyimpan banyak link
  const [sosmedList, setSosmedList] = useState(['']);

  const [profileImage, setProfileImage] = useState("https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg");
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // BARU: Menangani perubahan teks pada baris input sosmed tertentu
  const handleSosmedChange = (index, value) => {
    const updatedSosmed = [...sosmedList];
    updatedSosmed[index] = value;
    setSosmedList(updatedSosmed);
  };

  // BARU: Fungsi untuk menambah baris input baru ketika tombol "+" diklik
  const addSosmedField = () => {
    setSosmedList([...sosmedList, '']);
  };

  // BARU: Fungsi opsional untuk menghapus baris input jika diinginkan
  const removeSosmedField = (index) => {
    if (sosmedList.length > 1) {
      const updatedSosmed = sosmedList.filter((_, i) => i !== index);
      setSosmedList(updatedSosmed);
    } else {
      // Jika baris tinggal 1, kosongkan saja isinya
      setSosmedList(['']);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSave = () => {
    // Menggabungkan data form utama dengan list sosial media yang sudah diisi
    console.log("Data disimpan:", { ...formData, sosmed: sosmedList, profileImage });
    alert("Profil berhasil diperbarui!");
  };

  return (
    <NavigationLayout>

      {/* Pembungkus Konten Utama Dashboard */}
      <div className="content">
        <div className="profile-container" style={{ padding: '0 0 40px 0' }}>
          
          <div className="profile-header">
            <h2>Your Profile</h2>
            <button onClick={() => setShowLogoutModal(true)} className="btn-logout-trigger">
              <span className="material-icons">logout</span>
            </button>
          </div>

          <div className="profile-card">
            {/* Photo Section */}
            <div className="photo-upload-section" onClick={triggerFileInput}>
              <div className="avatar-wrapper">
                <img src={profileImage} alt="Profile Avatar" />
              </div>
              <div className="camera-badge">
                <span className="material-icons" style={{fontSize: '14px'}}>photo_camera</span>
              </div>
              <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" style={{display: 'none'}} />
            </div>

            {/* Inputs */}
            <div className="form-group">
              <div className="input-item">
                <label>Nama Lengkap</label>
                <input name="nama" type="text" value={formData.nama} onChange={handleInputChange} placeholder="username" />
              </div>

              <div className="input-item">
                <label>Deskripsi</label>
                <textarea name="deskripsi" value={formData.deskripsi} onChange={handleInputChange} placeholder="Ceritakan tentang diri Anda..." />
              </div>

              <div className="input-item">
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="email@domain.com" />
              </div>

              <div className="input-item">
                <label>Link Sosial Media</label>
                {/* DIUBAH: Melakukan looping (mapping) untuk merender setiap baris sosial media */}
                {sosmedList.map((sosmedValue, index) => (
                  <div className="sosmed-input-wrapper" key={index} style={{ marginBottom: '10px' }}>
                    <input 
                      type="text" 
                      value={sosmedValue} 
                      onChange={(e) => handleSosmedChange(index, e.target.value)} 
                      placeholder="https://instagram.com/user" 
                      style={{flex: 1}} 
                    />
                    
                    {/* Jika ini adalah baris terakhir, tampilkan tombol Tambah (+) */}
                    {index === sosmedList.length - 1 ? (
                      <button type="button" onClick={addSosmedField} className="btn-add-sosmed">
                        <span className="material-icons">add</span>
                      </button>
                    ) : (
                      // Jika bukan baris terakhir, tampilkan tombol Hapus (close/remove) agar user bisa membatalkan
                      <button type="button" onClick={() => removeSosmedField(index)} className="btn-add-sosmed" style={{ backgroundColor: '#EF4444' }}>
                        <span className="material-icons">close</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleSave} className="save-profile-btn">
              Simpan Profil
            </button>
          </div>

          {/* MODAL LOGOUT */}
          {showLogoutModal && (
            <div className="modal-overlay">
              <div className="logout-modal">
                <button onClick={() => setShowLogoutModal(false)} style={{position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#ccc', cursor: 'pointer'}}>
                    <span className="material-icons" style={{fontSize: '20px'}}>close</span>
                </button>
                <div className="logout-icon-circle">
                    <span className="material-icons">logout</span>
                </div>
                <p>Anda yakin ingin Log Out dari akun ini??</p>
                <div className="modal-btn-group">
                    <button onClick={() => setShowLogoutModal(false)} className="btn-modal-base btn-modal-cancel">Cancel</button>
                    <button onClick={() => window.location.reload()} className="btn-modal-base btn-modal-confirm">Log Out</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </NavigationLayout>
  );
};

export default Profile;