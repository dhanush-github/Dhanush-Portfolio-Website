import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="backdrop-blur bg-white/60 border-b border-purple-100 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text">
          Sai Dhanush
        </Link>
        <div className="flex items-center gap-7">
          <NavLink to="/" text="Home" location={location} />
          <NavLink to="/experience" text="Experience" location={location} />
          <NavLink to="/skills" text="Skills" location={location} />
          <NavLink to="/projects1" text="Projects" location={location} />
          <NavLink to="/projects2" text="More Projects" location={location} />
          <a href="https://github.com/dhanush-github" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-purple-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/n-sai-dhanush-2b5683112/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-purple-600 transition" />
          </a>
        </div>
      </div>
    </nav>
  );
}
function NavLink({ to, text, location }) {
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`font-medium px-3 py-1 rounded-lg transition ${
        active
          ? "bg-gradient-to-r from-orange-400 to-purple-500 text-white shadow-md"
          : "hover:bg-purple-100 hover:text-purple-700"
      }`}
    >
      {text}
    </Link>
  );
}
