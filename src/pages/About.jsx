import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={styles.container}>
            <div style={styles.pageBox}>
                <Link to="/" style={styles.backLink}>
                    ← Back to Puzzle
                </Link>

                <h1 style={styles.title}>About Me</h1>

                <div style={styles.content}>
                    <p>
                        Hello! I'm a second-year Computer Science student passionate about web development and data analytics.
                    </p>
                    <p>
                        I enjoy designing interfaces that are both professional and engaging, creating experiences that delight users while remaining intuitive.
                    </p>
                    <p>
                        Outside coding, I explore new technologies, play puzzle games, or sketch ideas for my next project.
                    </p>
                </div>

                <div style={styles.footer}>
                    Issue #19 • Lavanya Kamble Portfolio
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: "100vw",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#F2F1ED",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
    },
    pageBox: {
        width: "100%",
        maxWidth: "700px",
        minWidth: "320px",
        backgroundColor: "#F2EFE6",  // Ivory white
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxSizing: "border-box",
    },
    backLink: {
        marginBottom: "1rem",
        textDecoration: "underline",
        color: "#710014",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
        fontSize: "1rem",
    },
    title: {
        fontSize: "2rem",
        fontFamily: "Georgia, serif",
        letterSpacing: "0.1rem",
        margin: "1rem 0",
        alignSelf: "center",
        color: "#710014",
    },
    content: {
        width: "100%",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.6",
        fontSize: "1.125rem",
        color: "#161616",
    },
    footer: {
        marginTop: "2rem",
        fontSize: "0.85rem",
        color: "#161616AA",
        alignSelf: "center",
    },
};

export default About;
