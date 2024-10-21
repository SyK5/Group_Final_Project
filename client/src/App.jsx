import { Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Vases from './components/Vases';

const App = () => {
  return (
    <div>
      <Category />
      <Routes>
        
        <Route path="/vases" element={<Vases />} />
        {/* Add other routes for other categories here */}
      </Routes>
    </div>
  );
};

export default App;


