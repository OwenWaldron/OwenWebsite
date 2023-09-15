import React from 'react'


const Header = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
            <div className="container"><a className="navbar-brand logo" href="/" style={{"fontWeight": "bold"}}>Owen Waldron</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About Me</a></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item"></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;