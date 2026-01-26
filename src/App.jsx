import React from "react";
import wordsearch from "./components/wordsearch.jsx";

function App() {
    return (
        <div style={styles.app}>
            <header style={styles.header}>
                <h1>Welcome to My Portfolio</h1>
                <p>Hover over the words to explore!</p>
            </header>
            <main>
                <wordsearch />
            </main>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        backgroundColor: "#F7F3EE",
        color: "#6B0D0D",
        //minHeight: "100vh",
        width: "100%",
        padding: "2rem",
    },
    header: {
        marginBottom: "2rem",
    },
};

export default App;
