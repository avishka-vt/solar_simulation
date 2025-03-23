import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import SolarCellSimulation from './components/SolarCellSimulation';
import InfoPage from './components/InfoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<SolarCellSimulation />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;