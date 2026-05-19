import "./Topbar.css";

import logo from "../assets/portoLogo.png";
import documentIcon from "../assets/images/ikon_dokumen.svg";
import menuIcon from "../assets/images/ikon_menu.svg";

export default function Topbar({ toggleSidebar }) {
  const isLogin = true;

  return (
    <div className="topbar">

      {/* LEFT */}
      <div className="topbar-left">

        <button className="menu-btn" onClick={toggleSidebar}>
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </button>

        <img src={logo} className="logo-img" />
        <span className="logo-text">MyPorto</span>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        {isLogin ? (
          <button className="icon-btn">
            <img
              src={documentIcon}
              alt="Document Icon"
              className="document-icon"
            />
          </button>
        ) : (
          <>
            <button>Sign In</button>
            <button>Sign Up</button>
          </>
        )}
      </div>

    </div>
  );
}