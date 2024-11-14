import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './inicio/inicio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;