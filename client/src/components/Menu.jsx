import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    const [Searching, setSearching] = useState("Search");

  return (
    <div>
      <div
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        className="menu-button"
      >
        <CiMenuBurger />
      </div>
      <div
        onMouseLeave={() => setMenuOpen(false)}
        onMouseEnter={() => setMenuOpen(true)}
        className={`side-menu ${menuOpen ? "open" : ""}`}
      >
        <button onClick={toggleMenu} className="close-button">
          X
        </button>
        <ul>
          <NavLink to={"/home-owner"} className="HOwner">
            {" "}
            Home Owner{" "}
          </NavLink>
          <NavLink to={"/interior-designer"} className="IDesigner">
            {" "}
            Interior Designer{" "}
          </NavLink>
          <NavLink to={"/premium-member"} className="PMember">
            {" "}
            Premium Member{" "}
          </NavLink>
          <NavLink to={"/Sales"} className="Sales">
            {" "}
            Sales{" "}
          </NavLink>
          <NavLink to={"/cart"} className="Cart">
            {" "}
            Cart{" "}
          </NavLink>
          <NavLink to={"/search"}
            onMouseEnter={() => setSearching("Search-hover")}
            onMouseLeave={() => setSearching("Search")}
            className={Searching}
          >
            {" "}
            <CiSearch /> search{" "}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
