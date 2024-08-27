import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="#/education" element={<Education />} />
        <Route path="#/" element={<Home />} />
        <Route path="#/projects" element={<Projects />} />
        <Route path="#/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
