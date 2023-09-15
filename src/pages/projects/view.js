import React from 'react';
import { useParams } from 'react-router-dom';
import PROJECTS from './data/data';
import NotAPage from '../not-a-page';

const ProjectView = () => {
    let projectKey = useParams();

    let project = null;

    for (let i in PROJECTS) {
        let proj = PROJECTS[i];
        if (proj.url === projectKey.name) project = proj;
    }

    if (!project) {
        return <NotAPage />;
    }

    let sliders = []
    for (let i in project.images) {
        if (i <= 0) continue;
        sliders.push(<li data-bs-target="#carousel-1" data-bs-slide-to={i}></li>);
    }

    return (
        <main className="page project-page">
            <section className="portfolio-block project">
                <div className="container">
                    <div>
                        <div className="heading">
                            <h2>{project.name}</h2>
                        </div>
                        <div className="carousel slide" data-bs-ride="carousel" id="carousel-1" style={{width: 80 + "%", display: "block", margin: "auto"}}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100 d-block" src={project.images[0]} alt="Slide" style={{width: "inherit"}}/>
                                </div>
                                {project.images.slice(1).map((image) => {
                                    return (
                                        <div className="carousel-item">
                                            <img className="w-100 d-block" src={image} alt="Slide" />
                                        </div>
                                    );
                                })}
                            </div>
                            <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
                                {sliders}
                            </ol>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: 50 + "px"}}>
                        <div className="col-12 col-md-6 offset-md-1 info">
                            <h3>Description</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="col-12 col-md-3 offset-md-1 meta">
                            <div className="tags">
                                <span className="meta-heading">Technologies</span>
                                {project.technologies.map((tech) => {
                                    return(<span>{tech}</span>);
                                })}
                                <br/>
                                <span className="meta-heading">Links</span>
                                {project.links}
                                <br/>
                                <span className="meta-heading">Date</span><span>{project.dates}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProjectView;