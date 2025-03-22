import React from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Logo from "../../assets/img/logo.png";

const Signup = () => {
  return (
    <>
    <Navbar />
    <section className="h-100 gradient-form" style={{ marginTop: "100px" }}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black shadow-lg">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-3 mx-md-4">
                      <div className="text-center mb-3">
                        <a href="/"><img src={Logo}
                          style={{width: "50px"}} alt="logo" /></a>
                      </div>
      
                      <form className="needs-validation" novalidate>
                        <p>Register Now</p>
      
                        <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" for="validationCustom01">Username</label>
                          <input type="username" id="validationCustom01" className="form-control" required />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" for="validationCustom01">Email Address</label>
                          <input type="email" id="validationCustom01" className="form-control" required />
                          <div className="invalid-feedback">
                            Please provide a valid email address.
                          </div>
                        </div>
      
                        <div data-mdb-input-init className="form-outline mb-3">
                            <label className="form-label" for="form2Example22">Password</label>
                          <input type="password" id="form2Example22" className="form-control" required />
                          <div className="invalid-feedback">
                            Please provide a valid Password.
                          </div>
                        </div>
      
                        <div className="text-center pt-1 pb-2">
                          <button data-mdb-button-init data-mdb-ripple-init 
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 p-3 mb-3 border-0" 
                          type="submit">Sign in</button>
                        </div>
      
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Do You have an account?</p>
                          <a href="login.html"><button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Login</button></a>
                        </div>
      
                      </form>
      
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Welcome Back to Your Creative Workspace</h4>
                      <p className="small mb-0">Unlock your access to the world of web design, 
                        web development, and video editing. Sign in to explore innovative tools, 
                        collaborate with professionals, and turn your creative visions into reality. 
                        Let's build something extraordinary together!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default Signup