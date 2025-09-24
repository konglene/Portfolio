import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    const projects = [ // Alle prosjekt objekter
        {
            title: "Tower Defense Game",
            description: "3D tower defense game featuring procedural map generation and strategic gameplay mechanics.",
            tech: ["Three.js", "JavaScript", "WebGL"],
            image: "/images/tower_def_preview.png",
            link: "https://github.com/konglene/tower-defense-game"
        },
        {
            title: "Personal Blog",
            description: "Developer blog with markdown support and dynamic content management system.",
            tech: ["Next.js", "MongoDB", "Tailwind"],
            image: "/images/blog.jpg",
            link: "https://github.com/konglene/ai-generator"
        },
        {
            title: "Personal Blog",
            description: "Developer blog with markdown support and dynamic content management system.",
            tech: ["Next.js", "MongoDB", "Tailwind"],
            image: "/images/blog.jpg",
            link: "https://github.com/konglene/ai-generator"
        }
    ];

    const mediaContent = [ // Alle media objekter
        {
            title: "Rocket Ship Animation",
            description: "An animated rocket ship flying through space and crashing into an asteroid.",
            type: "video",
            url: "/projects/stop_motion_RAKETTEN.mp4",
            thumbnail: "/images/rocket_animation.png"
        },
        {
            title: "Class Video",
            description: "A class video that I edited.",
            type: "video",
            url: "/projects/IMF_klasse_vid.mp4",
            thumbnail: "/images/imf_klasse_vid.png"
        },
        {
            title: "Film About Myself",
            description: "A short film about me.",
            type: "video",
            url: "/projects/Film_om_meg_selv.mp4",
            thumbnail: "/images/film_om_meg.png"
        }
    ];

    return ( // React komponenter for Projects page
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>
                        Hi, I'm <span className="hero-name">Oscar</span>
                    </h1>
                    <h1>FullStack Developer</h1>
                    <p className="hero-subtitle">I make computer programs</p>
                    <div className="hero-links">
                        <a href="https://github.com/konglene" className="hero-button">GitHub</a>
                        <Link to="/contact" className="hero-button secondary">Contact Me</Link>
                    </div>
                </div>
            </section>

            <section className="projects-section">
                <h2>Featured Work</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <a href={project.link} className="project-card" key={index}>
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={e => {
                                        if (e.target.src.endsWith('/img/placeholder.png')) return;
                                        console.error(`Failed to load image: ${project.image}`);
                                        e.target.src = '/img/placeholder.png';
                                    }}
                                />
                            </div>
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="media-section">
                <h2>Media & Videos</h2>
                <div className="media-grid">
                    {mediaContent.map((media, index) => (
                        <div className="media-card" key={index}>
                            {media.type === "video" ? (
                                <video
                                    className="media-video"
                                    controls
                                    poster={media.thumbnail}
                                    onPlay={(e) => {
                                        const allVideos = document.querySelectorAll("video");
                                        allVideos.forEach((vid) => {
                                            if (vid !== e.target) vid.pause();
                                        });
                                    }}
                                >
                                    <source src={media.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <div className="media-thumbnail">
                                    <img
                                        src={media.thumbnail}
                                        alt={media.title}
                                        onError={e => {
                                            if (e.target.src.endsWith('/img/placeholder.png')) return;
                                            console.error(`Failed to load thumbnail: ${media.thumbnail}`);
                                            e.target.src = '/img/placeholder.png';
                                        }}
                                    />
                                    <div className="play-button">▶</div>
                                </div>
                            )}
                            <div className="media-details">
                                <h3>{media.title}</h3>
                                <p>{media.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Projects;