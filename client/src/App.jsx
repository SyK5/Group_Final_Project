import { Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Vases from './components/Vases';
import './App.scss';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <div>
      <Category />
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
