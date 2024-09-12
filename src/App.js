// Import necessary components from react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EndPage from './components/EndPage';
import AnimatedCharacterStats from './components/AnimatedCharacterStats';
import Map from './components/Map';


function App() {
  return (
    <Router>
      <div>
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/endpage" element={<EndPage />} />
          <Route path="/stats" element={<AnimatedCharacterStats />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
