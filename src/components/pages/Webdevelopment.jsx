import React from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Webdevelopmentimg from '../../assets/img/webdevelopmentimg/webdevelopment .png'
import Weatherimg from '../../assets/img/webdevelopmentimg/weatherimg.png'
import Calculatorimg from '../../assets/img/webdevelopmentimg/calculatorimg.png'
import Movieimg from '../../assets/img/webdevelopmentimg/movieimg.png'
import Baelhealthimg from '../../assets/img/webdevelopmentimg/baelhealthimg.png'
import Todolistimg from '../../assets/img/webdevelopmentimg/Todoimg.png'
const Webdevelopment = () => {
  
  return (
    <>
    <Navbar/>
    <section id="development">
    <div className="container">
    <h2 className="mb-4">Web Development Portfolio</h2>
        <div className="row g-4">
            <div className="col-lg-4">
                <div className="card shadow-lg h-100">
                    <img src={Webdevelopmentimg} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Designcraftstudio</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="https://designcraftstudio-psi.vercel.app/" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4">
                <div className="card shadow-lg h-100">
                    <img src={Weatherimg} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Weather App</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="https://weather-website-phi-inky.vercel.app/" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4">
                <div className="card shadow-lg h-100">
                    <img src={Calculatorimg} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Calculator</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="https://calculator-gamma-wine-27.vercel.app/" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
        </div>
        <div className="row mt-2 g-4">
            <div className="col-lg-4">
                <div className="card shadow-lg h-100">
                    <img src={Movieimg} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Movie App</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="https://movie-app-opal-rho.vercel.app/" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4">
                <div className="card shadow-lg h-100">
                    <img src={Baelhealthimg} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Bael Health</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="https://baelhealth.vercel.app/" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4">
                <div className="card shadow-lg h-100">
                    <img 
                    src={Todolistimg} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">To Do List</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="https://to-do-app-peach-tau.vercel.app/" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
        </div>
        {/* <div className="row mt-2 g-4">
            <div className="col-lg-4">
                <div className="card shadow-lg">
                    <img src={} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4">
                <div className="card shadow-lg">
                    <img src={} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4">
                <div className="card shadow-lg">
                    <img src={} 
                    className="card-img-top" 
                    alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="cardbtn p-2 rounded">Visit Site <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
            </div>
        </div> */}
    </div>
   </section>
    <Footer/>
    </>
  )
}

export default Webdevelopment