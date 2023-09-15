import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card border-0">
                <a href={`/projects/view/${props.url}`} >
                    <img className="card-img-top scale-on-hover" src={props.thumbnail} alt={`${props.name} project`} />
                </a>
                <div className="card-body">
                    <h6><a href={`/projects/view/${props.url}`}>{props.name}<p className="text-muted"></p></a></h6>
                    <p className="text-muted card-text">{props.tldr}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;