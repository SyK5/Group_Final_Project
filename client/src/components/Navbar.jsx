import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

import { CiUser, CiHeart, CiMenuBurger } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon import
import Menu from "./Menu";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkAuthentication = () => {
    const token = localStorage.getItem("authToken");
    const userInfo = localStorage.getItem("user");
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
      return true;
    }
    return false;
  };

  useEffect(() => {
    setIsAuthenticated(checkAuthentication());
  }, []);

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="Navbar">
      <NavLink to={"/"} className="Title">
        Elvora
      </NavLink>
      <div onClick={handleUserClick} className="UserNav">
        {isAuthenticated ? (
          <span className="WelcomeMessage">
            Welcome, {user?.firstname || "User"}
          </span>
        ) : (
          <CiUser />
        )}
      </div>
      <NavLink to={"/likes"} className="HearthNav">
        <CiHeart />
      </NavLink>
      <NavLink to={"/cart"} className="CartNav">
        <FiShoppingCart />
      </NavLink>
      <NavLink className="MenuNav">
        <Menu />
      </NavLink>
    </div>
  );
};

export default Navbar;
