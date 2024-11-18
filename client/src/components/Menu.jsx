import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} className="menu-button">
        <CiMenuBurger />
      </div>
      <div onMouseEnter={() => setMenuOpen(true)} className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="close-button">
          X
        </button>
        <ul>
        <NavLink to={"/home-owner"} className='HOwner'> Home Owner </NavLink>
        <NavLink to={"/interior-designer"} className='IDesigner'> Interior Designer </NavLink>
        <NavLink to={"/premium-member"} className='PMember'> Premium Member </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
