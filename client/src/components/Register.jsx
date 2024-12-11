import React, { useState, useContext } from 'react';
import './Registration.css'; 
import { MainContext } from '../contexts/Context_main';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",       // Email field added
    username: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [usersState, usersDispatch] = useContext(MainContext);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle registration submission
  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", 
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      usersDispatch({ type: "REGISTER_USER", payload: data.user });

      alert("Registration successful!");
      console.log("Registered user:", data.user);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="registration-container">
    
      {/* Static Image Section */}
      <div className="image-section">
        <img 
          src="../images/register.webp" 
          alt="Welcome to Elvora" 
          className="registration-image" 
        />
      </div>

      <div className="form-section">
        <h1 className="brand-name">Elvora</h1>
        <form className="registration-form" onSubmit={handleRegister}>
        
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              onChange={handleInputChange} 
              required 
            />
            <span className="underline"></span>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              onChange={handleInputChange} 
              required 
            />
            <span className="underline"></span>
          </div>

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
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              onChange={handleInputChange} 
              required 
            />
            <span className="underline"></span>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" onChange={handleInputChange} required>
              <option value="" disabled selected>Choose your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleInputChange}
              required
            />
            <span className="underline"></span>
          </div>

          <div className="footer-text">
          <p>
  Already registered?{" "}
  <Link to="/login">Click here to connect to your account</Link>.
</p>
            <div className="register-text">
              <button type="submit" className="rg-button">REGISTER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
