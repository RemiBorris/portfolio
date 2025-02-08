import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          to="/"
          className={`hover:text-gray-300 transition ${isActive("/") ? "font-bold underline" : ""}`}
        >
          Home
        </Link>
        <Link 
          to="/resume"
          className={`hover:text-gray-300 transition ${isActive("/resume") ? "font-bold underline" : ""}`}
        >
          Resume
        </Link>
        <Link 
          to="/projects" 
          className={`hover:text-gray-300 transition ${isActive("/projects") ? "font-bold underline" : ""}`}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className={`hover:text-gray-300 transition ${isActive("/contact") ? "font-bold underline" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
    
  )
}

const App = () => {

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Navbar */}
        <NavBar />

        {/* Page Content */}
        <div className="container mx-auto flex-grow p-6 pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-12">
        © {new Date().getFullYear()} Remi Borris | Portfolio
        </footer>
      </div>
    </Router>
  );
};

export default App;