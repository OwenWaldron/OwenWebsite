import React from 'react';
import PROJECTS from './data/data';
import ProjectCard from './components/project';

const Projects = () => {
    let projects = []
    for (let i in PROJECTS) {
        let project = PROJECTS[i];
        projects.push(
            <ProjectCard 
                key={i}
                name={project.name}
                tldr={project.tldr}
                url={project.url} 
                thumbnail={project.images[0]} />
        )
    }

    return (
        <main className="page projects-page">
            <section className="portfolio-block projects-cards">
                <div className="container">
                    <div className="heading">
                        <h2>Personal projects</h2>
                    </div>
                    <div className="row">
                        {projects}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;