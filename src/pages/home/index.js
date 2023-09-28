import React from 'react'
import headshot from '../../img/avatars/avatar.jpeg';
import image1 from '../../img/image1.png';
import image2 from '../../img/image2.jpg';
import image3 from '../../img/image3.jpg';
import demo from '../../img/image4.png';


const HomePage = () => {
    return (
        <>
            <main className="page lanidng-page">
                <section className="portfolio-block block-intro">
                    <div className="container">
                        <div className="avatar" id="avatar" style={{backgroundImage: `url(${headshot})`}} ></div>
                        <div className="about-me">
                            <p>Hello! My name is Owen Waldron. I am a computer science student passionate about math, physics, and the world-changing potential of technology.</p>
                            <a className="btn btn-outline-primary" role="button" href="/about">About me</a>
                        </div>
                    </div>
                </section>
                <section className="portfolio-block photography">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="/projects"><img className="img-fluid image" src={image1} alt="example project"/></a></div>
                            <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="/projects"><img className="img-fluid image" src={image2} alt="example project"/></a></div>
                            <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="/projects"><img className="img-fluid image" src={image3} alt="example project"/></a></div>
                        </div>
                    </div>
                </section>
                <section className="portfolio-block call-to-action border-bottom">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center content">
                            <h3>Curious?</h3><a className="btn btn-outline-primary" role="button" href="/projects">See my projects</a>
                        </div>
                    </div>
                </section>
                <section className="portfolio-block skills">
                    <div className="container">
                        <div className="heading">
                            <h2>Highlighted Skills</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card special-skill-item border-0">
                                    <div className="card-header bg-transparent border-0"><i className="icon ion-laptop"></i></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Web Development</h3>
                                        <p className="card-text">Using my backend experience in Python with Django and Flask as well as my frontend proficiency with React.js, JSX, and HTML, I am capable of building powerful web applications and APIs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card special-skill-item border-0">
                                    <div className="card-header bg-transparent border-0"><i className="icon ion-iphone"></i></div>
                                    <div className="card-body">
                                        <h3 className="card-title">iOS Development</h3>
                                        <p className="card-text">I have built multiple iOS apps using Swift and SwiftUI, and have experience implementing a number of technologies with swift including MVVM, AVFoundation, API calls, data persistence with iOS filesystem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card special-skill-item border-0">
                                    <div className="card-header bg-transparent border-0"><i className="icon ion-stats-bars"></i></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Data Analytics and Visualization</h3>
                                        <p className="card-text">I'm a numbers person and I love a good graph. This lends to my skill at creating data, and transforming it into crisp visuals using a wide range of technologies such as pandas, SQL, matplotlib, Google Sheets, and Chart.js.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section className="portfolio-block website gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5 offset-lg-1 text">
                            <h3>How'd I make this?</h3>
                            <p>This web page was designed in Bootstrap Studio, and was originally piggybacking off of my DataPool project’s database before I recreated it in React.js for maintainability. If you have a vision for a web page of your own, contact me so we can discuss realizing it!</p>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="portfolio-laptop-mockup">
                                <div className="screen">
                                    <div className="screen-content" id="demo" style={{backgroundImage: `url(${demo})`}} ></div>
                                </div>
                                <div className="keyboard"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default HomePage;