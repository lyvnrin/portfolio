import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={styles.container}>
            <div style={styles.pageBox}>
                <Link to="/" style={styles.backLink}>
                    Back to puzzle
                </Link>

                <h1 style={styles.title}>About Me</h1>

                <div style={styles.content}>
                    <p>
                        Hello! I'm a creative developer passionate about building unique digital experiences
                        that blur the line between art and functionality.
                    </p>
                    <p>
                        With a background in both design and development, I love crafting interfaces
                        that surprise and delight users while remaining intuitive and accessible.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies,
                        playing puzzle games (obviously), or sketching out ideas for my next project.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: "100vw",         // full viewport width
        minHeight: "100vh",     // full viewport height
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#F7F3EE",
        color: "#6B0D0D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
    },
    pageBox: {
        width: "100%",
        maxWidth: "700px",        // not too wide on large screens
        minWidth: "320px",        // ensures it's readable on smaller screens
        backgroundColor: "#FFF8DC",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxSizing: "border-box",
    },
    backLink: {
        marginBottom: "1rem",
        textDecoration: "underline",
        cursor: "pointer",
        color: "#6B0D0D",
        fontSize: "1rem",
    },
    title: {
        fontSize: "2rem",
        margin: "1rem 0",
        alignSelf: "center",
    },
    content: {
        width: "100%",
        lineHeight: "1.6",
        fontSize: "1.125rem",
        color: "#333",
    },
};

export default About;
