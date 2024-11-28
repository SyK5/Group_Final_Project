import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navbar from "../components/Navbar";
// import { MainContext } from "../contexts/Context_main";

const Layout = () => {
  // const { cartsState } = useContext(MainContext);
  // const containerWidth = cartsState.isOpen ? "calc(100vw - 200px)" : "100%";

  return (
    <div
      className="app"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Navbar />
      <Outlet />
      <Footer />
      
    </div>
  );
};

export default Layout;
