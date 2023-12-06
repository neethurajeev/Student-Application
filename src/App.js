import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Students from './components/students';
import Admin from './components/studentsAdmin';
import StudentAdmin from './components/students3';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StudentAdmin />} />
        <Route path="/students" element={<Students />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
