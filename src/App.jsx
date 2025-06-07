import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects1 from "./pages/Projects1";
import Projects2 from "./pages/Projects2";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects1" element={<Projects1 />} />
        <Route path="/projects2" element={<Projects2 />} />
      </Routes>
    </BrowserRouter>
  );
}
