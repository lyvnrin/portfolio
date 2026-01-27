import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WordSearch from "./components/WordSearch.jsx";
import About from "./pages/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WordSearch />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
