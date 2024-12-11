import React, { useState, useContext, useEffect } from 'react';
import './Login.css'; 
import { MainContext } from '../contexts/Context_main';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [usersState, usersDispatch] = useContext(MainContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies (if using them)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      // Save token to localStorage
      localStorage.setItem("authToken", data.token);

      // Update context state
      usersDispatch({ type: "LOGIN_USER", payload: data.user });

      // Navigate to the homepage
      navigate("/");

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Optional: Verify token with backend to ensure it is still valid
      navigate("/"); // Redirect to homepage if logged in
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="form-section">
        <h1 className="brand-name">Elvora</h1>
        <form className="login-form" onSubmit={handleLogin}>
        
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              onChange={handleInputChange} 
              required 
            />
            <span className="underline"></span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              onChange={handleInputChange} 
              required 
            />
            <span className="underline"></span>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="footer-text">
            <button type="submit" className="rg-button">LOGIN</button>
          </div>

          <p className="footer-text">
            Don't have an account?{" "}
            <a href="/register">Click here to register</a>.
          </p>
        </form>
      </div>

      <div className="image-section">
        <img 
          src="../images/login.webp" 
          alt="Welcome to Elvora" 
          className="login-image" 
        />
      </div>
    </div>
  );
};

export default Login;

