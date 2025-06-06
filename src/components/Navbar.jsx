import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">Sai Dhanush</Link>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects1">Projects</Link>
          <Link to="/projects2">More Projects</Link>
        </div>
      </div>
    </nav>
  );
}
