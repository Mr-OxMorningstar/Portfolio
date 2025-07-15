import React, { useState } from "react";
import './style.scss';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
            github: "#",
            live: "#",
            category: "Web Development"
        },
        {
            id: 2,
            title: "Mobile Task Manager",
            description: "Cross-platform mobile app built with Flutter and Firebase",
            technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
            image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
            github: "#",
            live: "#",
            category: "Mobile Development"
        },
        {
            id: 3,
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for data visualization using Python and React",
            technologies: ["Python", "React", "D3.js", "PostgreSQL"],
            image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
            github: "#",
            live: "#",
            category: "Data Science"
        },
        {
            id: 4,
            title: "Real-time Chat Application",
            description: "WebSocket-based chat app with user authentication and file sharing",
            technologies: ["Socket.io", "Express", "React", "JWT"],
            image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
            github: "#",
            live: "#",
            category: "Web Development"
        }
    ];

    const categories = ["All", "Web Development", "Mobile Development", "Data Science"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1 className="projects-title">My Projects</h1>
                <p className="projects-subtitle">
                    Here are some of the projects I've worked on, showcasing my skills in full-stack development
                </p>
            </div>

            <div className="category-filters">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div 
                        key={project.id} 
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.github} className="project-link">
                                        <span>GitHub</span>
                                    </a>
                                    <a href={project.live} className="project-link">
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-category">{project.category}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <div className="modal-info">
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <div className="modal-technologies">
                                {selectedProject.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="modal-links">
                                <a href={selectedProject.github} className="modal-link">View Code</a>
                                <a href={selectedProject.live} className="modal-link primary">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;