import { Route, Routes } from "react-router-dom";
import Category from './components/Category';
import Vases from './components/Vases';
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import './App.scss';

const App = () => {
  return (
    <div>
      <Category />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/vases" element={<Vases />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;


