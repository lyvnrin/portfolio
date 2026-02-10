import { Link } from "react-router-dom";
// import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { ArrowLeft } from "lucide-react";

const technicalSkills = [
    "Python", "Java", "HTML/CSS", "JavaScript", "React",
    "Node.js", "Git", "PostgreSQL", "Figma"
];

const softSkills = [
    "Communication", "Collaboration", "Problem Solving",
    "Leadership", "Adaptability", "Time Management",
];



const Skills = () => {
    return (
        <div style={styles.container}>
            <div style={styles.inner}>
                <Link to="/" style={styles.backLink}>
                    <ArrowLeft size={20} style={{ marginRight: "0.3rem" }} />
                    Back to puzzle
                </Link>

                <div style={styles.header}>
                    <span style={styles.kicker}>What I Work With</span>
                    <h1 style={styles.title}>Skills</h1>
                </div>

                <div style={styles.skillsGrid}>
                    <div style={styles.column}>
                        <h2 style={styles.sectionTitle}>Technical</h2>
                        <ul style={styles.list}>
                            {technicalSkills.map((skill, i) => (
                                <li key={i} style={styles.listItem}>
                  <span
                      style={{
                          ...styles.dot,
                          backgroundColor: `hsl(${(i * 24) % 360}, 55%, 45%)`,
                      }}
                  />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={styles.column}>
                        <h2 style={styles.sectionTitle}>Interpersonal</h2>
                        <ul style={styles.list}>
                            {softSkills.map((skill, i) => (
                                <li key={i} style={styles.listItem}>
                  <span
                      style={{
                          ...styles.dot,
                          backgroundColor: `hsl(${(i * 50 + 180) % 360}, 55%, 45%)`,
                      }}
                  />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={styles.footer}>
                    <p>Always learning, always growing</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#710014",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
    },
    inner: {
        width: "100%",
        maxWidth: "900px",
        backgroundColor: "#FFF8F0",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        boxSizing: "border-box",
    },
    backLink: {
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#710014",
        textDecoration: "underline",
        marginBottom: "1.5rem",
        display: "inline-block",
    },
    header: {
        textAlign: "center",
        marginBottom: "2rem",
    },
    kicker: {
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#16161699",
        fontFamily: "Inter, sans-serif",
    },
    title: {
        fontFamily: "Georgia, serif",
        fontSize: "2.4rem",
        color: "#710014",
        marginTop: "0.25rem",
    },
    skillsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2.5rem",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    sectionTitle: {
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "#16161699",
        marginBottom: "0.5rem",
        fontFamily: "Inter, sans-serif",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "#161616",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.95rem",
        lineHeight: 1.6,
    },
    dot: {
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "50%",
        flexShrink: 0,
    },
    footer: {
        textAlign: "center",
        marginTop: "3rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #71001422",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.85rem",
        color: "#16161699",
    },
};



export default Skills;
