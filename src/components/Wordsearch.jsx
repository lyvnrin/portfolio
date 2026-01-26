import React from "react";
import word from "./Word.jsx";

const words = [
    {text: "About Me", link: "/about"},
    {text: "Projects", link: "/projects"},
    {text: "Skills", link: "/skills"},
    {text: "Contact", link: "/contact"},
];

function wordsearch() {
    return (
        <div style={styles.grid}>
            {words.map((word, idx) => (
                <word key={idx} word={word.text} link={word.link} />
            ))}
        </div>
    );
}

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem",
        justifyItems: "center",
        alignItems: "center",
        fontSize: "1.5rem",
    },
};

export default wordsearch;