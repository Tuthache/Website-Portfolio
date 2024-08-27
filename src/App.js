import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Website-Portfolio/education" element={<Education />} />
        <Route path="/Website-Portfolio" element={<Home />} />
        <Route path="/Website-Portfolio/projects" element={<Projects />} />
        <Route path="/Website-Portfolio/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
