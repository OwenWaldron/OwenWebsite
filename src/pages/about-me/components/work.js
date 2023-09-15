import React from 'react';

const Work = (props) => {
    return(
        <div className="item">
            <div className="row">
                <div className="col-md-6">
                    <h3>{props.title}</h3>
                    <h4 className="organization">{props.company}</h4>
                </div>
                <div className="col-md-6"><span className="period">{props.dates}</span></div>
            </div>
            <p className="text-muted">{props.description}</p>
        </div>
    );
}

export default Work;
