import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
/*import Register from './pages/auth/Register';*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

/*function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}*/
export default App;