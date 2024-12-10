import React from 'react';
import './Registration.css'; 
import { useContext } from 'react';
import Context_main, { MainContext } from '../contexts/Context_main';

  const Registration = () => {


    
  const [usersState, usersDispatch]= useContext(MainContext);
  const handleRegister = () => {
    usersDispatch({ type: "REGISTER_USER", payload: {} });
    console.log(usersState)
  };
  return (
    <div className="registration-container">
    
      <div className="image-section">
        <img 
          src="../images/register.webp" 
          alt="Welcome to Elvora" 
          className="registration-image" 
        />
      </div>

      
      <div className="form-section">
        <h1 className="brand-name">Elvora</h1>
        <form className="registration-form">
        
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

          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
            <span className="underline"></span>
          </div>

          
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
            <a onClick={handleRegister} href="#register" className="rg-button">REGISTER</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
