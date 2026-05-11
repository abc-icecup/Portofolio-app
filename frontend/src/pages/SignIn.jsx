import { Link } from "react-router-dom";
import logo from "../assets/images/logo_my_porto.svg";

function SignIn() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-logo">
            <img src={logo} alt="Logo MyPorto" />
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-box">
            <h1>Welcome Back!!</h1>
            <p>Sign In to build your protofolio</p>

            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
            </form>

            <div className="auth-link">
              Don’t Have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;