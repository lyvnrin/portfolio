import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RemoveScrollBar } from "react-remove-scroll-bar";

import WordSearch from "./components/WordSearch.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";

function App() {
    return (
        <>
            <RemoveScrollBar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WordSearch />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
