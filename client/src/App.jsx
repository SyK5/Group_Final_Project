import { Routes, Route } from "react-router-dom";
import Registration from "./components/Register.jsx";

import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import Like from "./components/Like.jsx";


import "./App.scss";
function App() {
  return (
    <div>
      <Routes>
     <Route index element = {<LoginPage/>}/>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/likes" element={<Like />} />
          <Route path="*" element={<h1>notfound</h1>} />
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
