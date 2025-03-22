import React from 'react';
import Logo from '../../assets/img/logo.png';


const Navbar = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Logo} className="logo img-fluid" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Featuredesign">
                    Features
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link text-white me-2" href="">
                    Our work <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/Webdevelopment">
                        Web development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Graphics">
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/VideoEditing">
                        Video Editing
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="createbtn mb-3 mt-3">
                <a href="/login" className="active me-2 p-2 rounded">
                  Login
                </a>
                <a href="/signin" className="active p-2 rounded">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
