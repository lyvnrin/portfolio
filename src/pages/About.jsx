import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={{
            minHeight: "100vh",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            backgroundColor: "#F7F3EE",
            color: "#6B0D0D",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
        }}>
            <Link to="/" style={{ marginBottom: "1rem", textDecoration: "underline", cursor: "pointer" }}>
                Back to puzzle
            </Link>

            <h1 style={{ fontSize: "2.5rem", margin: "1rem 0" }}>About Me</h1>

            <div style={{ maxWidth: "640px", lineHeight: "1.6", fontSize: "1.125rem", color: "#555" }}>
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
    );
};

export default About;
