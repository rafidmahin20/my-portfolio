import React from 'react';

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid container">
        <h1 className='uppercase font-bold text-2xl'>Rafid</h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonials">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;