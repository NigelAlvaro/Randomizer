import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tommy from './pages/tommy';
import Nigel from './pages/nigel';
import Yunsheng from './pages/yunsheng';
import Navbar from './components/Navbar';
import './App.css';  // Make sure you have this import

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tommy" element={<Tommy />} />
          <Route path="/nigel" element={<Nigel />} />
          <Route path="/yunsheng" element={<Yunsheng />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;