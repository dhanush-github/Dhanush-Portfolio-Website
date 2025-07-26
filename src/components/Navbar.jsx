import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Experience", to: "/experience" },
    { name: "Skills", to: "/skills" },
    { name: "AI/ML", to: "/projects1" },       // 🔄 Renamed Projects to AI/ML
    { name: "Analytics", to: "/analytics" },   // ✅ Added Analytics tab
    { name: "Publications", to: "/publications" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-fuchsia-600 to-purple-600 text-transparent bg-clip-text"
        >
          N Sai Dhanush
        </Link>
        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`text-base font-medium px-2 py-1 rounded transition ${
                location.pathname === item.to
                  ? "bg-gradient-to-r from-orange-400 to-purple-400 text-white shadow"
                  : "text-gray-900 hover:text-fuchsia-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://github.com/dhanush-github"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-700 hover:text-fuchsia-600"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/n-sai-dhanush-2b5683112/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-fuchsia-600"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}

