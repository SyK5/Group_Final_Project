import { Route, Routes } from "react-router-dom";
import Vases from './components/Vases';
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import './App.scss';
import LoginPage from "./components/LoginPage.jsx";
function App() {
  return (
    <div>
      
      <Routes>
     <Route index element = {<LoginPage/>}/>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/vases" element={<Vases />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
