import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Logo from "../../assets/img/logo.png";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="h-100 gradient-form p-5">
        <div className="container py-5 h-100" style={{ marginTop: "100px" }}>
          <div className="row d-flex justify-content-center align-items-center h-100 p-5">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black shadow-lg">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-3 mx-md-4">
                      <div className="text-center mb-4">
                        <Link to="/">
                          <img src={Logo} style={{ width: "50px" }} alt="logo" />
                        </Link>
                      </div>

                      <form className="needs-validation" noValidate>
                        <p>Please login to your account</p>

                        {/* Email Input */}
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid email address.
                          </div>
                        </div>

                        {/* Password Input */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid Password.
                          </div>
                        </div>

                        {/* Login Button & Forgot Password */}
                        <div className="text-center pt-1 mb-3 pb-2">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 p-3 border-0"
                            type="submit"
                          >
                            Login
                          </button>&nbsp;&nbsp;
                          <Link className="text-muted text-decoration-none" to="/forgot-password">
                            Forgot password?
                          </Link>
                        </div>

                        {/* Create Account Section */}
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link to="/signin">
                            <button type="button" className="btn btn-outline-danger">
                              Create new
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Right Side Content */}
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Welcome Back to Your Creative Workspace</h4>
                      <p className="small mb-0">
                        Unlock your access to the world of web design, web development, and
                        video editing. Sign in to explore innovative tools, collaborate with
                        professionals, and turn your creative visions into reality. Let's build
                        something extraordinary together!
                      </p>
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
  );
};

export default Login;
