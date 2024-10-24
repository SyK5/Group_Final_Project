import { Route, Routes } from "react-router-dom";
import Vases from './components/Vases';
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import './App.scss';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/vases" element={<Vases />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
