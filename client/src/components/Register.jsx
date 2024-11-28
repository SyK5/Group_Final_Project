import React from 'react';
import './Registration.css'; // Import the CSS file for styling

const Registration = () => {
  return (
    <div className="registration-container">
      {/* Left Section: Image Frame */}
      <div className="image-section">
        <img 
          src="your-image-url.jpg" 
          alt="Welcome to Elvora" 
          className="registration-image" 
        />
      </div>

      {/* Right Section: Registration Form */}
      <div className="form-section">
        <h1 className="brand-name">Elvora</h1>
        <form className="registration-form">
          {/* First Name and Last Name */}
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
            <span className="underline"></span>
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
            <span className="underline"></span>
          </div>

          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
            <span className="underline"></span>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" required>
              <option value="" disabled selected>
                Choose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span className="underline"></span>
          </div>

          {/* Password and Confirm Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <span className="underline"></span>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
            <span className="underline"></span>
          </div>

          {/* Already Registered */}
          <div className="footer-text">
            <p>
              Already registered?{" "}
              <a href="/login">Click here to connect to your account</a>.
            </p>
            <div  classNmae="register-text">
            <a href="#register" className="rg-button">REGISTER</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
