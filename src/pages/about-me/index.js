import React from 'react';
import {JOBS, EDUS} from './data/data';
import Work from './components/work.js';
import Education from './components/education.js';
import avatar1 from '../../img/avatars/avatar.jpeg';
import avatar2 from '../../img/avatars/owen3.jpg';
import avatar3 from '../../img/avatars/owen4.jpg';
import resume from './data/Waldron_Owen_Resume.pdf'

const AboutMe = () => {
    let jobs = [];
    let edus = [];

    for (let i in JOBS) {
        let job = JOBS[i];
        job["key"] = i;
        jobs.push(
            <Work key={i} 
                title={job.title} 
                company={job.company}
                dates={job.dates}
                description={job.description} />
        );
    }

    for (let i in EDUS) {
        let edu = EDUS[i];
        edu["key"] = i;
        edus.push(
            <Education key={i} 
                name={edu.name} 
                facility={edu.facility}
                dates={edu.dates}
                description={edu.description} />
        );
    }

    return(
        <main className="page cv-page">
            <section className="portfolio-block block-intro border-bottom">
                <div className="container">
                    <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false" data-bs-keyboard="false" data-bs-touch="false" id="carousel-1" style={{width: "391px", margin: "auto"}}>
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="avatar" id="avatar1" style={{backgroundImage: `url(${avatar1})`}}></div>
                            </div>
                            <div className="carousel-item">
                                <div className="avatar" id="avatar3" style={{backgroundImage: `url(${avatar2})`}}></div>
                            </div>
                            <div className="carousel-item active">
                                <div className="avatar" id="avatar4" style={{backgroundImage: `url(${avatar3})`}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-me">
                        <p><span style={{color: "rgb(0, 0, 0)", backgroundColor: "transparent"}}>Computer science, physics, swimming, rock climbing, cats… My interests are many, but no matter what I’m doing, my love for self improvement and my curious nature persevere.</span></p>
                        <a className="btn btn-outline-primary" role="button" href={resume} download>Download resume (pdf)</a>
                    </div>
                </div>
            </section>
            <section className="portfolio-block cv">
                <div className="container">
                    <div className="education group">
                        <div className="heading">
                            <h2 className="text-center">Education</h2>
                        </div>
                        {edus}
                    </div>
                    <div className="work-experience group">
                        <div className="heading">
                            <h2 className="text-center">Work Experience</h2>
                        </div>
                        {jobs}
                    </div>
                    <div className="group">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="skills portfolio-info-card">
                                    <h2>Languages</h2>
                                    <h3>C</h3>
                                    <div className="progress">
                                        <div className="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 100 + '%'}}><span className="visually-hidden">100%</span></div>
                                    </div>
                                    <h3>Python</h3>
                                    <div className="progress">
                                        <div className="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: 90 + '%'}}><span className="visually-hidden">90%</span></div>
                                    </div>
                                    <h3>Swift</h3>
                                    <div className="progress">
                                        <div className="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: 90 + '%'}}><span className="visually-hidden">90%</span></div>
                                    </div>
                                    <h3>JavaScript</h3>
                                    <div className="progress">
                                        <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80 + '%'}}><span className="visually-hidden">80%</span></div>
                                    </div>
                                    <h3>Java</h3>
                                    <div className="progress">
                                        <div className="progress-bar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60 + '%'}}><span className="visually-hidden">60%</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-info portfolio-info-card">
                                    <h2>Contact Info</h2>
                                    <div className="row">
                                        <div className="col-1"><i className="icon ion-android-calendar icon"></i></div>
                                        <div className="col-9"><span>08/08/2004</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1"><i className="icon ion-person icon"></i></div>
                                        <div className="col-9"><span>Owen Waldron</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1"><i className="icon ion-at icon"></i></div>
                                        <div className="col-9"><span>owen.waldron@uwaterloo.ca</span></div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-1"><i className="icon ion-ios-telephone icon"></i></div>
                                                <div className="col-9"><span>(647) 574-0408</span></div>
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-1"><i className="icon ion-social-linkedin icon"></i></div>
                                                        <div className="col-9"><span><a href="https://www.linkedin.com/in/owaldron/" target="_blank" rel="noreferrer">linkedin.com/in/owaldron/</a></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


export default AboutMe;