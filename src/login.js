import React from "react";
import "./login.css"; // Import your custom CSS for styling
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p class="y">
          Not a member yet? <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
}

export default Login;
