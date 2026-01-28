import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: 'Interactive Portfolio',
        description: 'A word search navigation experience (you\'re looking at it!)',
        tags: ['React', 'TypeScript', 'Tailwind'],
        featured: true,
    },
    {
        title: 'Project Alpha',
        description: 'A creative web application with immersive animations',
        tags: ['Three.js', 'GSAP', 'WebGL'],
        featured: false,
    },
    {
        title: 'Project Beta',
        description: 'Full-stack application with real-time features',
        tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
        featured: false,
    },
];

const Projects = () => {
    return (
        <div className="page-container flex flex-col items-center">
            <div className="w-full max-w-4xl animate-fade-in">
                <Link to="/" className="back-link">
                    {/*<ArrowLeft size={20} />*/}
                    Back to puzzle
                </Link>
            </div>

            <div className="w-full max-w-4xl notepad-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Folder size={16} className="text-secondary/60" />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Selected Work</span>
                    <Folder size={16} className="text-secondary/60" />
                </div>
                <h1 className="page-title text-secondary text-center">Projects</h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-background/50 border rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                                project.featured ? 'border-secondary/30 ring-1 ring-secondary/10' : 'border-border'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {project.featured && (
                                <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary mb-3">
                  Featured
                </span>
                            )}
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors" style={{ fontFamily: 'Lora, serif' }}>
                                    {project.title}
                                </h3>
                                <ExternalLink size={18} className="text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0 ml-2" />
                            </div>
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-muted-foreground/60 mt-8 pt-6 border-t border-border">
                    More projects coming soon...
                </p>
            </div>
        </div>
    );
};

export default Projects;
