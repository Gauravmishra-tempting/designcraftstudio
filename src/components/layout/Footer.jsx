import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center mt-5 overflow-hidden footer">
        <div className="p-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
              Designed and Developed by Gaurav Mishra
            </div>
            <div className="col-sm-12 col-md-4 mb-3 mb-md-0">
              © 2024 Copyright :&nbsp;
              <a className="text-white text-decoration-none" href="#">
                 Gaurav Mishra
              </a>
            </div>
            <div className="col-sm-12 col-md-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
