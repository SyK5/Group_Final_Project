import { Routes, Route } from "react-router-dom";
import Registration from "./components/Register.jsx";
import Login from "./components/Login.jsx";

import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import Like from "./components/Like.jsx";
import Homeowner from "./components/home-owner.jsx";
import InteriorDesigner from "./components/Interiordes.jsx";
import Premember from "./components/Premium-member.jsx";
import ProductList from "./components/ProductList.jsx";


import "./App.scss";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/likes" element={<Like />} />
          <Route path="home-owner" element={ <Homeowner /> } />
          <Route path="interior-designer" element={ < InteriorDesigner /> } />
          <Route path="premium-member" element={ < Premember /> } />
          <Route path="/products/:category" element={<ProductList />} />
         
          <Route path="*" element={<h1>notfound</h1>} />
        
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;