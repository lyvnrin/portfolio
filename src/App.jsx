import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WordSearch from "./components/WordSearch.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WordSearch />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
