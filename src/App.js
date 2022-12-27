import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contactme from './Components/Contact/Contact';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contactme />}></Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
