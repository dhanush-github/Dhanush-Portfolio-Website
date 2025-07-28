import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ Added Navigate
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects1 from "./pages/Projects1";
import Publications from "./pages/Publications";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects1" element={<Projects1 />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/publications" element={<Publications />} />

        {/* ✅ Catch-all fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

  
