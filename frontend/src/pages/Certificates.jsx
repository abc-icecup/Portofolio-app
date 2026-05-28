import React, { useState, useRef } from 'react';
import './Certificates.css';

// Integrasi Navigasi Kelompok
import NavigationLayout from "../navigation/NavigationLayout";

const Certificates = () => {
  const [certs, setCerts] = useState([
    { id: 1, img: 'https://i.pinimg.com/736x/bb/ae/da/bbaedab06b10a794c2840b4520b6c8c9.jpg' },
    { id: 2, img: 'https://i.pinimg.com/736x/c7/44/16/c7441654eadbbbb15e497f1926eb1fcf.jpg' },
    { id: 3, img: 'https://i.pinimg.com/736x/52/43/b8/5243b8a9639a6cf10bd5a61f637dc363.jpg' }
  ]);

  const [selectedCert, setSelectedCert] = useState(null);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [tempImg, setTempImg] = useState(null);
  const fileInputRef = useRef(null);

  const openView = (cert) => { setSelectedCert(cert); setShowView(true); };
  const openDelete = (cert) => { setSelectedCert(cert); setShowDelete(true); };
  
  const confirmDelete = () => {
    setCerts(certs.filter(c => c.id !== selectedCert.id));
    setShowDelete(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setTempImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (tempImg) {
      const newCert = { id: Date.now(), img: tempImg };
      setCerts([newCert, ...certs]);
      setTempImg(null);
      setShowAdd(false);
    }
  };

  return (
    <NavigationLayout>

      {/* Pembungkus Konten Utama Certificates */}
      <div className="certificates-content">
        <div className="certs-container" style={{ padding: '0 0 40px 0' }}>
          
          <div className="certs-header">
            <div>
              <h2>Your Certificates</h2>
            </div>
            <button onClick={() => setShowAdd(true)} className="btn-add-cert">
              <span className="material-icons" style={{fontSize: '16px'}}>add</span>
              Add Certificate
            </button>
          </div>

          <div className="certs-grid">
            {certs.map((cert) => (
              <div key={cert.id} className="cert-card">
                <img 
                  src={cert.img} 
                  alt="Sertifikat" 
                  className="cert-img"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/500x350?text=Sertifikat'; }}
                />
                
                <div className="cert-actions">
                  <button onClick={() => openDelete(cert)} className="action-cert-btn btn-del">
                    <span className="material-icons" style={{fontSize: '18px'}}>delete</span>
                  </button>
                  <button onClick={() => openView(cert)} className="action-cert-btn btn-view">
                    <span className="material-icons" style={{fontSize: '18px'}}>fullscreen</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL VIEW */}
          {showView && (
            <div className="certificates-modal-overlay view-overlay">
              <div className="view-container" style={{position: 'relative', textAlign: 'center'}}>
                <button onClick={() => setShowView(false)} style={{position: 'absolute', top: '-50px', right: '0', background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}>
                  <span className="material-icons" style={{fontSize: '40px'}}>close</span>
                </button>
                <img src={selectedCert?.img} alt="Full View" className="view-img" />
              </div>
            </div>
          )}

          {/* MODAL DELETE */}
          {showDelete && (
            <div className="certificates-modal-overlay">
              <div className="certificates-modal-content" style={{maxWidth: '320px'}}>
                <button onClick={() => setShowDelete(false)} style={{position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer'}}>
                    <span className="material-icons">close</span>
                </button>
                <p style={{fontWeight: 'bold', color: '#333', margin: '20px 0', fontSize: '15px'}}>
                  Anda yakin ingin menghapus sertifikat ini??
                </p>
                <div className="modal-footer">
                  <button onClick={() => setShowDelete(false)} className="btn-modal btn-cancel">Cancel</button>
                  <button onClick={confirmDelete} className="btn-modal btn-red">Delete</button>
                </div>
              </div>
            </div>
          )}

          {/* MODAL ADD */}
          {showAdd && (
            <div className="certificates-modal-overlay">
              <div className="certificates-modal-content">
                 <button onClick={() => {setShowAdd(false); setTempImg(null);}} style={{position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer'}}>
                    <span className="material-icons">close</span>
                 </button>
                 <h3 style={{fontFamily: 'serif', marginBottom: '25px'}}>Tambahkan Sertifikat Anda</h3>
                 
                 <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{display: 'none'}} />

                 <div className="upload-zone" onClick={() => fileInputRef.current.click()}>
                    {tempImg ? (
                      <img src={tempImg} alt="Preview" />
                    ) : (
                      <span style={{fontSize: '10px', fontWeight: 'bold', color: '#999', letterSpacing: '1px'}}>PILIH FILE GAMBAR</span>
                    )}
                 </div>

                 <div className="modal-footer">
                    <button onClick={() => {setShowAdd(false); setTempImg(null);}} className="btn-modal btn-cancel">Batal</button>
                    <button onClick={handleSave} disabled={!tempImg} className="btn-modal btn-confirm" style={{opacity: tempImg ? 1 : 0.5}}>
                      Simpan
                    </button>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </NavigationLayout>
  );
};

export default Certificates;