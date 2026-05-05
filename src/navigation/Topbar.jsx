import "./Topbar.css";
import logo from "../assets/portoLogo.png";

export default function Topbar() {
  const isLogin = true;

  return (
    <div className="topbar">
      
      {/* LEFT */}
      <div className="topbar-left">
        <img src={logo} className="logo-img" />
        <span className="logo-text">MyPorto</span>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        {isLogin ? (
          <button className="icon-btn">📄</button>
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