import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/newlogo.png";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="site-footer">
          {/* --- Main Footer Section --- */}
          <div className="footer-top" style={{ paddingBottom: "20px" }}>
            <div className="container wow fadeIn" data-wow-delay="0.5s">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <div className="widget widget_ftabout">
                    {/* Centered Logo Wrapper */}
                    <div
                      className="footer-logo"
                      style={{
                        maxWidth: "350px", // Large Logo
                        margin: "0 auto 30px auto", // Centered
                        display: "block",
                      }}
                    >
                      <Link to={"./"}>
                        <img
                          src={logo}
                          alt="Paper Bird Shishukul"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* --- Quick Links (Now Black & Centered) --- */}
                <div className="col-12 text-center">
                  <div className="widget widget_services border-0">
                    <ul
                      className="list-inline"
                      style={{ padding: 0, margin: "0 0 20px 0" }}
                    >
                      <li className="list-inline-item mx-3">
                        <Link 
                          to={"./"} 
                          style={{ color: "#000000", fontWeight: "600" }}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="list-inline-item mx-3">
                        <Link 
                          to={"/about-1"} 
                          style={{ color: "#000000", fontWeight: "600" }}
                        >
                          About
                        </Link>
                      </li>
                      <li className="list-inline-item mx-3">
                        <Link 
                          to={"/classes"} 
                          style={{ color: "#000000", fontWeight: "600" }}
                        >
                          Classes
                        </Link>
                      </li>
                      <li className="list-inline-item mx-3">
                        <Link 
                          to={"/gallery-masonary"} 
                          style={{ color: "#000000", fontWeight: "600" }}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className="list-inline-item mx-3">
                        <Link 
                          to={"/careers"} 
                          style={{ color: "#000000", fontWeight: "600" }}
                        >
                          Careers
                        </Link>
                      </li>
                      <li className="list-inline-item mx-3">
                        <Link 
                          to={"/contact-us"} 
                          style={{ color: "#000000", fontWeight: "600" }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Footer Bottom --- */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                {/* Copyright Section */}
                <div className="col-lg-6 col-md-6 text-md-left text-center">
                  <span style={{ color: "#000" }}> {/* Ensure copyright is also readable */}
                    Copyright © 2026 Paper Bird Shishukul. All rights reserved
                  </span>
                </div>

                {/* Made with Love Section */}
                <div className="col-lg-6 col-md-6 text-md-right text-center">
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>
                    Made with  <span style={{ color: "#e25555" }}>♥</span> by{" "}
                    <span style={{ color: "#48af53", fontWeight: "bold" }}>Lil Triangle</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;