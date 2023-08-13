import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import 'Routes' along with 'Route'
import WeatherApp from './pages/HomePage';
import WeatherDisplay from './pages/DisplayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/weather/:city" element={<WeatherDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;




