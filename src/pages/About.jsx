import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={styles.container}>
            <div style={styles.pageBox}>
                <Link to="/" style={styles.backLink}>
                    🔙 Back to puzzle
                </Link>

                <h1 style={styles.title}>About Me</h1>

                <div style={styles.content}>
                    <p>
                        Hello! I'm a second-year Computer Science student with a passion for web development tools and data analytics!
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
        width: "100vw",
        minHeight: "100vh",
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
        maxWidth: "700px",
        minWidth: "320px",
        backgroundColor: "#FFF8DC",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxSizing: "border-box",
        transition: "all 0.3s",
    },
    backLink: {
        marginBottom: "1.5rem",
        textDecoration: "none",
        cursor: "pointer",
        color: "#6B0D0D",
        fontSize: "1rem",
        fontWeight: 600,
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        backgroundColor: "#FDEBCF",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "all 0.2s",
        alignSelf: "flex-start",
    },
    backLinkHover: {
        backgroundColor: "#FBD28B",
        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
        transform: "translateY(-2px)",
    },
    title: {
        fontSize: "2rem",
        fontFamily: "Times, serif",
        letterSpacing: "0.25rem",
        margin: "1rem 0",
        alignSelf: "center",
    },
    content: {
        width: "100%",
        fontFamily: "Inter, sans-serif",
        lineHeight: "1.6",
        fontSize: "1.125rem",
        color: "#333",
    },
};

export default About;
