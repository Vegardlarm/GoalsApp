import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import Login from './Components/Login';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </Router>

    
  );
};

export default App;