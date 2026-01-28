import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Wordsearch Portfolio",
        description: "A word search portfolio website experience (you're looking at it!)",
        tags: ["React", "Frontend", "Routing"],
        featured: true,
    },
    {
        title: "Valora",
        description:
            "(Frontend) A financial chatbot project providing economic insights at the touch of your fingertips.",
        tags: ["React", "ML", "FinTech"],
        featured: false,
    },
    {
        title: "Project C",
        description: "Full-stack application with real-time features",
        tags: ["1", "2", "3"],
        featured: false,
    },
];

const Projects = () => {
    return (
        <div style={styles.container}>
            <div style={styles.inner}>
                <Link to="/" style={styles.backLink}>
                    ← Back to puzzle
                </Link>

                <h1 style={styles.title}>Projects</h1>

                <div style={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.card,
                                borderColor: project.featured
                                    ? "#71001466"
                                    : "#71001422",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    styles.cardHover.transform;
                                e.currentTarget.style.boxShadow =
                                    styles.cardHover.boxShadow;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {/*{project.featured && (*/}
                            {/*    <span style={styles.featured}>Featured</span>*/}
                            {/*)}*/}

                            <div style={styles.cardHeader}>
                                <h3 style={styles.cardTitle}>{project.title}</h3>
                                <ExternalLink
                                    size={18}
                                    style={styles.externalIcon}
                                />
                            </div>

                            <p style={styles.description}>
                                {project.description}
                            </p>

                            <div style={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p style={styles.footerNote}>More projects coming soon…</p>
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
        maxWidth: "1000px",
        backgroundColor: "#F2F1ED",
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
    title: {
        textAlign: "center",
        fontFamily: "Georgia, serif",
        fontSize: "2.4rem",
        color: "#710014",
        marginBottom: "2rem",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
    },
    card: {
        backgroundColor: "#F2F1ED",
        padding: "1.5rem",
        borderRadius: "12px",
        border: "1px solid",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    cardHover: {
        transform: "translateY(-6px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    },
    featured: {
        fontSize: "0.7rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#710014",
        marginBottom: "0.5rem",
        display: "inline-block",
        fontFamily: "Inter, sans-serif",
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "0.5rem",
        marginBottom: "0.5rem",
    },
    cardTitle: {
        fontFamily: "Georgia, serif",
        fontSize: "1.2rem",
        color: "#161616",
    },
    externalIcon: {
        color: "#16161666",
        flexShrink: 0,
    },
    description: {
        fontFamily: "Inter, sans-serif",
        fontSize: "0.95rem",
        lineHeight: "1.6",
        color: "#161616",
        marginBottom: "0.75rem",
    },
    tags: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
    },
    tag: {
        fontSize: "0.7rem",
        padding: "0.3rem 0.7rem",
        borderRadius: "999px",
        backgroundColor: "#71001415",
        color: "#710014",
        fontFamily: "Inter, sans-serif",
    },
    footerNote: {
        textAlign: "center",
        marginTop: "2.5rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #71001422",
        fontSize: "0.85rem",
        color: "#16161699",
        fontFamily: "Inter, sans-serif",
    },
};

export default Projects;
