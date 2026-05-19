import { Link } from "react-router-dom";
import "./signin-signup.css";

import logo from "../assets/images/logo_my_porto.svg";

function SignUp() {
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
            <h1>Welcome!!</h1>
            <p>Sign Up to start build your protofolio</p>

            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>

            <div className="auth-link">
              Already Have an account? <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;