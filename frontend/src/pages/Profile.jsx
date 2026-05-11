import React, { useState, useRef } from 'react';

const Profile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  // State untuk data profil (bisa dikembangkan untuk dikirim ke backend nanti)
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
    email: '',
    sosmed: ''
  });

  // State untuk foto profil
  const [profileImage, setProfileImage] = useState("https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg");
  
  // Ref untuk memicu input file tersembunyi
  const fileInputRef = useRef(null);

  // Handle perubahan teks input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle perubahan foto
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
    console.log("Data disimpan:", { ...formData, profileImage });
    alert("Profil berhasil diperbarui!");
  };

  return (
    <div className="p-10 relative min-h-full font-sans">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-serif font-bold text-[#333]">Your Profile</h2>
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="bg-[#EF4444] hover:bg-red-600 text-white p-2.5 rounded-full shadow-lg transition-all flex items-center justify-center group"
          title="Log Out"
        >
          <span className="material-icons text-xl group-hover:rotate-12 transition-transform">logout</span>
        </button>
      </div>

      {/* PROFILE FORM CARD */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0px_15px_40px_rgba(0,0,0,0.04)] p-12 max-w-3xl mx-auto flex flex-col items-center relative overflow-hidden">
        
        {/* Profile Image Section */}
        <div className="relative group mb-12" onClick={triggerFileInput}>
          <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-2xl transition-all group-hover:ring-4 group-hover:ring-blue-100 ring-0">
            <img 
              src={profileImage} 
              alt="Profile Avatar" 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          
          {/* Badge Kamera */}
          <div className="absolute bottom-1 right-1 bg-[#5A91CC] text-white p-2 rounded-full shadow-lg border-4 border-white flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="material-icons text-sm">photo_camera</span>
          </div>

          {/* Hidden Input File */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        {/* Input Fields */}
        <div className="w-full space-y-7">
          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">Nama Lengkap</label>
            <input 
              name="nama"
              type="text" 
              value={formData.nama}
              onChange={handleInputChange}
              className="border border-gray-100 bg-gray-50/30 rounded-2xl px-5 py-4 text-sm focus:border-[#5A91CC] focus:bg-white outline-none transition-all shadow-sm" 
              placeholder="username" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">Deskripsi</label>
            <textarea 
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleInputChange}
              className="border border-gray-100 bg-gray-50/30 rounded-2xl px-5 py-4 text-sm focus:border-[#5A91CC] focus:bg-white outline-none transition-all h-28 resize-none shadow-sm" 
              placeholder="Ceritakan tentang diri Anda..."
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">Email</label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-100 bg-gray-50/30 rounded-2xl px-5 py-4 text-sm focus:border-[#5A91CC] focus:bg-white outline-none transition-all shadow-sm" 
              placeholder="email@domain.com" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">Link Sosial Media</label>
            <div className="flex gap-3">
              <input 
                name="sosmed"
                type="text" 
                value={formData.sosmed}
                onChange={handleInputChange}
                className="flex-1 border border-gray-100 bg-gray-50/30 rounded-2xl px-5 py-4 text-sm focus:border-[#5A91CC] focus:bg-white outline-none transition-all shadow-sm" 
                placeholder="https://instagram.com/user" 
              />
              <button className="bg-gray-100 text-gray-400 p-4 rounded-2xl hover:bg-[#5A91CC] hover:text-white transition-all shadow-sm">
                <span className="material-icons">add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full flex justify-end mt-12">
          <button 
            onClick={handleSave}
            className="bg-[#5A91CC] hover:bg-blue-600 text-white px-12 py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 transition-all text-sm tracking-widest uppercase hover:-translate-y-1 active:translate-y-0"
          >
            Simpan Profil
          </button>
        </div>
      </div>

      {/* MODAL LOGOUT */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[6px]" onClick={() => setShowLogoutModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xs z-10 p-10 flex flex-col items-center relative animate-in fade-in zoom-in duration-300">
              <button onClick={() => setShowLogoutModal(false)} className="absolute top-6 right-6 text-gray-300 hover:text-gray-500 transition-colors">
                 <span className="material-icons text-xl">close</span>
              </button>
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                 <span className="material-icons text-3xl">logout</span>
              </div>
              <p className="text-center font-bold text-gray-700 mb-10 leading-relaxed">
                 Anda yakin ingin Log Out dari akun ini??
              </p>
              <div className="flex gap-4 w-full">
                 <button onClick={() => setShowLogoutModal(false)} className="flex-1 bg-gray-100 text-gray-500 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">Cancel</button>
                 <button 
                   onClick={() => window.location.reload()} 
                   className="flex-1 bg-[#EF4444] text-white py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-red-100 hover:bg-red-600 transition-all"
                 >
                   Log Out
                 </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;