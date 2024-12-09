import { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

import Menu from "./Menu";


const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const togglePanel = () => {
  //   setIsOpen(!isOpen);
  // };


  return (
    <div className="Navbar">
      <NavLink to={"/"} className='Title'> Elvora </NavLink>
      <NavLink to={"register"} className='UserNav'><CiUser /></NavLink>
      <NavLink to={"likes"} className='HearthNav'><CiHeart /></NavLink>
      <NavLink className='MenuNav'><Menu /></NavLink>
      
    </div>
  );
};

export default Navbar;
