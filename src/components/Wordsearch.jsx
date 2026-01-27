import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const WORDS = [
    { word: "ABOUT ME", type: "about", positions: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]] },
    { word: "CONTACT", type: "contact", positions: [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6]] },
    { word: "PROJECTS", type: "projects", positions: [[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]] },
    { word: "SKILLS", type: "skills", positions: [[5,2],[5,3],[5,4],[5,5],[5,6],[5,7]] },
];

const BASE_GRID = [
    ['X','K','P','R','O','J','E','C','T','S','M','Q'],
    ['A','B','O','U','T',' ','M','E','Z','W','L','F'],
    ['R','V','N','T','H','G','Y','I','O','P','K','D'],
    ['C','O','N','T','A','C','T','B','S','E','W','J'],
    ['H','J','Q','U','W','M','L','N','F','R','A','S'],
    ['Y','Z','S','K','I','L','L','S','V','X','C','T'],
    ['B','D','F','G','H','K','P','Q','R','U','W','Y'],
];

const createGrid = () => {
    return BASE_GRID.map((row, rowIndex) =>
        row.map((letter, colIndex) => {
            let wordType = null;
            WORDS.forEach(({ type, positions }) => {
                positions.forEach(([r,c]) => {
                    if(r===rowIndex && c===colIndex) wordType = type;
                });
            });
            return { letter, wordType, position: { row: rowIndex, col: colIndex } };
        })
    );
};

const WordSearch = () => {
    const navigate = useNavigate();
    const [grid] = useState(createGrid);
    const [hoveredWord, setHoveredWord] = useState(null);

    const handleMouseEnter = useCallback((wordType) => wordType && setHoveredWord(wordType), []);
    const handleMouseLeave = useCallback(() => setHoveredWord(null), []);
    const handleClick = useCallback((wordType) => {
        if (!wordType) return;
        const routes = {
            about: "/about",
            projects: "#",
            contact: "#",
            skills: "#",
        };
        navigate(routes[wordType]);
    }, [navigate]);

    const getCellStyle = (cell) => {
        const base = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2rem",
            height: "2rem",
            fontWeight: "bold",
            cursor: cell.wordType ? "pointer" : "default",
            transition: "all 0.3s",
            userSelect: "none",
            color: "#710014",
        };
        if(cell.wordType && hoveredWord === cell.wordType){
            base.backgroundColor = "#71001420";
            base.borderRadius = "4px";
        }
        return base;
    };

    const pageBoxStyle = {
        display: "inline-block",
        padding: "2rem",
        borderRadius: "12px",
        backdropFilter: "blur(4px)",
        border: "1px solid #71001433",
        backgroundColor: "#F2EFE6",  // Ivory white
        transition: "all 0.3s",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    };

    const wordList = WORDS.map(w => w.word).sort();

    return (
        <div style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F2F1ED",
            padding: "2rem",
            boxSizing: "border-box",
        }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", fontFamily: "Georgia, serif", color:"#710014" }}>Lavanya Kamble</h1>
                <p style={{color:"#161616", fontFamily: "'Poppins', sans-serif"}}>Hover over the hidden words to navigate</p>
            </div>

            <div style={pageBoxStyle}>
                {grid.map((row,rowIdx) => (
                    <div key={rowIdx} style={{ display: "flex", gap: "0.25rem" }}>
                        {row.map((cell,colIdx) => (
                            <div
                                key={`${rowIdx}-${colIdx}`}
                                style={getCellStyle(cell)}
                                onMouseEnter={() => handleMouseEnter(cell.wordType)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(cell.wordType)}
                            >
                                {cell.letter}
                            </div>
                        ))}
                    </div>
                ))}

                <div style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    gap: "1.5rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#710014",
                }}>
                    {wordList.map(word => (
                        <span
                            key={word}
                            style={{
                                cursor: "default",
                                transition: "all 0.3s",
                                textDecoration: hoveredWord && WORDS.find(w => w.word === word).type === hoveredWord ? "line-through" : "none",
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </div>

                <div style={{
                    marginTop: "1.5rem",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    color: "#161616AA",
                }}>
                    Issue #19 • Lavanya Kamble Portfolio
                </div>
            </div>
        </div>
    );
};

export default WordSearch;
