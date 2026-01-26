import React from "react";
import wordsearch from "./components/Wordsearch.jsx";

function App() {
    return (
        <div style={styles.app}>
            <header style={styles.header}>
                <h1>Welcome to My Portfolio</h1>
                <p>Hover over the words to explore!</p>
            </header>
            <main style={styles.main}>
                <wordsearch/>
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
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
    },
    header: {
        marginBottom: "2rem",
    },
    main: {
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default App;
