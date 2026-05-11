import React, { useState, useRef } from 'react';

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
    <div className="pt-0 pb-10 px-4 md:px-10 relative min-h-full font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 -mt-1 md:-mt-2 mb-4 md:mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#333] leading-none">Your Certificates</h2>
          <p className="text-gray-400 text-xs mt-1 md:hidden">Pencapaian terbaik Anda</p>
        </div>
        <button 
          onClick={() => setShowAdd(true)}
          className="w-full sm:w-auto bg-[#5A91CC] hover:bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-[11px] font-bold uppercase tracking-wider"
        >
          <span className="material-icons text-sm">add</span>
          Add Certificate
        </button>
      </div>

      {/* CERTIFICATES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {certs.map((cert) => (
          <div key={cert.id} className="relative w-full h-48 md:h-52 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
            <img 
              src={cert.img} 
              alt="Professional Certificate" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/500x350?text=Sertifikat'; }}
            />
            
            {/* 
                ACTION BUTTONS (TETAP/MUTLAK)
                - opacity-0 dan group-hover dihilangkan agar tombol selalu tampil.
            */}
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              <button 
                onClick={() => openDelete(cert)}
                className="bg-[#EF4444] text-white w-8 h-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-red-600 transition-all active:scale-95"
              >
                <span className="material-icons text-base">delete</span>
              </button>
              <button 
                onClick={() => openView(cert)}
                className="bg-[#5A91CC] text-white w-8 h-8 rounded-lg shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all active:scale-95"
              >
                <span className="material-icons text-base">fullscreen</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL VIEW */}
      {showView && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowView(false)}></div>
          <div className="relative max-w-5xl w-full z-10 flex flex-col items-center animate-in zoom-in duration-300">
            <button onClick={() => setShowView(false)} className="absolute -top-12 right-0 text-white p-2">
              <span className="material-icons text-4xl">close</span>
            </button>
            <img 
              src={selectedCert?.img} 
              alt="Full View" 
              className="rounded-2xl shadow-2xl max-h-[80vh] w-auto object-contain bg-white" 
            />
          </div>
        </div>
      )}

      {/* MODAL DELETE */}
      {showDelete && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[4px]" onClick={() => setShowDelete(false)}></div>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-xs z-10 p-8 flex flex-col items-center relative animate-in fade-in zoom-in duration-200">
             <p className="text-center font-bold text-gray-700 mb-8 text-sm">
                Hapus sertifikat ini?
             </p>
             <div className="flex gap-3 w-full">
                <button onClick={() => setShowDelete(false)} className="flex-1 bg-gray-200 text-gray-600 py-3 rounded-xl font-bold text-[10px] uppercase transition-all">Batal</button>
                <button onClick={confirmDelete} className="flex-1 bg-[#EF4444] text-white py-3 rounded-xl font-bold text-[10px] uppercase shadow-lg shadow-red-100 transition-all">Hapus</button>
             </div>
          </div>
        </div>
      )}

      {/* MODAL ADD */}
      {showAdd && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[4px]" onClick={() => {setShowAdd(false); setTempImg(null);}}></div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md z-10 p-8 md:p-10 flex flex-col items-center relative animate-in fade-in zoom-in duration-200">
             <button onClick={() => {setShowAdd(false); setTempImg(null);}} className="absolute top-6 right-6 text-gray-400">
                <span className="material-icons">close</span>
             </button>
             <h3 className="text-xl font-bold text-gray-800 mb-6">Unggah Sertifikat</h3>
             
             <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

             <div 
                onClick={() => fileInputRef.current.click()}
                className="w-full h-40 md:h-48 bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2rem] flex flex-col items-center justify-center mb-6 text-gray-400 cursor-pointer hover:bg-gray-100 transition-all overflow-hidden"
             >
                {tempImg ? (
                  <img src={tempImg} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-widest">Pilih File Gambar</span>
                )}
             </div>

             <div className="flex gap-4 w-full">
                <button onClick={() => {setShowAdd(false); setTempImg(null);}} className="flex-1 bg-gray-100 text-gray-500 py-3 rounded-2xl font-bold text-xs uppercase">Batal</button>
                <button onClick={handleSave} disabled={!tempImg} className={`flex-1 text-white py-3 rounded-2xl font-bold text-xs uppercase ${tempImg ? 'bg-[#5A91CC]' : 'bg-blue-200'}`}>
                  Simpan
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;