import React, { useState } from "react";

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
    <div className="relative min-h-full font-sans">
      
      {/* HEADER - Responsif Stack di Mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
        <div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#333]">Your Skills</h2>
          <p className="text-gray-400 text-xs mt-1 md:hidden">Manage your technical expertise</p>
        </div>
        <button 
          onClick={handleAddClick}
          className="w-full sm:w-auto bg-[#5A91CC] hover:bg-[#4A7FB8] text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
        >
          <span className="material-icons text-sm">add</span>
          <span className="text-[11px] font-bold uppercase tracking-wider">Add Skills</span>
        </button>
      </div>

      {/* SKILLS LIST - Grid Dinamis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl md:rounded-full pl-3 pr-4 md:pr-6 py-2.5 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center p-1.5 bg-gray-50 rounded-full">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-gray-700 text-sm">{skill.name}</span>
            </div>
            
            <div className="flex gap-2 text-gray-300 ml-2 border-l pl-3">
              <button onClick={() => handleEditClick(skill)} className="p-1 hover:text-blue-500 transition-colors">
                <span className="material-icons text-xl md:text-2xl">edit</span>
              </button>
              <button onClick={() => handleDeleteClick(skill.id)} className="p-1 hover:text-red-500 transition-colors">
                <span className="material-icons text-xl md:text-2xl">close</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL TAMBAH & EDIT - Responsif Sizing */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl w-full max-w-md z-10 overflow-hidden relative p-8 md:p-10 flex flex-col items-center animate-in fade-in zoom-in duration-200">
            
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2">
              <span className="material-icons">close</span>
            </button>

            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 md:mb-8 mt-2 text-center">
              {isEditMode ? 'Edit Skill Anda' : 'Tambahkan Skill Baru'}
            </h3>

            <div className="w-24 h-24 md:w-28 md:h-28 bg-[#F9FAFB] border border-gray-100 rounded-full flex items-center justify-center mb-8 md:mb-10 shadow-inner overflow-hidden p-6">
              {isEditMode ? (
                <img src={skillIcon} alt="preview" className="w-full h-full object-contain" />
              ) : (
                <span className="material-icons text-gray-300 text-5xl md:text-6xl">image</span>
              )}
            </div>

            <div className="w-full mb-8 md:mb-10">
              <label className="text-[10px] font-bold text-gray-400 block mb-2 uppercase tracking-widest text-left pl-1">
                Nama Skill / Tools
              </label>
              <input 
                type="text" 
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
                placeholder="Contoh: React JS"
                className="w-full border-b-2 border-gray-100 focus:border-[#5A91CC] px-1 py-3 text-sm md:text-base outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 w-full">
              <button onClick={() => setShowModal(false)} className="flex-1 bg-gray-100 text-gray-500 py-3.5 rounded-2xl font-bold text-sm transition-all hover:bg-gray-200">
                Batal
              </button>
              <button onClick={handleSave} className="flex-1 bg-[#5A91CC] text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-100 transition-all hover:bg-blue-600">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DELETE - Ukuran Kecil Untuk Konfirmasi */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowDeleteModal(false)}></div>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xs z-10 p-8 flex flex-col items-center relative animate-in fade-in zoom-in duration-200">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
               <span className="material-icons text-3xl">delete_outline</span>
            </div>
            <p className="text-center font-bold text-gray-700 mb-8">
              Hapus skill ini dari daftar Anda?
            </p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 bg-gray-100 text-gray-500 py-3 rounded-xl font-bold text-xs uppercase tracking-wider">
                Tidak
              </button>
              <button onClick={confirmDelete} className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-100">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;