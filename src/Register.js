import React from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Import your custom CSS for styling

function Register() {
  return (
    <div>
      <div class="centered-container">
        <div class="form-container">
          <h1>Register</h1>
          <form action="/register" method="POST">
            <div class="dropdown-container">
              <label for="user-type">Are you a:</label>
              <select id="user-type" name="user-type" onClick="dropdown()">
                <option value="customer">Customer</option>
                <option value="owner">Owner</option>
              </select>
            </div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <div class="additional-fields">
              <label for="vehicles">Number of Vehicles:</label>
              <input type="number" id="vehicles" name="vehicles" required />
              <br />
              <label for="company">Company Name:</label>
              <input type="text" id="company" name="company" required />
              <br />
              <label for="address">Company Address:</label>
              <input type="text" id="address" name="address" required />
              <br />
              <label for="contact">Company Contact Number:</label>
              <input type="text" id="contact" name="contact" required />
              <br />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login here</a>.
          </p>
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
